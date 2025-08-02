import { link } from "fs"
import Link from "next/link"
const Homepage = () => {
  return (
    <>
    <div className=''>Homeage</div>
    <Link href="/admin" > admin </Link>
    </>
  )
  
}

export default Homepage