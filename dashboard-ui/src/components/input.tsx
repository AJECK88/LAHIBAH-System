  "use client"

import { FieldError } from "react-hook-form"
import { Label } from "recharts"
import { string } from "zod"

 const Input = ({type , register , errors ,name ,Defaultvalue, label,  id ,inputProps ,Placeholder}:
    {type?:string
    register:any,
    errors?:FieldError,
    Defaultvalue? :string,
    label:string,
    id:string,
    name:string,
    Placeholder:string,
    inputProps?:React.ImgHTMLAttributes<HTMLInputElement>,
    }
 )=>{


    return(
      <label className=""  htmlFor={id}>{label}<br />
             <input className="h-[40px] border-2 border-amber-100 w-full p-2"{...register(name)} type={type} id={id} placeholder={Placeholder} defaultValue={Defaultvalue}/>

              {errors?.message && <span className="text-sm text-red-600 font-light">{errors?.message.toString()}</span>}
            </label>
    )
}
export default Input;