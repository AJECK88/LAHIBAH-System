import "../globals.css";
import Image from "next/image"
import type { Metadata } from "next";
import Link from "next/link"
import {Menu} from "../../components/Menu"
import {Navber}from "../../components/navbar"
 export const metadata: Metadata = {
  title: "LAHIBA School Management System",
  description: "School Management System",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <div className="h-screen flex ">
      {/*The left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] pl-3 ">
        <Link href="" className="flex items-center justify-center lg:justify-start gap-2" >
         <Image src="/logo.png" alt="logo" width={32} height={32}/>
         <span className=" hidden lg:block">LAHIBA</span>
             </Link>
       <Menu />
      </div>
      {/* The rigth */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navber />
           {children}</div>
      </div>
  
  );
}