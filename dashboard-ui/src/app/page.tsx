import { link } from "fs"
import Link from "next/link"
import Image from "next/image"
import { url } from "inspector"
const Homepage = () => {
  return (
    <>
    <header className=" w-full bg-white border-2 border-amber-200  p-2" >
    <nav className="flex justify-between items-center w-[98%] mx-auto flex-col lg:flex-row
  ow">
     <div className="border-2 border-black p-3"><a className="text-blue-900" href="">LAHIIBA <span className="text-black">MANAGEMENT</span> <span className="text-red-800">IN...</span></a></div> 
      <ul className="flex gap-4 items-center text-stone-600 hover:text-shadow-neutral-800 flex-col lg:flex-row ms:right-[1000px]">
        <li className=" hover:text-amber-300">
          <Link href="">Admission/registration</Link>
        </li>
        <li className=" hover:text-amber-300">
          <Link href="">About Us</Link>
        </li>
        <li className=" hover:text-amber-300">
          <Link href="">Help</Link>
        </li>
        <li className=" hover:text-amber-300">
          <Link href="/admin">Login</Link>
        </li>
      </ul>
    </nav>
    </header>
    <section className="">
      <div style={{ 
    backgroundImage: 'url("/image/sky%20scraper.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor:"black",
    height: "50vh",
    width: "100%",
 
    
  }}
   className="w-100% mx-auto flex flex-col items-center justify-center h-[80vh] imageBackground text-white text-sm lg:text-2xl" >
    <h3>Admission And Registration</h3>
     <h3 className="underline underline-offset-1"><a href="">Admission And Registration</a>/Admission And Registration </h3>
   </div>
    </section>

    <section className="p-5 w-90% mx-auto">
      <h1 className="text-[40px] text-[625757]" >Students Admission and Registration Information</h1>
    <ol style={{listStyleType :"lower-roman",paddingLeft:"1rem", color: "black"}} className="flex flex-col gap-4 perentOL">
      <li className="">
        <h2 className="text-[30px]">REQUIREMENTS FOR ADMISSION INTO THE FIRST YEAR OF THE HND/BTS/SRN PROGRAM</h2>
        <ol style={{listStyleType:"upper-alpha",listStylePosition:"inside"}} className="">
          <h3>1.Applicants should fill and submit the online admission application form at the following page :
         <a href="">click here</a>
     </h3>
     <h3>2. The following documents should be attached to the completed application form;</h3>
        <li className=""> Certified copy ofGCE Advanced level,passed in at least two subjects in one sitting excluding Religious Studies,or BACC(All series),</li>
        <li className=""> Certified copy of birth certificate,</li>
        <li className="">Photo copy of GCE O/L, or CAP,</li>
        <li className="">Photo copy of National Identity Card or international passport for foreigners,</li>
        <li className="">Photo copy of receipt of payment of registration fee, and,</li>
        <li className=""> 4* 4 passport size photograph affixed to the application form.</li>
        <p className="font-sm">The above documents in a self-addressed file should be submitted to the Admissions Office (Room one of the Central administrative Block). The applicant shall be granted provisional admission upon submission pending study of file and granting of final admission by the Admission Commission, wherein admission letters shall be issued to the students admitted. Contact eample@mail.com or visit our website:
           laureateuniversityinstitute.com.com should you require more information</p>
        </ol></li>
      <li className="">
          <h2 className="text-[30px]">REQUIREMENTS FOR ADMISSION INTO THE ONE YEAR TOP-UP DEGREE PROGRAMME</h2>
        <h4>1. Applicants should fill and submit the online admission application form at the following page
          click here
          </h4>
          <h4>2. The following documents should be attached to the completed application form;</h4>
        <ol style={{listStyleType:"decimal",listStylePosition:"inside"}} className="">
        <li className="">Certified copy of HND, HPD, BTS, DSEP Success Slip or recognized equivalent diploma,</li>
        <li className=""> Certified copy of birth certificate,</li>
        <li className=""> Photo copy of GCE A/L, or BACC, </li>
        <li className="">Photo copy of National Identity Card or international passport for foreigners,</li>
        <li className=""> Photo copy of receipt of payment of registration fee, and,</li>
        <li className="">4* 4 passport size photograph affixed to the application form.</li>
        <p>The above documents in a self-addressed file should be submitted to the Admissions Office (Room one of the Central administrative Block). The applicant shall be granted provisional admission upon submission pending study of file and granting of final admission by the Admission Commission, wherein admission letters shall be issued to the students admitted. Contact info@laureateinstitute.com or visit our 
        website: laureateuniversityinstitute.com should you require more information</p>
        </ol></li>
      <li className="">
        <h2 className="text-[30px]">REQUIREMENTS ADMISSION INTO THE MASTER’S DEGREE PROGRAMME </h2>
        <ol  className="" style={{listStyleType :"lower-alpha", listStylePosition:"inside", margin:0,paddingLeft:2,  color: "black"}}>
        <h4 className=""> 1. Applicants should fill and submit the online admission application form at the following page  click here</h4>
        <li className="">  Certified copy of Bachelor’s Degree or Attestation of Results/Completion of Course (certified by the competent academic authorities)</li>
        <li className="">  Certified copies of undergraduate academic transcripts (certified by the competent academic authorities),</li>
        <li className="">Certified copy of birth certificate,</li>
        <li className="">   Letter of Motivation (max. 1 page)</li>
        <li className="">National Identity Card or Passport for foreigners,</li>
        <li className="">Two recommendation letters signed by referees/recommenders,</li>
        <li className="">Affix a 4*4 passport size  photograph on the application form</li>
        <p>The above documents in a self-addressed file should be submitted to the Admissions Office (Room one of the Central administrative Block). The applicant shall be granted provisional admission upon submission pending study of file and granting of final admission by the Admission Commission, wherein admission letters shall be issued to the students admitted. Contact info@laureateinstitute.com  or visit our website: laureateuniversityinstitute.com
          should you require more information</p>
        </ol></li>
    </ol>
    </section>
     <footer className=" bg-[#262323] w-fulL">
      <div className="w-[80%] flex justify-around pt-5 pb-5 flex-col lg:flex-row pl-[1rem] gap-5 ">
      <div className="text-[#888282] flex flex-col gap-5">
     <div className=""><a className="text-blue-900" href="">LAHIIBA <span className="text-white">MANAGEMENT</span> <span className="text-red-800">IN...</span></a></div> 
     <div className="text-[#888282]">LAHIBA  INFORMATION MANAGEMENT</div>
     <div className=" flex items-center gap-5">
     <div className="bg-[#271288] bg-[#271288] rounded-full w-[50px] h-[50px] p-5 flex items-center hover:rounded-[10px] "><Link href={""}><Image src={"/facebook.png"} width={100} height={60} alt="" /></Link></div>
     <div className="bg-[#271288] bg-[#271288] rounded-full w-[50px] h-[50px] p-4 hover:rounded-[10px] "><Link href={""}><Image src={"/tiktok.png"} width={100} height={100} alt="" /></Link></div>
     <div className="bg-[#271288] bg-[#271288] rounded-full w-[50px] h-[50px] p-4 hover:rounded-[10px] "><Link href={""}><Image src={"/mail.png"} width={100} height={100} alt="" /></Link></div>
     </div>
     </div>
      <div className="text-[#888282] lg:w-1/3  w-[90%] flex flex-col gap-5 "> 
      <div className="">
        <h1 className="text-2xl">Information</h1>
        <div className=" flex flex-reow" >
        <div className="w-[20%] h-[5px] bg-white"></div>
        <div className="w-[80%] h-[5px] bg-[#271288]"></div>
        </div>
        </div>
        <ul className="flex flex-col gap-1 hover:text-shadow-neutral-800" >
          <li className="hover:text-amber-300 hover:pl-[1rem]"><a href="">ABOUT US</a></li>
          <li className="hover:text-amber-300 hover:pl-[1rem]"><a href="">STUDENT REGISTRATION</a></li>
          <li className="hover:text-amber-300 hover:pl-[1rem]"><a href="">ADMISION AND REGISTRATION</a></li>
          <li className="hover:text-amber-300 hover:pl-[1rem]"><a href="">TEACHER REGISTRATION</a></li>
          <li className="hover:text-amber-300 hover:pl-[1rem]"><a href="">HELP</a></li>
        </ul>
      </div>
      </div>
     </footer>
    </>
  )
  
}

export default Homepage