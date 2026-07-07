import dynamic from "next/dynamic";
import Image from "next/image";


function  Loading(){
 return ( <div className=" absolute flex m-auto h-full w-full border justify-center items-center"> <Image alt="loard.." width={100}  height={100} src={"/image/loader.svg"}/></div>
 )
}

export default Loading
