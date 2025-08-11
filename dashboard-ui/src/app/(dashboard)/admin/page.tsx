import Usercarsd from "../../../components/Usercards";
import CountChart from "../../../components/countChart";
import EventCalendar from "../../../components/EventCalender";
import AttendanceChart from "../../../components/AttendanceChart";
import FinanceChart from "../../../components/financeChart";
import Announcement from "../../../components/Announcements";

const AdminPage = () => {
 return (
    <div className="p-4 flex gap-4 lg:flex-row  flex-col">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col  gap-4 ">
      {/* Usercards*/}
      <div className="flex gap-4 justify-between flex-wrap lg:row">
       <Usercarsd type="Parent"/>
        <Usercarsd type="Student"/>
        <Usercarsd type="Teacher"/>
        <Usercarsd type="staft"/>
        </div> 
      {/* Middle chart */}
      <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex lg:w-1/3 h-[400px] ">
      <CountChart />
      </div>
       <div className="flex lg:w-2/3 h-[400px]">
        <AttendanceChart />
      </div> 
      </div>
     { /* Button chart */}
      <div className="flex ">
        <FinanceChart />
      </div>
      </div>
      {/* right */}
       <div className="w-full lg:w-1/3 flex flex-col rounded-2xl gap-2"> 
      <EventCalendar /> 
       <Announcement/>
      </div>
      </div>
 )
}

 export default AdminPage;