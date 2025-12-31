import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import ClientLayout from "@/app/Parentlayout" 
import Navber from "@/components/navbar"
import { Menu } from "@/components/Menu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <ClientLayout menu={<Menu/>} Navbar={<Navber/>}>
        {children}
      </ClientLayout>
    </ClerkProvider>
  )
}
