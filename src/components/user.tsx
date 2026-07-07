
import { auth, currentUser } from "@clerk/nextjs/server";

const User = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string | null | undefined;
  return role;
};
export const role = User;

export const userrole = async () => {
  const user = await currentUser();
  const userRole = user?.publicMetadata.role as string | undefined;
  return userRole;
};

const UserId = async () => {
  const user = await currentUser();
  const id = user?.id as string | null | undefined;
  return id;
};
export default UserId;
