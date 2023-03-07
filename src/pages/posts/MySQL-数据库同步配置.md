---
title: MySQL 数据库同步配置
date: 2017-04-05 11:42:05
tag: ['MySQL']
description: MySQL主从同步，即MySQL Replication，可以实现将数据从一台数据库服务器同步到多台数据库服务器。MySQL数据库自带主从同步功能，经过配置，可以实现基于库、表结构的多种方案的主从同步。
---

[[TOC]]

#### 创建远程登陆用户
默认的 mysql 配置仅允许本地登录。先要修改配置 /etc/mysql/mysql.conf.d/mysql.cnf，把这一行注释掉。


```
# By default we only accept connections from localhost
# bind-address   = 127.0.0.1
```
重启 mysql 后，然后登录 mysql 添加用户。
```
### 查看用户
mysql> select user, Host from mysql.user;
+------------------+---------------+
| user              | Host         |
+------------------+---------------+
| root              | 127.0.0.1    |
| root              | ::1          |
| debian-sys-maint  | localhost    |
| mysql.sys         | localhost    |
| root              | localhost    |
| root              | ubuntu-server|
+------------------+---------------+
6 rows in set (0.00 sec)

### 添加远程登录用户
mysql> grant replication slave on *.* to 'replicate_user'@'%' identified by '123456';
Query OK, 0 rows affected, 1 warning (0.01 sec)

### 此处添加的用户 replicate_user 是允许任何IP 远程登陆 表示为 '%'
### 如果没有该需求 可以在创建的时候 指定允许某一个IP登陆 'user'@'IP'

### 确认添加成功
mysql> select user, Host from mysql.user;
+------------------+---------------+
| user              | Host         |
+------------------+---------------+
| replicate_user    | %            |
| root              | 127.0.0.1    |
| root              | ::1          |
| debian-sys-maint  | localhost    |
| mysql.sys         | localhost    |
| root              | localhost    |
| root              | ubuntu-server|
+------------------+---------------+
7 rows in set (0.00 sec)

### 查看所有用户的权限
mysql> select * from mysql.user\G
...
### 略过非目标用户
...
*************************** 7. row ***************************
         Host: %
         User: replicate_user
     Select_priv: N
     Insert_priv: N
     Update_priv: N
     Delete_priv: N
     Create_priv: N
      Drop_priv: N
     Reload_priv: N
    Shutdown_priv: N
     Process_priv: N
      File_priv: N
      Grant_priv: N
   References_priv: N
      Index_priv: N
      Alter_priv: N
     Show_db_priv: N
      Super_priv: N
Create_tmp_table_priv: N
   Lock_tables_priv: N
     Execute_priv: N
   Repl_slave_priv: Y
   Repl_client_priv: N
   Create_view_priv: N
    Show_view_priv: N
 Create_routine_priv: N
  Alter_routine_priv: N
   Create_user_priv: N
      Event_priv: N
     Trigger_priv: N
Create_tablespace_priv: N
       ssl_type:
      ssl_cipher:
     x509_issuer:
     x509_subject:
    max_questions: 0
     max_updates: 0
   max_connections: 0
 max_user_connections: 0
        plugin: mysql_native_password
authentication_string: *7EEFBE4E8365990EC8454EE2182B97431575A5C8
   password_expired: N
password_last_changed: 2016-11-30 14:56:35
  password_lifetime: NULL
    account_locked: N
7 rows in set (0.00 sec)

### 从上面可以看到，我们刚建立的用户只有一个 slave 权限，由于我们需要使用远程登录，所有要再开一个权限(安全起见只开一个同步权限)
### 打开 supaer 权限
mysql> grant super on *.* to replicate_user@'%';

### 确认已经打开
mysql> select * from mysql.user\G
...
### 略过非目标用户行
...
*************************** 7. row ***************************
         Host: %
         User: replicate_user
     Select_priv: N
     Insert_priv: N
     Update_priv: N
     Delete_priv: N
     Create_priv: N
      Drop_priv: N
     Reload_priv: N
    Shutdown_priv: N
     Process_priv: N
      File_priv: N
      Grant_priv: N
   References_priv: N
      Index_priv: N
      Alter_priv: N
     Show_db_priv: N
      Super_priv: Y
Create_tmp_table_priv: N
   Lock_tables_priv: N
     Execute_priv: N
   Repl_slave_priv: Y
   Repl_client_priv: N
   Create_view_priv: N
    Show_view_priv: N
 Create_routine_priv: N
  Alter_routine_priv: N
   Create_user_priv: N
      Event_priv: N
     Trigger_priv: N
Create_tablespace_priv: N
       ssl_type:
      ssl_cipher:
     x509_issuer:
     x509_subject:
    max_questions: 0
     max_updates: 0
   max_connections: 0
 max_user_connections: 0
        plugin: mysql_native_password
authentication_string: *7EEFBE4E8365990EC8454EE2182B97431575A5C8
   password_expired: N
password_last_changed: 2016-11-30 14:56:35
  password_lifetime: NULL
    account_locked: N
7 rows in set (0.00 sec)

### 刷新生效
mysql>flush privileges;
```

打开防火墙 3306 端口。  
```
$ iptables -A FW_INPUT -p tcp -m tcp --dport 3306 -j ACCEPT
```

在另一台服务器的终端上尝试远程登陆。  
```
$ mysql -h'172.16.2.228' -u'replicate_user' -p'123456'
```

#### 修改 mysql 配置文件，配置互主备份
在 /etc/mysql/mysql.conf.d/mysql.cnf 添加以下内容：
```
# 作为 master 的配置
# 忽略系统的 DB
binlog_ignore_db   = information_schema
binlog_ignore_db   = mysql
binlog_ignore_db   = performance_schema
binlog_ignore_db   = sys
# 上传 DB 
binlog_do_db     = database

# 作为 slave 的配置
replicate_do_db    = database
replicate_ignore_table = table

# multi-source replication
master_info_repository  = TABLE
relay_log_info_repository = TABLE
```
重启 mysql。
```
$ service mysql restart
```

#### 开始配置
```
### 停止 slave 运行
mysql> stop slave;

### 设置 slave 通道
mysql> CHANGE MASTER TO
   MASTER_HOST='172.16.2.107',
   MASTER_USER='replicate_user',
   MASTER_PASSWORD='123456 ',
   MASTER_LOG_FILE='mysql-bin.000069',
   MASTER_LOG_POS=1902
   FOR CHANNEL 'cfmanager';

### 启动 slave
mysql> start slave;

### 查看 slave 状态
mysql> show slave status\G
...
      Slave_IO_Running: Yes
      Slave_SQL_Running: Yes
...
### 只要保证以上两项是 Yes 就可以了
```



