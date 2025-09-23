"use client"
import { Items_Per_Page } from "@/app/(dashboard)/Settings";
import { useRouter } from "next/navigation";

 

const Pagination  = ({page , count}:{page:number ; count:number}) =>{
 /* || cheaking if the next is more than it limite and some with the Prov button to disaplay the button */
 const length =Math.ceil(count/Items_Per_Page)
 const hasProv =page===1;
  const hasNext =page>=length;
  /*end*/
const Route = useRouter();
const changePage = (NewPage:number)=>{
const Params = new URLSearchParams(window.location.search);
 Params.set("page", NewPage.toString());
 Route.push(`${window.location.pathname}?${Params}`)

} 
  console.log(length)
    return(
        <div className=" pt-4 md:p-1 lg:p-4 flex items-center justify-between text-gray-500 ">
            <button disabled={hasProv} className="py-2 p-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"onClick={()=>{
                changePage(page -1)
                }} >Previous</button>
            <div className="flex items-center gap-2 ">
                {Array.from({length:Math.ceil(count/Items_Per_Page)}
                ,(_, index)=>{
                   const PageIndex = index + 1;
                   return(
                   <button 
                   key={PageIndex}
                    className={`px-2 py-1 rounded-sm  text-xs font-semibold ${page===PageIndex?"bg-blue-300":""}` }
                   onClick={()=>{
                    changePage(PageIndex)
                }
            } 
                   
                   >
                    {PageIndex}
                    </button>
                   )
                })}
                
            </div>
            <button disabled={hasNext}  className="py-2 p-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"  onClick={()=>{
                changePage(page + 1)
                }} 
                >Next</button>
        </div>
    )


}
export default Pagination;