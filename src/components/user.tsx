
import { currentUser } from "@clerk/nextjs/server";
  const User = async() => {
    const user = await currentUser();
    const  role = user?.publicMetadata.role as string | null | undefined;
  return role;
};
 export  const role = User