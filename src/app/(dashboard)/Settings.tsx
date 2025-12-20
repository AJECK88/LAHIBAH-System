
export const Items_Per_Page = 10
type RouteAccesMap = { [key: string]: string[] }

export const routeAccessMap : RouteAccesMap = {
    "admin": ["admin"],
    "student": ["student"],
    "parent": ["parent"],
    "teacher": ["teacher"],
    "list/teachers": ["admin","teacher"],
    "list/students": ["admin","teacher","parent"],
    "list/subjects": ["admin","teacher","student","parent"],
    "list/lessons": ["admin","teacher","student","parent"],
    "list/exams": ["admin","teacher","student","parent"],
    "list/results": ["admin","teacher","student","parent"],
    "list/assignments": ["admin","teacher","student","parent"],
    "list/attendance": ["admin","teacher","student","parent"],
    "list/events": ["admin","teacher","student","parent"],
    "list/announcements": ["admin","teacher","student","parent"],
}
