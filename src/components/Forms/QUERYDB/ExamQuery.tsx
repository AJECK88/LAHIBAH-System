const ExamForm = () => {   

    return (
   <form action={""} className=" grid grid-cols-2 gap-4">

  <select name="academicYear" required className="border border-amber-100 p-2">
    <option value="">Select Academic Year</option>
    <option value="2025/2026">2025/2026</option>
  </select>

  <select name="levelId" required className="border border-amber-100 p-2">
    <option value="">Select Level</option>
    <option value="1">100</option>
  </select>

  <select name="departmentId" required className="border border-amber-100 p-2">
    <option value="">Select Department</option>
    <option value="3">Computer Science</option>
  </select>

  <select name="examName" required className="border border-amber-100 p-2">
    <option value="">Select Exam</option>
    <option value="First Semester">First Semester</option>
  </select>

  <button type="submit" className="col-span-2 bg-blue-400 text-white p-2 rounded-md hover:bg-blue-300">Search Exam</button>

</form>

    )
}
 export default ExamForm;