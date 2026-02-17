 "use client"
import { UploadExam } from "@/app/api/seeds/exams/upload/route";
import { Oval } from "react-loader-spinner";
import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import { UploadResult } from "@/app/api/seeds/Result/upload/route";
import { Loading } from "@clerk/elements/common";


const SeedfileInput =({type}:{type:"Exam"|"Result"}) => {

  const [showImage, setShowImage] = useState(true);  /**
   * 📦 Preview image state
   */
  const [preview, setPreview] = useState(false);

  /**
   *  Handle file input change for previewing uploaded image
   */
  let size ;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      setPreview(true);
    }
  };
  const [Notisfication , setNotisfication] = useState(false)
useEffect(() => {
  const timer = setTimeout(() => {
    setShowImage(false);
  }, 4000); // Show the image after 3 seconds

  return () => clearTimeout(timer); // Cleanup the timer on component unmount
}, []);
  const [state, formAction] = useActionState( type ==="Exam"?UploadExam: UploadResult,{
  success: false,
  error:undefined
}); 
  const Loading = () => {
    setShowImage(true) 
       setTimeout(() => { 
      setShowImage(false);
    }, 5000); // Show the image after 3 seconds
     setNotisfication(true)   
  }
  const submitEvent = (formData:FormData) => {

    formAction(formData)
  

  } 
  
    return (
        <div>


<form action={submitEvent} className="flex gap-4 items-center mt-4">
   <label htmlFor="file" className="text-sm font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 cursor-pointer p-2 rounded-md">
    {preview ?<div className="flex"><Image src="/upload_file.png" width={20} height={20} alt="Preview" /></div> : "Select File"}
   </label>
  <input type="file" name="file" id="file" className="hidden"  onChange={handleFileChange}/>
  <button type="submit"  className="text-sm text-white font-bold  bg-blue-400 p-2 rounded-md hover:bg-blue-300 cursor-pointer" onClick={Loading}>Upload</button>
</form>

{ Notisfication &&
  <div className=" mt-8 flex absolute h-50 w-70  bg-gray-100  items-center justify-center rounded-md p-2 flex-col gap-2">
    <button className="text-red-500 absolute top-2 right-2" onClick={() => setNotisfication(false)}><Image src="/close.png" width={10} height={10} alt="exit"color="red" /></button>
    <span className="text-lg font-semibold text-gray-800">Processing {type} file...</span>
    {showImage ?
    (
      <Oval height={50} width={50} color="#00BFFF" secondaryColor="white" strokeWidthSecondary={10}  animationDuration={1}/>
    ) : 


  <div className="mt-2">
  {state?.success && (
      <p className="text-green-600 text-sm">
        File uploaded successfully!
      </p>
    )}

    {state?.error && (
      <p className="text-red-600 text-sm w-35 text-center">
        Error uploading file: {state.error}
      </p>
    )}            
</div>
  
  }

</div>
}
 </div>

    )
}
export default SeedfileInput;