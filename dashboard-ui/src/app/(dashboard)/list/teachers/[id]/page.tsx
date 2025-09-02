                import Announcement from "@/components/Announcements";
                import BigCalendar from "@/components/TeacherBigCalelndar";
                import PerformanceChart from "@/components/TeeachersPerformance";
                import FormModel from "@/components/FormModel";
                import Link from "next/dist/client/link";
                import Image from "next/image"
                const SingleTeacherPage = () => {
                return (

                <div className="lg:flex  gap-4 m-2 lg:flex-row md:flex-col sm:flex-col" >
                {/* Teacher details go here */}
                {/* || left side */}
                <div className="xl:w-2/3 w-full">
                {/* TOP CONTENT */}
                <div className="flex flex-col lg:flex-row gap-4" >
                {/* || users  infor card */}
                <div className="bg-blue-200 py-6 px-4 rounded-md flex-1 flex gap-4 " >
                <div className="w-1/3" >
                <Image
                src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="User Avatar"
                width={144} 
                height={144} 
                className=" w-36 h-36  object-cover rounded-full " />
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4 ">
                <h1 className="text-xl  font-semibold">Loen Deam Ge</h1>
                <FormModel table="Teacher" type="Update" data={{
                id: 1,
                UserName: "jone",
                FirstName: "jone",
                LastName: "Moe",
                email: "jone@example.com",
                phoneNumber: "682031531",
                Address: "123 Main St",
                password: "pas849",
                BloodType: "B+",
               dateOfBirth: new Date("1990-01-01"),
                sex: "female",
                img: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }}/>
                <p className="text-sm text-gray-500">lorem ipsum , olor sit amet consevtetur adipisicing elit.</p>
                <div className=" flex items-center justify-between gap-2 flex-wrap text-xs font-medium   " >
                <div className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                <Image
                src="/blood.png"
                alt="User Avatar"
                width={8}
                height={8}
                className=" w-8 h-8 "
                />
                <span className="ml-1">B+</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                <Image
                src="/date.png"
                alt="User Avatar"
                width={1}
                height={1}
                className=" w-8 h-8 "
                />
                <span className="ml-1">january 2025</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                <Image
                src="/mail2.png"
                alt=""
                width={14}
                height={14}
                className=" w-8 h-8 "
                />
                <span className="ml-1">user@example.com</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                <Image
                src="/phone.png"
                alt="User Avatar"
                width={10}
                height={14}
                className=" w-8 h-8"
                />
                <span className="ml-1">68 2031531</span>
                </div>
                </div>
                </div>
                </div>
                {/* || small card*/}
                <div className=" flex-1 flex gap-4 justify-center flex-wrap " >  {/* || card */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                <Image src={"/singleAttendance.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 "
                /> <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-xs text-gray-500">Attendance</span>
                </div>
                </div>
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                <Image src={"/singleBranch.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 " 
                /> <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-xs text-gray-500">Branches</span>
                </div>
                </div>
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                <Image src={"/singleLesson.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 "
                /> <div className="">
                <h1 className="text-xl font-semibold">9</h1>
                <span className="text-xs text-gray-500">Lessons</span>
                </div>
                </div> 
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                <Image src={"/singleClass.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 "
                /> <div className="">
                <h1 className="text-xl font-semibold">9</h1>
                <span className="text-xs text-gray-500">Classes</span>
                </div>
                </div>

                </div>
                </div>
                {/* BOTTOM CONTENT */}
                <div className="bg-white p-4 mt-4 rounded-md h-[630px]">
                <h1>Teacher&apos;s Schedule</h1>
                <BigCalendar />
                </div> 
                </div>
                {/* || right side */}
                <div className="xl:w-1/3 w-full flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md ">
                <h1 className="text-lg font-semibold">Shortcuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-sm text-gray-500">
                <Link href="/dashboard/teachers">
                <div className="bg-gray-100 p-2 rounded-md">Teacher's classes</div>
                </Link>
                <Link href="/dashboard/classes">
                <div className="bg-gray-100 p-2 rounded-md">Teacher's student's</div>
                </Link>
                <Link href="/dashboard/subjects">
                <div className="bg-gray-100 p-2 rounded-md">Teacher's exams</div>
                </Link>
                <Link href="/dashboard/subjects">
                <div className="bg-gray-100 p-2 rounded-md">Teacher's Assignments</div>
                </Link>

                </div>

                </div >
                <PerformanceChart />
                <Announcement />

                </div>

                </div>
                );
                };

                export default SingleTeacherPage;