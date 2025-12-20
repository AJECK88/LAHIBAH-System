import Usercarsd from "../../../components/Usercards";
import EventCalendar from "../../../components/EventCalender";

const ParantPage = () => {
     return (
        <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* Usercards*/}
      {/*  <Usercarsd type="Parents"/>
        <Usercarsd type="Students"/>
        <Usercarsd type="Teachers"/>
        <Usercarsd type="staft"/ */}
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col rounded-2xl gap-8"> 
      <EventCalendar /> 
       </div>
     
    </div>
     )
    }
    export default ParantPage;