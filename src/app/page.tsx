"use client"
import Link from "next/link"
import Image from "next/image"
import React from "react"

const Homepage = () => {
  const [Menu, setMenuOpen] = React.useState(true);

  const handleMenuClick = () => {
    const siteBar = document.querySelector(".Sitbar");
    if (siteBar) {
      siteBar.classList.toggle("active");
    }
    setMenuOpen(prove => !prove);
  };

  return (
    <div>
      <header className="w-full bg-white p-2 flex relative">
        <nav className="flex justify-between items-center w-full lg:w-[70%] mx-auto lg:flex-row">
          <div className="border-2 border-black p-3 font-semibold text-sm lg:text-xl">
            <a className="text-blue-900" href="">
              LAHIIBA <span className="text-black">MANAGEMENT</span> <span className="text-red-800">IN...</span>
            </a>
          </div>
          <div className="Menu" onClick={handleMenuClick}>
            <Image className="" alt="" src={Menu ? "/menu.png" : "/close_nav.png"} width={40} height={40} />
          </div>
          <ul className="Sitbar flex gap-4 items-center text-stone-600 hover:text-shadow-neutral-800 flex-col lg:flex-row font-semibold text-xl Navbar">
            <li className="hover:text-amber-300 hover:underline">
              <Link href="">Admission/registration</Link>
            </li>
            <li className="hover:text-amber-300">
              <Link href="">About Us</Link>
            </li>
            <li className="hover:text-amber-300 hover:underline">
              <Link href="">Help</Link>
            </li>
            <li className="hover:text-amber-300 hover:underline">
              <Link href="/admin">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <div
          style={{
            backgroundImage: 'url("/image/sky%20scraper.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundColor: "black",
            height: "20vh",
            width: "100%",
          }}
          className="w-full flex flex-col text-center font-semibold justify-center imageBackground text-white text-sm lg:text-2xl"
        >
          <h3>Admission And Registration</h3>
          <h3 className="underline underline-offset-1">
            <a href="">Admission And Registration</a>/Admission And Registration
          </h3>
        </div>
      </section>

      <section className="p-5 w-full">
        <h1 className="text-2xl lg:text-[40px] text-[#625757] text-center">
          Students Admission and Registration Information
        </h1>
        <ol style={{ listStyleType: "lower-roman", paddingLeft: "1rem", color: "black" }} className="flex flex-col gap-4 pl-4 w-full lg:w-[70%] m-auto">
          <li className="w-full text-gray-500 flex flex-col gap-3 lg:text-2xl">
            <h2 className="text-sm lg:text-[30px] font-semibold text-gray-900">
              REQUIREMENTS FOR ADMISSION INTO THE FIRST YEAR OF THE HND/BTS/SRN PROGRAM
            </h2>
            <ol style={{ listStyleType: "upper-alpha", listStylePosition: "inside" }}>
              <li>
                <span>
                  Applicants should fill and submit the online admission application form at the following page:
                  <a className="text-blue-500 text-sm underline" href="">click here</a>
                </span>
              </li>
              <li>
                <span>
                  The following documents should be attached to the completed application form;
                </span>
              </li>
              <li>Certified copy of GCE Advanced level, passed in at least two subjects in one sitting excluding Religious Studies, or BACC (All series),</li>
              <li>Certified copy of birth certificate,</li>
              <li>Photo copy of GCE O/L, or CAP,</li>
              <li>Photo copy of National Identity Card or international passport for foreigners,</li>
              <li>Photo copy of receipt of payment of registration fee, and,</li>
              <li>4*4 passport size photograph affixed to the application form.</li>
            </ol>
            <p className="font-sm">
              The above documents in a self-addressed file should be submitted to the Admissions Office (Room one of the Central administrative Block). The applicant shall be granted provisional admission upon submission pending study of file and granting of final admission by the Admission Commission, wherein admission letters shall be issued to the students admitted. Contact example@mail.com or visit our website: laureateuniversityinstitute.com should you require more information
            </p>
          </li>
          <li className="w-full text-gray-500 flex flex-col gap-3 lg:text-2xl">
            <h2 className="text-sm lg:text-[30px] font-semibold text-gray-900">
              REQUIREMENTS FOR ADMISSION INTO THE ONE YEAR TOP-UP DEGREE PROGRAMME
            </h2>
            <ol style={{ listStyleType: "decimal", listStylePosition: "inside" }}>
              <li>
                <span>
                  Applicants should fill and submit the online admission application form at the following page
                  <a className="text-blue-500 text-sm underline" href=""> click here</a>
                </span>
              </li>
              <li>
                <span>
                  The following documents should be attached to the completed application form;
                </span>
              </li>
              <li>Certified copy of HND, HPD, BTS, DSEP Success Slip or recognized equivalent diploma,</li>
              <li>Certified copy of birth certificate,</li>
              <li>Photo copy of GCE A/L, or BACC,</li>
              <li>Photo copy of National Identity Card or international passport for foreigners,</li>
              <li>Photo copy of receipt of payment of registration fee, and,</li>
              <li>4*4 passport size photograph affixed to the application form.</li>
            </ol>
            <p className="font-sm">
              The above documents in a self-addressed file should be submitted to the Admissions Office.
              The applicant shall be granted provisional admission upon submission pending study of file and granting of
              final admission by the Admission Commission, wherein admission letters shall be issued to the students
              admitted. Contact info@laureateinstitute.com or visit our
              website:
              <Link className="text-blue-500 underline" href="https://laureateuniversityinstitute.com">
                laureateuniversityinstitute.com
              </Link>
              should you require more information
            </p>
          </li>
          <li className="w-full text-gray-500 flex flex-col gap-3 lg:text-2xl">
            <h2 className="text-sm lg:text-[30px] font-semibold text-gray-900">
              REQUIREMENTS FOR ADMISSION INTO THE MASTER&apos;S DEGREE PROGRAMME
            </h2>
            <ol className="w-full text-gray-500 flex flex-col gap-3 lg:text-2xl" style={{ listStyleType: "lower-alpha", listStylePosition: "inside", margin: 0, paddingLeft: 2 }}>
              <li>
                <span>
                  Applicants should fill and submit the online admission application form at the following page click here
                </span>
              </li>
              <li>Certified copy of Bachelor&apos;s Degree or Attestation of Results/Completion of Course (certified by the competent academic authorities)</li>
              <li>Certified copies of undergraduate academic transcripts (certified by the competent academic authorities),</li>
              <li>Certified copy of birth certificate,</li>
              <li>Letter of Motivation (max. 1 page)</li>
              <li>National Identity Card or Passport for foreigners,</li>
              <li>Two recommendation letters signed by referees/recommenders,</li>
              <li>Affix a 4*4 passport size photograph on the application form</li>
            </ol>
            <p>
              The above documents in a self-addressed file should be submitted to the Admissions Office.
              The applicant shall be granted provisional admission upon submission pending study of file and granting of final admission by the Admission Commission, wherein admission letters shall be issued to the students admitted. Contact info@laureateinstitute.com  or visit our website: laureateuniversityinstitute.com
              should you require more information
            </p>
          </li>
        </ol>
      </section>

      <footer className="bg-[#262323] w-full">
        <div className="w-full lg:w-[80%] flex justify-around pt-5 pb-5 flex-col lg:flex-row pl-[1rem] gap-5">
          <div className="text-[#888282] flex flex-col gap-5">
            <div>
              <a className="text-blue-900" href="">
                LAHIIBA <span className="text-white">MANAGEMENT</span> <span className="text-red-800">IN...</span>
              </a>
            </div>
            <div className="text-[#888282]">LAHIBA INFORMATION MANAGEMENT</div>
            <div className="flex items-center gap-5">
              <div className="bg-[#271288] rounded-full w-[50px] h-[50px] p-5 flex items-center hover:rounded-[10px]">
                <Link href={""}><Image src={"/facebook.png"} width={100} height={60} alt="" /></Link>
              </div>
              <div className="bg-[#271288] rounded-full w-[50px] h-[50px] p-4 hover:rounded-[10px]">
                <Link href={""}><Image src={"/tiktok.png"} width={100} height={100} alt="" /></Link>
              </div>
              <div className="bg-[#271288] rounded-full w-[50px] h-[50px] p-4 hover:rounded-[10px]">
                <Link href={""}><Image src={"/mail.png"} width={100} height={100} alt="" /></Link>
              </div>
            </div>
          </div>
          <div className="text-[#888282] lg:w-1/3 w-[90%] flex flex-col gap-5">
            <div>
              <h1 className="text-2xl">Information</h1>
              <div className="flex flex-row">
                <div className="w-[20%] h-[5px] bg-white"></div>
                <div className="w-[80%] h-[5px] bg-[#271288]"></div>
              </div>
            </div>
            <ul className="flex flex-col gap-1 hover:text-shadow-neutral-800">
              <li className="hover:text-[#271288] hover:pl-[1rem]"><a href="">ABOUT US</a></li>
              <li className="hover:text-[#271288] hover:pl-[1rem]"><a href="">STUDENT REGISTRATION</a></li>
              <li className="hover:text-[#271288] hover:pl-[1rem]"><a href="">ADMISSION AND REGISTRATION</a></li>
              <li className="hover:text-[#271288] hover:pl-[1rem]"><a href="">TEACHER REGISTRATION</a></li>
              <li className="hover:text-[#271288] hover:pl-[1rem]"><a href="">HELP</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage