"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "../components/Menu"
import NavButton from "@/components/NavbarButton"
export default function ClientLayout({
  children,
  menu,
  Navbar
}: {
  children: React.ReactNode
  menu: React.ReactNode
  Navbar: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden">

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static z-50
          h-full bg-white
          w-60 md:w-[22%] lg:w-[16%] xl:w-[14%]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Link href="/" className="flex items-center gap-2 p-4">
          <Image src="/image/Lahiba.png" alt="logo" width={32} height={32} />
          <span className="lg:block font-semibold">LAHIBA</span>
        </Link>

        <div className="flex-1 overflow-y-auto h-full pb-4">
        {menu}
        </div>
      </aside>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* CONTENT */}
      <main className="flex-1 bg-[#F7F8FA] overflow-y-auto">
        <div className="sticky top-0 z-30 bg-[#F7F8FA] px-4 py-3 flex items-center gap-3">
          <NavButton onClick={() => setIsOpen(!isOpen)} />
          {Navbar}
        </div>

        <div className="md:p-2">{children}</div>
      </main>
    </div>
  )
}
