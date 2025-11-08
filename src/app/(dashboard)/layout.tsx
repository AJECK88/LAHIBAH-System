
import "../globals.css"
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { Menu } from "../../components/Menu"
import { Navber } from "../../components/navbar"
import NavButton from "@/components/NavbarButton"
import { ClerkProvider } from "@clerk/nextjs"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const menuRef = useRef<HTMLDivElement>(null)

  // // Close menu if user clicks outside
  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       menuRef.current &&
  //       !menuRef.current.contains(event.target as Node)
  //     ) {
  //       setIsMenuOpen(false)
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [])

  return (  <ClerkProvider>
    <div className="h-screen flex lg:pl-5">
      {/* The left */}
      <div className="md:w-[8%] lg:w-[16%] flex flex-col lg:items-start">
      <Link
  href=""
  className="hidden lg:flex items-center justify-center lg:justify-start gap-2 pt-3 w-full"
>
  <Image src="/logo.png" alt="logo" width={32} height={32} />
  <span className="hidden lg:block">LAHIBA</span>
</Link>

        {/* Sidebar */}
        <div
          // ?\ref={menuRef} 
          className={`absolute z-50  bg-white w-[200px] lg:sticky h-full transition-all duration-500 
            "left-0" : "-left-[1000px]"}`}
        >
          <Menu />
        </div>
      </div>

      {/* The right */}
      <div className="w-[100%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
      <div className="flex justify-between items-center w-full py-4 px-2">
   <Navber /> 
</div>
        {children}
      </div>
    </div>
    </ClerkProvider>
  )
}
