
import { auth, currentUser } from "@clerk/nextjs/server";
  const User = async() => {
    const user = await currentUser();
    const  role = user?.publicMetadata.role as string | null | undefined;
  return role;
};
 export  const role = User
  export const userrole = async () => {
  const { sessionClaims } = await auth(); 
  const userRole = (sessionClaims?.metadata as { role?: string })?.role;
  return userRole || "guest";
};