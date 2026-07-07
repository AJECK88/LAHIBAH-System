 "use client"
import { UploadExam } from "@/app/api/seeds/exams/upload/route";
import { Oval } from "react-loader-spinner";
import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import { UploadResult } from "@/app/api/seeds/Result/upload/route";
import { Loading } from "@clerk/elements/common";


const SeedfileInput =({type}:{type:"Exam"|"Result"}) => {

  const [showImage, setShowImage] = useState(true);  /**
   * 📦 Preview image state */
  const [preview, setPreview] = useState(false);

  /**
   *  Handle file input change for previewing uploaded image
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      setPreview(true);
    }
  };
  const [Notisfication , setNotisfication] = useState(false)

  const [state, formAction , isLoading] = useActionState( type ==="Exam"?UploadExam: UploadResult,{
  success: false,
  error:undefined
}); 
  useEffect( ()=> {
     if (isLoading){
      setNotisfication(true)
      setShowImage(true)
     }
     else {
      setShowImage(false)
      setPreview(false)
     }
  },[isLoading])
  const Loading = () => {
    setShowImage(true)  
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
  <div className="absolute inset-0 bg-black/60 z-50 flex justify-center p-2 items-center overflow-scroll">
  <div className=" mt-8 flex absolute h-50 w-70 items-center justify-center rounded-md p-2 flex-col gap-2 bg-white">
    <button className="text-red-500 absolute top-2 right-2" onClick={() => setNotisfication(false)}><Image src="/close.png" width={10} height={10} alt="exit"color="red" /></button>
    <span className="text-lg font-semibold text-gray-800">Processing {type} file...</span>
    {showImage ?
    (
      <Oval height={50} width={50} color="#00BFFF" secondaryColor="white" strokeWidthSecondary={10}  animationDuration={1}/>
    ) : 


  <div className="mt-2">
  {state?.success && (
    <div className="flex flex-col items-center gap-2">
      <p className="text-green-600 text-sm w-35 text-center">
        File uploaded successfully!
      </p>
        <Image src="/success.jpeg" width={30} height={30} alt="success" />
        </div>
    )}

    {state?.error && (
     <div className="flex flex-col items-center gap-2">  
      <p className="text-red-600 text-sm w-35 text-center">
         Error uploading file: {state.error}
      </p>
        <Image src="/error.jpg" width={30} height={30} alt="error" />
        </div>
    )}            
</div>

  }

</div>
</div>
}
 </div>

    )
}
export default SeedfileInput;