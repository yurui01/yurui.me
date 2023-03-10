---
title: MySQL 数据库同步配置Shell脚本
date: 2017-04-20 19:17:59
tag: ['MySQL']
description: 之前写过一篇关于MySQL配置同步的，后来觉得操作起来太麻烦就写了个shell 还挺好用的
---

> 之前写过一篇关于MySQL配置同步的，后来觉得操作起来太麻烦就写了个shell 还挺好用的

[[TOC]]

#### 代码
````shell
CFAGENT_IP_LIST="172.16.2.109"
CFAGENT_MYSQL_USER="replicate_user"
CFAGENT_MYSQL_PWD="123456"
LOCAL_HOST="root"
LOCAL_PWD="123456"
CMD_MASTER_STATUS="show master status;"
CMD_SLAVE_STATUS="show slave status;"
LOCAL_MYSQL="mysql -u${LOCAL_HOST} -p${LOCAL_PWD} \
    --default-character-set=utf8 -A -N"

#===============================================================================
# Function Define
#===============================================================================
# Description: 登录节点获得 master status，然后添加 slave channel
# Name: add_slave_channel
# Param: $1=ip $2=channel_name
# Return:
# Example: add_slave_channel ${ip} ${channel_name}
function add_slave_channel()
{
    local L_HOST=$1
    local L_CHANNEL_NAME=$2
    if [[ -z ${L_HOST} || -z ${L_CHANNEL_NAME} ]]; then
        return 1
    fi

    local L_REMOTE_MYSQL="mysql -h${L_HOST} -u${CFAGENT_MYSQL_USER} \
        -p${CFAGENT_MYSQL_PWD} --default-character-set=utf8 -A -N"
    local L_REMOTE_MASTER_INFO=`${L_REMOTE_MYSQL} -e "${CMD_MASTER_STATUS}"`
    L_REMOTE_MASTER_INFO=(${L_REMOTE_MASTER_INFO})
    local L_BIN_FILE=${L_REMOTE_MASTER_INFO[0]}
    local L_POS=${L_REMOTE_MASTER_INFO[1]}
    printf "BIN_FILE: %s POS: %s\n" ${L_BIN_FILE} ${L_POS}
    if [[ -z ${L_BIN_FILE} ]]; then
        echo "`date +%Y-%m-%d/%H:%M:%S`:Err mysql connect to ${L_HOST} \
            failed." >> ${ERR_LOG_FILE}
        return 1
    fi

    # set slave
    L_SLAVE_CMD="CHANGE MASTER TO \
        MASTER_HOST='${L_HOST}', \
        MASTER_USER='${CFAGENT_MYSQL_USER}', \
        MASTER_PASSWORD='${CFAGENT_MYSQL_PWD}', \
        MASTER_LOG_FILE='${L_BIN_FILE}', \
        MASTER_LOG_POS=${L_POS} \
        FOR CHANNEL '${L_CHANNEL_NAME}';"
    ${LOCAL_MYSQL} -e "${L_SLAVE_CMD}"
}

#===============================================================================
# Main
# 处理流程
# 1. 关闭 slave
# 2. 获取 master status，获取 bin file 与 pos，配置 slave channel。
# 3. 开启 slave
#===============================================================================

# stop slave
SLAVE_CMD="stop slave;"
${LOCAL_MYSQL} -e "${SLAVE_CMD}"

for ip in ${CFAGENT_IP_LIST}; do
    add_slave_channel ${ip} ${ip}
done

# start slave
SLAVE_CMD="start slave;"
${LOCAL_MYSQL} -e "${SLAVE_CMD}"

````

#### 使用方法
![](https://i.loli.net/2019/03/05/5c7e5baaa49f1.png)  


1. 修改目标机和本地机的mysql用户,密码(目标机mysql用户需要支持远程登陆,参考第4步)
2. chmod 777 set_slave.sh
3. ./set_slave.sh
