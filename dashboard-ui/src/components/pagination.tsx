const Pagination  = () =>{
    return(
        <div className=" pt-4 md:p-1 lg:p-4 flex items-center justify-between text-gray-500 ">
            <button disabled className="py-2 p-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
            <div className="flex items-center gap-2 ">
                <button className="px-1 rounded-sm bg-blue-100 text-xs font-semibold " >1</button>
                <button className="px-2 rounded-sm  text-xs font-semibold">2</button>
                <button className="px-2 rounded-sm  text-xs font-semibold hidden md:table-cell">3</button>
                ...
                <button className="px-2 rounded-sm  text-xs font-semibold">10</button>
            </div>
            <button  className="py-2 p-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
    )

}
export default Pagination;