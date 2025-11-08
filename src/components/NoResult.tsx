
import Image from "next/image"
export const NoResultFound = (props:{Result:string}) =>{
    return(
    <div>
                <p className="text-gray-800 font-semibold">{props.Result}</p>   
                <Image src={"/EmtyResult.png"} alt=''width={300} height={300} />
    </div>
    )
}