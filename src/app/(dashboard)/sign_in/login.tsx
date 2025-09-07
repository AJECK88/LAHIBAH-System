import Image from "next/image"
const Sign_In  = ()=>{
 return (
    <>
     <div className="">
        {/* || left */}
        <div className="">
         <div><Image alt=" " src={"/Lahiba.png"} width={100} height={100} /><h1>LAHIBA</h1></div>
          <div className="">
            <Image alt="" src={} width={100} height={100} /> 
             <form action="">
                 <div className="">
                    <input type="text" name="name" />
                     <label htmlFor="name">Full Name</label>
                 </div>
                 <div className="">
                    <input type="password"name="password" />
                    <label htmlFor="password">Password</label>
                 </div>
                 <button type="submit">Login</button>
             </form>
             <h3>Login as:</h3>
             <div className="">
                <button className="">Student</button>
                <button className="">Teacher</button>
             </div>
          </div>

        </div>
        {/* || Rjight  */}
     </div>

    </>
 )
}
export default Sign_In;