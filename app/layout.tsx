"use client";
import { Navbar } from "@/components";
import { Ubuntu } from "next/font/google";
import { usePathname } from "next/navigation";

import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      className={`text-black dark:text-white dark:bg-black ${ubuntu.className} w-screen h-screen bg-neutral-50`}
    >
      <body className="antialiased mb-40 flex flex-col max-w-7xl lg:mx-auto min-h-full w-full bg-white border-x border-neutral-100">
        <Navbar />
        <main className="max-w-5xl flex-auto min-w-0 mt-6 md:mt-0 flex flex-col justify-center px-2 md:px-0 w-full min-h-full mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
