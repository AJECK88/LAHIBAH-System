"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"

const Homepage = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { isSignedIn, user, isLoaded } = useUser()
  const route = useRouter()

  useEffect(() => {
    if (isSignedIn && user) {
      const role = (user?.publicMetadata as any)?.role
      if (role) {
        route.push(`/${role}`)
      }
    }
  }, [user, route, isSignedIn])

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center gap-4 w-100% min-w-fit lg:w-full max-w-7xl mx-auto px-4 py-4 ">
          <div className="border-2 border-blue-900 px-4 py-2 rounded font-bold text-xs sm:text-sm lg:text-lg">
              <a className="text-blue-400 font-bold text-lg" href="/">
                LAHIBA <span className="text-black">MANAGEMENT</span>
                <span className="text-red-600"> SYSTEM</span>
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            <Image
              alt="menu"
              src={menuOpen ? "/close_nav.png" : "/menu.png"}
              width={32}
              height={32}
            />
          </button>

          {/* Navigation Menu */}
          <ul
            className={` flex items-start lg:items-center lg:static right-0 top-16 w-full lg:w-auto bg-white lg:bg-transparent lg:flex gap-6 flex-col lg:flex-row font-semibold text-base lg:text-lg transition-all duration-300 ease-in-out ${menuOpen ? "block py-4 lg:py-0" : "hidden lg:block"}`}
          >
            <li className="hover:text-amber-500 transition w-full lg:w-fit">
              <Link href="#admission">Admission/Registration</Link>
            </li>
            <li className="hover:text-amber-500 transition w-full lg:w-fit">
              <Link href="#about">About Us</Link>
            </li>
            <li className="hover:text-amber-500 transition w-full lg:w-fit">
              <Link href="#help">Help</Link>
            </li>
            <li className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition w-full lg:w-fit text-center">
              <Link href="/sign-in">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full h-56 sm:h-72 lg:h-96 relative flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/image/sky%20scraper.jpg")',
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 text-white px-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Admission And Registration
          </h3>
          <p className="text-sm sm:text-base lg:text-lg underline">
            <a href="#admission">Admission And Registration</a>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 text-center font-bold mb-12">
            Students Admission and Registration Information
          </h1>

          <div className="space-y-12" id="admission">
            {/* Section 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Requirements for Admission into the First Year of the HND/BTS/SRN Program
              </h2>
              <ol className="space-y-4 text-gray-700 text-sm sm:text-base list-decimal list-inside">
                <li className="leading-relaxed">
                  Fill and submit the online admission application form{" "}
                  <a className="text-blue-600 underline hover:text-blue-800" href="">
                    click here
                  </a>
                </li>
                <li className="font-semibold">Attach the following documents:</li>
                <ul className="ml-6 space-y-2 list-disc list-inside text-gray-600">
                  <li>Certified copy of GCE Advanced level (two subjects in one sitting)</li>
                  <li>Certified copy of birth certificate</li>
                  <li>Photo copy of GCE O/L or CAP</li>
                  <li>National Identity Card or international passport</li>
                  <li>Receipt of registration fee payment</li>
                  <li>4×4 passport size photograph</li>
                </ul>
              </ol>
              <p className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 text-gray-700 text-sm sm:text-base">
                Submit documents to the Admissions Office (Room 1, Central Administrative Block). Provisional admission pending file review. Contact{" "}
                <a className="text-blue-600 underline" href="mailto:example@mail.com">
                  example@mail.com
                </a>
                {" "}or visit{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://laureateuniversityinstitute.com"
                >
                  laureateuniversityinstitute.com
                </a>
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Requirements for Admission into the One Year Top-Up Degree Programme
              </h2>
              <ol className="space-y-4 text-gray-700 text-sm sm:text-base list-decimal list-inside">
                <li className="leading-relaxed">
                  Fill and submit the online admission application form{" "}
                  <a className="text-blue-600 underline hover:text-blue-800" href="">
                    click here
                  </a>
                </li>
                <li className="font-semibold">Attach the following documents:</li>
                <ul className="ml-6 space-y-2 list-disc list-inside text-gray-600">
                  <li>Certified copy of HND, HPD, BTS, or recognized diploma</li>
                  <li>Certified copy of birth certificate</li>
                  <li>Photo copy of GCE A/L or BACC</li>
                  <li>National Identity Card or international passport</li>
                  <li>Receipt of registration fee payment</li>
                  <li>4x4 passport size photograph</li>
                </ul>
              </ol>
              <p className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 text-gray-700 text-sm sm:text-base">
                Submit to the Admissions Office. Contact{" "}
                <a className="text-blue-600 underline" href="mailto:info@laureateinstitute.com">
                  info@laureateinstitute.com
                </a>
                {" "}or visit{" "}
                <Link className="text-blue-600 underline" href="https://laureateuniversityinstitute.com">
                  laureateuniversityinstitute.com
                </Link>
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Requirements for Admission into the Master&apos;s Degree Programme
              </h2>
              <ol className="space-y-4 text-gray-700 text-sm sm:text-base list-decimal list-inside">
                <li className="leading-relaxed">
                  Fill and submit the online admission application form
                </li>
                <li className="font-semibold">Attach the following documents:</li>
                <ul className="ml-6 space-y-2 list-disc list-inside text-gray-600">
                  <li>Certified copy of Bachelor&apos;s Degree or Attestation of Results</li>
                  <li>Certified undergraduate transcripts</li>
                  <li>Certified copy of birth certificate</li>
                  <li>Letter of Motivation (max 1 page)</li>
                  <li>National Identity Card or Passport</li>
                  <li>Two recommendation letters</li>
                  <li>4x4 passport size photograph</li>
                </ul>
              </ol>
              <p className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 text-gray-700 text-sm sm:text-base">
                Submit to the Admissions Office. Contact{" "}
                <a className="text-blue-600 underline" href="mailto:info@laureateinstitute.com">
                  info@laureateinstitute.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 w-full mt-12">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <a className="text-blue-400 font-bold text-lg" href="/">
                LAHIBA <span className="text-white">MANAGEMENT</span>
                <span className="text-red-600"> SYSTEM</span>
              </a>
            </div>
            <p className="text-sm">LAHIBA INFORMATION MANAGEMENT SYSTEM</p>
            <div className="flex gap-4">
              <a
                href=""
                className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Image src="/facebook.png" width={20} height={20} alt="facebook" />
              </a>
              <a
                href=""
                className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Image src="/tiktok.png" width={20} height={20} alt="tiktok" />
              </a>
              <a
                href=""
                className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Image src="/mail.png" width={20} height={20} alt="mail" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Information</h3>
            <div> <h1 className="text-2xl">Information</h1> <div className="flex flex-row"> 
              <div className="w-[20%] h-[5px] bg-white"></div> 
            <div className="w-[80%] h-[5px] bg-[#271288]"></div> </div> </div>
            <ul className="space-y-3 text-xl">
              <li className="hover:text-blue-400 pt-2 transition">
                <a href="#about">About Us</a>
              </li>
              <li className="hover:text-blue-400 transition">
                <a href="">Student Registration</a>
              </li>
              <li className="hover:text-blue-400 transition">
                <a href="#admission">Admission & Registration</a>
              </li>
              <li className="hover:text-blue-400 transition">
                <a href="">Teacher Registration</a>
              </li>
              <li className="hover:text-blue-400 transition">
                <a href="#help">Help</a>
              </li>
            </ul>
          </div>

        
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 pb-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 LAHIBA Management System. All rights reserved. Manage by: Students Of Lahiba</p>
        </div>
      </footer>
    </div>
  )
}

export default Homepage