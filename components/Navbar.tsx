"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const title = "Yr.";

const navItems = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "about",
  //   path: "/about",
  // },
  {
    name: "blog",
    path: "/posts",
  },
  {
    name: "favorites",
    path: "/favorites",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      animate={{
        opacity: [0, 1],
        filter: ["blur(10px)", "blur(0px)"],
        transition: {
          duration: 2,
          delay: 0,
          ease: "linear",
        },
      }}
      className="sticky top-0 lg:px-16 lg:py-4 px-4"
    >
      <div className="flex items-center justify-between py-3 bg-transparent dark:bg-gray-800 w-full">
        <Link href="/#">
          <span className="font-light tracking-widest">{title}</span>
        </Link>

        <ul className="flex space-x-3 text-[12px] font-light tracking-widest lg:space-x-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="underline-offset-2 transition-all duration-300 ease-in-out"
            >
              <Link
                className="group transition-all duration-300 ease-in-out"
                href={item.path}
              >
                {pathname === item.path ? (
                  <span className="bg-gradient-to-r from-black to-black bg-[length:30%_2px] dark:from-white dark:to-white bg-left-bottom bg-no-repeat py-1 uppercase transition-all duration-500 ease-out group-hover:bg-[length:30%_2px] group-hover:text-black dark:group-hover:text-white">
                    {item.name}
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-black to-black bg-[length:0%_2px] dark:from-white dark:to-white bg-left-bottom bg-no-repeat py-1 uppercase transition-all duration-500 ease-out group-hover:bg-[length:30%_2px] group-hover:text-black dark:group-hover:text-white">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
