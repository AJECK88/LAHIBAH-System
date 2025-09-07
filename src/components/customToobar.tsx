import { ToolbarProps } from "react-big-calendar";
import moment from "moment";

 function CustomToolbar({ label, onNavigate ,date }: ToolbarProps) {
      /* || next tooble button which will not be more than the current week */
      const startOfCurrentWeek = moment().startOf("week").add(6, "day"); // Monday
      const endOfCurrentWeek = moment().endOf("week").subtract(0, "day"); // Saturday
      const isCurrentWeek =
    moment(date).isSameOrAfter(startOfCurrentWeek, "day") &&
    moment(date).isSameOrBefore(endOfCurrentWeek, "day");
  /* || Back tooble button which will not be lesser than the current week */
   const startOfBacktWeek = moment().startOf("week").add(1, "day"); // Monday
   const endOfNextWeek = moment().endOf("week").add(1, "day"); // Saturday

  const isBackToCurrentWeek =
    moment(date).isSameOrAfter(startOfBacktWeek, "day") &&
    moment(date).isSameOrBefore(endOfNextWeek, "day");
  return (
    <div className="" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
      <button className="focus:bg-gray-200 p-3 rounded-2xl bg-gray-100" onClick={() => onNavigate("PREV")} disabled={!isBackToCurrentWeek}>Back</button>
      <span className="font-bold text-sm">{label}</span>
      <button className="focus:bg-gray-200 p-3 rounded-2xl bg-gray-100" onClick={() => onNavigate("NEXT")} disabled={isCurrentWeek}>Next</button>
    </div>
  );
}
export default CustomToolbar;