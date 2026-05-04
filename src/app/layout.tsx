import type { Metadata } from "next";
import "@fontsource/inter";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
 export const metadata: Metadata = {
  title: "LAHIBAH MANAGEMENT SYSTEM",
  description: "School Management System",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className="font-sans">
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
