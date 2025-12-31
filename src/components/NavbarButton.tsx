"use client"
import Image from "next/image"
import React from "react"
type NavButtonProps = {
  onClick: () => void
}

export default function NavButton({ onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
     className=" md:hidden lg:hidden h-10 w-10 p-2 bg-blue-600 rounded-xl border-2 border-b-amber-300"
      aria-label="Toggle Menu"
    >
         <Image src="/menu.png" alt="logo" width={32} height={32} />
    </button>
  )
}
