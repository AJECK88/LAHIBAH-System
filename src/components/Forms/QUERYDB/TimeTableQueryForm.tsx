"use client"
import { UserStar } from "lucide-react";
import Image from "next/image";
import { startTransition, useState, useTransition } from "react";
const TimeTableForm = (
   {levels, departments}:
   {levels:{id:number , LevelName:string}[],
    departments:{id:string , name:string}[]}
) => {   
const [Activestate, setActivate] = useState(false);
const [ispending, startTransaction] = useTransition();
const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
try {
  startTransaction(() => {
    void (async () => {
      // pick values from form
      const levelId = event.currentTarget.levelId.value;
      const departmentId = event.currentTarget.departmentId.value;
      const examType = event.currentTarget.examType.value;
      // find department name by id to send a simple string param
      const departmentName = departments.find((d) => d.id === departmentId)?.name || "";
      // constructing query parameters safely from form inputs
      const queryParams = new URLSearchParams({
        levelId,
        departmentId,
        department: departmentName,
        examType:examType
      }).toString();
      //firing the GET request to the API route with the constructed query parameters
      const response = await fetch(`/api/excelSheets/TimeTableSheets?${queryParams}`, {
        method: "GET",
      });
 if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);
 const blob = await response.blob();
    
    //Double-check that we actually received bytes
    if (blob.size === 0) {
      alert("The server returned an empty file template.");
      return;
    }
    // 3. Create object URL pointing directly to binary data payload
    const downloadUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${departmentName.replace(/\s+/g, "_") || "Sample_Exam"}_Template.xlsx`;

    // 4. Force immediate execution safely attached to document root context
    document.body.appendChild(link);
    
    // Tiny delay ensures execution runs flawlessly on all engines
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    }, 50);

      setActivate(false); // Close modal sheet layout
    })();
  });
}
catch (error){
   throw new Error( error +"Failed to download the Excel template. Please try again.");
}
finally {
  setActivate(false);
}
}
  // Construct the query parameters
    return (
    <>
    <button className="flex items-center gap-2 hover:bg-gray-50 p-1" onClick={() => setActivate(!Activestate)}>
    <span>Download timetable format template</span>
   <Image src="/arrow_down.svg" alt="Excel Template" width={25} height={25} />
   </button>

    {Activestate && ( 
 
  <div className="flex flex-col absolute bg-white pt-0 pl-4  pb-4 border-2 border-gray-200 rounded-md shadow-md z-10 w-100% md:w-100 lg:w-100 xl:w-100 2xl:w-100">
   
   {/* exist form button */}
   <div className="flex gap-2 items-center justify-end p-2">
    <button className="rounded-md hover:bg-gray-100 p-2" onClick={() => setActivate(!Activestate)}>
     <Image  src="/close.png" alt="Excel Template" width={10} height={10} /></button>
     </div>
 {/* form inputs */}
   <form onSubmit={handleForm} className="flex flex-col gap-4 pr-4">

  <select name="levelId" required className="border border-amber-100 p-2">
    <option value="">Select Level</option>
    {levels.map((level) => (
      <option key={level.id} value={level.id}>
        {level.LevelName}
      </option>
    ))}
  </select>

  <select name="departmentId" required className="border border-amber-100 p-2">
    <option value="">Select Department</option>
    {departments.map((department) => (
      <option key={department.id} value={department.id}> 
        {department.name}
      </option>
    ))}
  </select>

  <select name="examType" required className="border border-amber-100 p-2">
    <option value="">Select Exam</option>
    
      <option key={1} value={"First semester"}>First semester Exam</option>
      <option key={2} value={"Second semester"}>Second semester Exam</option>
    
  </select>

  <button type="submit" className="col-span-2 bg-blue-400 text-white p-2 rounded-md hover:bg-blue-300">{ ispending ?"Downloading...":"Download"}</button>

</form>
</div> )}
</>
    )
}
 export default  TimeTableForm;