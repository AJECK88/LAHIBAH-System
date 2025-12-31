
import { currentUser } from "@clerk/nextjs/server";
import NavbarClient from "./NavbarClients";
export default async function  Navber()  {
   const user = await currentUser();
   const role =  user?.publicMetadata.role as string ;
   const UserName =user?.fullName as string ;


  return(
  <NavbarClient
      fullName={user?.fullName ?? ""}
      role={user?.publicMetadata?.role as string}
    />
  );
}
