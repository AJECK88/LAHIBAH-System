"use client";
import { UserButton } from "@clerk/nextjs";

export default function NavbarClient({ userName, role }: { userName: string, role: string }) {
  return (
    <div className="flex items-center justify-end w-full gap-6">
      <UserButton
        customMenuItems={[
          {
            label: userName,
            href: "#",
            
          },
          {
            label: "Profiles",
            href: "/profile",
            onClick: () => { },
          },
          {
            label: "Settings",
            href: "/settings",
            onClick: () => {},
          },
          {
            label: "Sign out",
            onClick: () => {
              // Custom sign out logic
            },
          },
        ]}
      />
    </div>
  );
}