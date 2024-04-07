'use client';
import { Inter } from "next/font/google";
import "../globals.css";
import { useState } from "react";
import DashBoardComponent from "@/component/DashBoard";
import { MenuIcon } from "@/component/icon/menu";
import AdminNavbar from "@/component/AdminNavbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowMenu, setMenu] = useState<boolean>(false)
  return (
    <html lang="en">
      <body className="flex non-scroll-bar  overflow-x-auto">

        <MenuIcon
          className=" fixed bottom-0 h-8 w-8 cursor-pointer lg:hidden z-50"
          onclick={() => setMenu(!isShowMenu)} />
        <aside className={` sticky top-0 ${!isShowMenu && "hidden"} lg:block `}>
          <DashBoardComponent />
        </aside>
        {children}
      </body>
    </html>
  );
}
