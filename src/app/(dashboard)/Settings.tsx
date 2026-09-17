
export const Items_Per_Page = 15
type RouteAccesMap = { [key: string]: string[] }
export function getCurrentAcademicYearString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0 = January, 7 = August

  // Before August (Jan–Jul), the academic year started in the previous calendar year
  const startYear = month < 7 ? year - 1 : year;
  
  return `${startYear}/${startYear + 1}`;
}
export const routeAccessMap : RouteAccesMap = {
    "admin": ["admin"],
    "student": ["student"],
    "parent": ["parent"],
    "teacher": ["teacher"],
    "list/teachers": ["admin","teacher"],
    "list/students": ["admin","teacher","parent"],
    "list/courses": ["admin","teacher","student","parent"],
    "list/lessons": ["admin","teacher","student","parent"],
    "list/exams": ["admin","teacher","student","parent"],
    "list/results": ["admin","teacher","student","parent"],
    "/list/timeTables": ["admin"],
    "list/assignments": ["admin","teacher","student","parent"],
    "list/attendance": ["admin","teacher","student","parent"],
    "list/events": ["admin","teacher","student","parent"],
    "list/announcements": ["admin","teacher","student","parent"],
    "messages": ["admin","teacher","student","parent"],
    "list/Departments": ["admin","teacher","student","parent"],
}
