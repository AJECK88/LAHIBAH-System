  "use client"

import { FieldError } from "react-hook-form"
import { Label } from "recharts"
import { boolean, string } from "zod"

 const Input = ({type , register , errors ,name , label,  id  , hidden,inputProps ,Placeholder}:
    {type?:string
    register:any,
    errors?:FieldError,
    label:string,
    id:string,
    name:string,
    Placeholder:string,
    hidden?:boolean
    inputProps?:React.ImgHTMLAttributes<HTMLInputElement>,
    }
 )=>{


    return(
      <label className={`${hidden ? 'hidden':""}`}  htmlFor={id}>{label}<br />
             <input   className="h-[40px] border-2 border-amber-100 w-full p-2"{...register(name)} type={type} id={id} placeholder={Placeholder}
             {...inputProps}
  />

              {errors?.message && <span className="text-sm text-red-600 font-light">{errors?.message.toString()}</span>}
            </label>
    )
}
export default Input;