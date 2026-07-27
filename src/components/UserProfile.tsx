"use client"
import { UserProfile } from "@clerk/nextjs";

const AcademicIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
  </svg>
);

export default function ProfilePage() {
  return (
    <div className="w-full py-2 border">
      <UserProfile 
        path="/profile" 
        routing="path" 
        appearance={{
          elements: {
    
            rootBox: "w-full max-w-full shadow-none border-0",
            cardBox: "w-full max-w-full shadow-none border-0 bg-transparent dark:bg-transparent",
            

            pageScrollBox: "w-full max-w-full",
            contentPage: "w-full max-w-full flex",
            navbarMobileMenuRow: "w-full max-w-full",
            

            navbar: "border-r dark:border-gray-800 bg-white dark:bg-gray-900 shadow-none",
            scrollBox: "bg-white dark:bg-gray-900 shadow-none border-0",
          },
        }}
      >
        <UserProfile.Page
          label="School Data"
          labelIcon={<AcademicIcon />}
          url="school-meta" 
          
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl w-full border dark:border-gray-800">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Academic Details</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Manage school-specific records attached to this identity profile.
            </p>
          </div>
        </UserProfile.Page>
      </UserProfile>
    </div>
  );
}