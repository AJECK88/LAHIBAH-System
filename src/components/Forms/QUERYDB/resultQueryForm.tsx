"use client"
import Image from "next/image";
import { useState } from "react";

const ResultForm = (
  { levels, departments }:
  {
    levels: { id: number, LevelName: string }[],
    departments: { id: string, name: string }[]
  }
) => {   
  const [Activestate, setActivate] = useState(false);
  const [loading, setLoading] = useState(false); // Clean state indicator for operations

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const form = event.currentTarget;
      const levelId = form.levelId.value;
      const departmentId = form.departmentId.value;

      // 1. Get the chosen department's text name for the filename template
      const selectedDeptText = form.departmentId.options[form.departmentId.selectedIndex].text;
      const cleanFilename = `${selectedDeptText.replace(/\s+/g, "_")}_Results_Template.xlsx`;

      // Constructing query parameters safely from form inputs
      const queryParams = new URLSearchParams({
        levelId,
        departmentId,
      }).toString();

      // Firing the GET request to the API route
      const response = await fetch(`/api/excelSheets/Resultsheet?${queryParams}`, {
        method: "GET",
      });

      if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);
      
      const blob = await response.blob();
      
      // Double-check that we actually received bytes
      if (blob.size === 0) {
        alert("The server returned an empty file template.");
        return;
      }

      // Create object URL pointing directly to binary data payload
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      
      // Using the resolved department title string fallback safely
      link.download = cleanFilename;

      // 3. Force immediate execution safely attached to document root context
      document.body.appendChild(link);
      
      // Tiny delay ensures execution runs flawlessly on all engines
      setTimeout(() => {
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      }, 50);

      setActivate(false); // Close modal overlay sheets layout
    }
    catch (error: any) {
       console.error("Client side generation breakdown:", error);
       alert("Failed to download the Excel template. Please try again.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex relative">
      <button 
        className="flex items-center gap-2 hover:bg-gray-50 p-1 relative text-sm font-medium" 
        onClick={() => setActivate(!Activestate)}
      >
        <span>Download Result Format Template</span>
        <Image src="/arrow_down.svg" alt="Excel Template" width={25} height={25} />
      </button>

      {Activestate && ( 
        <div className="flex flex-col absolute top-full left-0 bg-white pt-0 pl-4 pb-4 border-2 border-gray-200 rounded-md shadow-md z-10 w-64 md:w-80">
          
          {/* exit form button */}
          <div className="flex gap-2 items-center justify-end p-2">
            <button className="rounded-md hover:bg-gray-100 p-2" onClick={() => setActivate(false)}>
              <Image src="/close.png" alt="Close Modal" width={10} height={10} />
            </button>
          </div>

          {/* form inputs */}
          <form onSubmit={handleForm} className="flex flex-col gap-4 pr-4">
            <select name="levelId" required className="border border-amber-200 p-2 rounded text-sm bg-transparent outline-none">
              <option value="">Select Level</option>
              {levels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.LevelName}
                </option>
              ))}
            </select>

            <select name="departmentId" required className="border border-amber-200 p-2 rounded text-sm bg-transparent outline-none">
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>

            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300 transition-colors text-sm font-semibold"
            >
              {loading ? "Generating..." : "Download"}
            </button>
          </form>
        </div> 
      )}
    </div>
  );
};

export default ResultForm;