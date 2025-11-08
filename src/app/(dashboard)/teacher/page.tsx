import EventCalendar from "../../../components/EventCalender";
import Announcement from "../../../components/Announcements";
const StudentPage = () => {
    return (
        /* Student Page */
        /* Right hand side */
        <div className="w-full bg- white flex-1  bg-white p-4 rounded-md m-4 mt-0 ">
            <div className="w-2/3 h-full ">
            
            </div>
            <div className="p-4 bg-white shadow-md w-1/3 h-full">
                <EventCalendar />
                <Announcement />
            </div>
        </div>
    )
}
export default StudentPage;