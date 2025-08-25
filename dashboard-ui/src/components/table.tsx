const Table = ({
    columns,
    renderRow,
    data}: {
    columns: {header: string, accessorKey: string , className?: string}[],
    renderRow: (item: any) => React.ReactNode,
    data: any[]
}) => {
     return (
         <table className="w-full mt-4">
            <thead className="">
                 {
                    <tr className="text-left text-gray-500 text-sm ">{
                        columns.map(columns =>(
                            <th key={columns.accessorKey} className={columns.className}> {columns.header}
                            </th>
                        ))
                    }</tr>
                }
            </thead>
            <tbody className="">
                {
                    data.map(item => renderRow(item))
                }
            </tbody>
         </table>
     )
}
export default Table;