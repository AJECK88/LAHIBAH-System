import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
 export const metadata: Metadata = {
  title: "LAHIBAH MANAGEMENT SYSTEM",
  description: "School Management System",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}    <ToastContainer position="bottom-right" theme="light" className={"text-black"} /></body>
    </html>
    </ClerkProvider>
  );
}
