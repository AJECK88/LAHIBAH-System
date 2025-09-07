"use client"
import Image from "next/image"
import React from "react"

type NavButtonProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavButton: React.FC<NavButtonProps> = ({ setIsMenuOpen }) => {
  return (
    <div
      className="lg:hidden h-[40px] w-[40px] p-2 bg-blue-600 rounded-xl border-2 border-b-amber-300"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <Image src="/menu.png" alt="logo" width={32} height={32} />
    </div>
  )
}

export default NavButton
