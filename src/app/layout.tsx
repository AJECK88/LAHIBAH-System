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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          {children}
          <ToastContainer
            position="bottom-right"
            theme="light"
            className="text-black"
          />
        </ClerkProvider>
      </body>
    </html>
  );
}
