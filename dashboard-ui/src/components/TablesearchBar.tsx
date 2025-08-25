import Image from "next/image";
const TableSearchBar = () =>{
    return (
        <div className= "flex md:flex items-center justify-start  gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2" >
             <Image src = "/search.png" alt=" " width={14} height = {14} />
             <input type="text" placeholder="Search... "className="w-[200px] p-2 bg-transperent outline-none"/>
          </div>
    )
}
export default TableSearchBar;