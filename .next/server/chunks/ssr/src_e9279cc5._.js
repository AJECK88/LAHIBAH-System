module.exports = [
"[project]/src/components/EventCalender.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-calendar/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/* || Temporary */ const Events = [
    {
        id: 1,
        time: "08 : 00 AM - 01:60 PM",
        Tile: "cultural day",
        discription: "A cultural day for all student"
    },
    {
        id: 2,
        Tile: "Matriculation",
        time: "09 : 00 AM - 03:00 PM",
        discription: "Maticulation the for all level 100 and graduation"
    },
    {
        id: 4,
        time: "12 : 00 AM - 02:60 PM",
        Tile: "Student Party",
        discription: "student meating for mortivation and growth"
    }
];
const EventCalendar = ()=>{
    const [value, onchange] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(new Date());
    const currentDate = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                onChange: onchange,
                value: value,
                minDate: new Date(currentDate - 2, 0, 1),
                maxDate: new Date(currentDate + 2, 11, 31)
            }, void 0, false, {
                fileName: "[project]/src/components/EventCalender.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold my-2",
                                children: "Event"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EventCalender.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/moreDark.png",
                                alt: "",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/EventCalender.tsx",
                                lineNumber: 43,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EventCalender.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    Events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-amber-400 even:border-t-purple-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-semibold text-gray-600",
                                            children: event.Tile
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EventCalender.tsx",
                                            lineNumber: 48,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300 text-xm",
                                            children: event.time
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EventCalender.tsx",
                                            lineNumber: 49,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EventCalender.tsx",
                                    lineNumber: 47,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "m-p-2 text-gray-400 text-sm",
                                    children: event.discription
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EventCalender.tsx",
                                    lineNumber: 51,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, event.id, true, {
                            fileName: "[project]/src/components/EventCalender.tsx",
                            lineNumber: 46,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EventCalender.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EventCalender.tsx",
        lineNumber: 33,
        columnNumber: 6
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EventCalendar;
}),
"[project]/src/components/Announcements.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
/* || Tempurary data */ const Announcements = [
    {
        id: 1,
        Date: "2025-12-12",
        Tile: "First Semister Exam",
        discription: "Each student most be present an take part of this Exam!!"
    },
    {
        id: 2,
        Tile: "Second Semister Exam",
        Date: "2026-05-06",
        discription: "Each student most be present an take part of this Exam!!"
    },
    {
        id: 4,
        Date: "2026-06-07",
        Tile: "Result",
        discription: "Login to you student accout and check ur result"
    }
];
const Announcement = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 bg-white p-4 rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-semibold my-1",
                        children: "Announcements"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Announcements.tsx",
                        lineNumber: 31,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-sm text-gray-300",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Announcements.tsx",
                        lineNumber: 32,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Announcements.tsx",
                lineNumber: 30,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            Announcements.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-md bg-gray-200 odd:bg-amber-200 even:bg-purple-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-semibold text-gray-600",
                                    children: event.Tile
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Announcements.tsx",
                                    lineNumber: 37,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300 text-xm",
                                    children: event.Date
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Announcements.tsx",
                                    lineNumber: 38,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Announcements.tsx",
                            lineNumber: 36,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "m-p-2 text-gray-400 text-sm",
                            children: event.discription
                        }, void 0, false, {
                            fileName: "[project]/src/components/Announcements.tsx",
                            lineNumber: 40,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, event.id, true, {
                    fileName: "[project]/src/components/Announcements.tsx",
                    lineNumber: 35,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Announcements.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Announcement;
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TEMPORARY DATA FOR TESTING PURPOSES
__turbopack_context__.s([
    "DepartmentsData",
    ()=>DepartmentsData,
    "TeacherCalendarEvents",
    ()=>TeacherCalendarEvents,
    "announcementsData",
    ()=>announcementsData,
    "assignmentsData",
    ()=>assignmentsData,
    "calendarEvents",
    ()=>calendarEvents,
    "eventsData",
    ()=>eventsData,
    "examsData",
    ()=>examsData,
    "lessonsData",
    ()=>lessonsData,
    "parentsData",
    ()=>parentsData,
    "resultsData",
    ()=>resultsData,
    "role",
    ()=>role,
    "studentsData",
    ()=>studentsData,
    "subjectsData",
    ()=>subjectsData,
    "teachersData",
    ()=>teachersData
]);
let role = "admin";
const teachersData = [
    {
        id: 1,
        teacherId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Math",
            "Geometry"
        ],
        classes: [
            "1B",
            "2A",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        teacherId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Physics",
            "Chemistry"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        teacherId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Biology"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        teacherId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "History"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        teacherId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Music",
            "History"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        teacherId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Physics"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        teacherId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "English",
            "Spanish"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        teacherId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Math",
            "Geometry"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        teacherId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Literature",
            "English"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        teacherId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Biology"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    }
];
const studentsData = [
    {
        id: 1,
        studentId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "1B",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        studentId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        studentId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        studentId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        studentId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        studentId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        studentId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        studentId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        studentId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        studentId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    }
];
const parentsData = [
    {
        id: 1,
        name: "Johns Doe",
        students: [
            "Sarah Brewer"
        ],
        email: "john@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        name: "Jane Doe",
        students: [
            "Cecilia Bradley"
        ],
        email: "jane@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        name: "Mike Geller",
        students: [
            "Fanny Caldwell"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        name: "Jay French",
        students: [
            "Mollie Fitzgerald",
            "Ian Bryant"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        name: "Jane Smith",
        students: [
            "Mable Harvey"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        name: "Anna Santiago",
        students: [
            "Joel Lambert"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        name: "Allen Black",
        students: [
            "Carrie Tucker",
            "Lilly Underwood"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        name: "Ophelia Castro",
        students: [
            "Alexander Blair"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        name: "Derek Briggs",
        students: [
            "Susan Webster",
            "Maude Stone"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        name: "John Glover",
        students: [
            "Stella Scott"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    }
];
const subjectsData = [
    {
        id: 1,
        name: "Math",
        teachers: [
            "Alice Phelps",
            "Russell Davidson"
        ]
    },
    {
        id: 2,
        name: "English",
        teachers: [
            "Manuel Becker",
            "Eddie Chavez"
        ]
    },
    {
        id: 3,
        name: "Physics",
        teachers: [
            "Lola Newman",
            "Darrell Delgado"
        ]
    },
    {
        id: 4,
        name: "Chemistry",
        teachers: [
            "Nathan Kelly",
            "Benjamin Snyder"
        ]
    },
    {
        id: 5,
        name: "Biology",
        teachers: [
            "Alma Benson",
            "Lina Collier"
        ]
    },
    {
        id: 6,
        name: "History",
        teachers: [
            "Hannah Bowman",
            "Betty Obrien"
        ]
    },
    {
        id: 7,
        name: "Geography",
        teachers: [
            "Lora French",
            "Sue Brady"
        ]
    },
    {
        id: 8,
        name: "Art",
        teachers: [
            "Harriet Alvarado",
            "Mayme Keller"
        ]
    },
    {
        id: 9,
        name: "Music",
        teachers: [
            "Gertrude Roy",
            "Rosa Singleton"
        ]
    },
    {
        id: 10,
        name: "Literature",
        teachers: [
            "Effie Lynch",
            "Brett Flowers"
        ]
    }
];
const DepartmentsData = [
    {
        id: 1,
        name: "Accountancy",
        courses: 20,
        supervisor: "Joseph Padilla"
    },
    {
        id: 2,
        name: "Business Studies",
        courses: 25,
        supervisor: "Blake Joseph"
    },
    {
        id: 3,
        name: "Banking and Finance",
        courses: 20,
        supervisor: "Tom Bennett"
    },
    {
        id: 4,
        name: "Marketing",
        courses: 18,
        supervisor: "Aaron Collins"
    },
    {
        id: 5,
        name: "Management",
        courses: 16,
        supervisor: "Iva Frank"
    },
    {
        id: 6,
        name: "Public Services and Administration",
        courses: 20,
        supervisor: "Leila Santos"
    },
    {
        id: 7,
        name: "Software Engineering and Computing",
        courses: 48,
        supervisor: "Carrie Walton"
    },
    {
        id: 8,
        name: "Hardware Maintenance",
        courses: 22,
        supervisor: "Christopher Butler"
    },
    {
        id: 9,
        name: "E-commerce and Digital Marketing",
        courses: 18,
        supervisor: "Marc Miller"
    },
    {
        id: 10,
        name: "Networks and Security",
        courses: 20,
        supervisor: "Ophelia Marsh"
    }
];
const lessonsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "Tommy Wise"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "Rhoda Frank"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "Della Dunn"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "Bruce Rodriguez"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "Birdie Butler"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "Bettie Oliver"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "Herman Howard"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "Lucinda Thomas"
    },
    {
        id: 9,
        subject: "Physics",
        class: "6C",
        teacher: "Ronald Roberts"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "4B",
        teacher: "Julia Pittman"
    }
];
const examsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        time: "10:00 AM",
        teacher: "Martha Morris",
        date: "2025-01-01"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        time: "11:00 AM",
        teacher: "Randall Garcia",
        date: "2025-01-01"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        time: "12:00 PM",
        teacher: "Myrtie Scott",
        date: "2025-01-01"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        time: "01:00 PM",
        teacher: "Alvin Swanson",
        date: "2025-01-01"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        time: "02:00 PM",
        teacher: "Mabelle Wallace",
        date: "2025-01-01"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        time: "03:00 PM",
        teacher: "Dale Thompson",
        date: "2025-01-01"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        time: "04:00 PM",
        teacher: "Allie Conner",
        date: "2025-01-01"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        time: "05:00 PM",
        teacher: "Hunter Fuller",
        date: "2025-01-01"
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        time: "06:00 PM",
        teacher: "Lois Lindsey",
        date: "2025-01-01"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        time: "07:00 PM",
        teacher: "Vera Soto",
        date: "2025-01-01"
    }
];
const assignmentsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "Anthony Boone",
        dueDate: "2025-01-01"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "Clifford Bowen",
        dueDate: "2025-01-01"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "Catherine Malone",
        dueDate: "2025-01-01"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "Willie Medina",
        dueDate: "2025-01-01"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "Jose Ruiz",
        dueDate: "2025-01-01"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "Katharine Owens",
        dueDate: "2025-01-01"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "Shawn Norman",
        dueDate: "2025-01-01"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "Don Holloway",
        dueDate: "2025-01-01"
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        teacher: "Franklin Gregory",
        dueDate: "2025-01-01"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        teacher: "Danny Nguyen",
        dueDate: "2025-01-01"
    }
];
const resultsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    }
];
const eventsData = [
    {
        id: 1,
        title: "Lake Trip",
        class: "1A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 2,
        title: "Picnic",
        class: "2A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 3,
        title: "Beach Trip",
        class: "3A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 4,
        title: "Museum Trip",
        class: "4A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 5,
        title: "Music Concert",
        class: "5A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 6,
        title: "Magician Show",
        class: "1B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 7,
        title: "Lake Trip",
        class: "2B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 8,
        title: "Cycling Race",
        class: "3B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 9,
        title: "Art Exhibition",
        class: "4B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 10,
        title: "Sports Tournament",
        class: "5B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    }
];
const announcementsData = [
    {
        id: 1,
        title: "About 4A Math Test",
        class: "4A",
        date: "2025-01-01"
    },
    {
        id: 2,
        title: "About 3A Math Test",
        class: "3A",
        date: "2025-01-01"
    },
    {
        id: 3,
        title: "About 3B Math Test",
        class: "3B",
        date: "2025-01-01"
    },
    {
        id: 4,
        title: "About 6A Math Test",
        class: "6A",
        date: "2025-01-01"
    },
    {
        id: 5,
        title: "About 8C Math Test",
        class: "8C",
        date: "2025-01-01"
    },
    {
        id: 6,
        title: "About 2A Math Test",
        class: "2A",
        date: "2025-01-01"
    },
    {
        id: 7,
        title: "About 4C Math Test",
        class: "4C",
        date: "2025-01-01"
    },
    {
        id: 8,
        title: "About 4B Math Test",
        class: "4B",
        date: "2025-01-01"
    },
    {
        id: 9,
        title: "About 3C Math Test",
        class: "3C",
        date: "2025-01-01"
    },
    {
        id: 10,
        title: "About 1C Math Test",
        class: "1C",
        date: "2025-01-01"
    }
];
const calendarEvents = [
    /* || Monday (day 1) */ {
        id: 1,
        title: "Math",
        day: 1,
        startHour: 8,
        endHour: 10
    },
    {
        id: 2,
        title: "Programming",
        day: 1,
        startHour: 11,
        endHour: 13
    },
    {
        id: 3,
        title: "General computer science",
        day: 1,
        startHour: 14,
        endHour: 15
    },
    {
        id: 4,
        title: "Physics",
        day: 1,
        startHour: 15,
        endHour: 17
    },
    /* || end Monday */ /* || Tuesday (day 2) */ {
        id: 5,
        title: "Math",
        day: 2,
        startHour: 8,
        endHour: 11
    },
    {
        id: 6,
        title: "Programming",
        day: 2,
        startHour: 11,
        endHour: 13
    },
    {
        id: 7,
        title: "General computer science",
        day: 2,
        startHour: 14,
        endHour: 15
    },
    {
        id: 8,
        title: "Physics",
        day: 2,
        startHour: 15,
        endHour: 17
    },
    /* || end Tuesday */ /* || Wednesday (day 3) */ {
        id: 9,
        title: "Math",
        day: 3,
        startHour: 8,
        endHour: 11
    },
    {
        id: 10,
        title: "Programming",
        day: 3,
        startHour: 11,
        endHour: 13
    },
    {
        id: 11,
        title: "General computer science",
        day: 3,
        startHour: 14,
        endHour: 15
    },
    {
        id: 12,
        title: "Physics",
        day: 3,
        startHour: 15,
        endHour: 17
    },
    /* || end Wednesday */ /* || Thursday (day 4) */ {
        id: 13,
        title: "Math",
        day: 4,
        startHour: 8,
        endHour: 11
    },
    {
        id: 14,
        title: "Programming",
        day: 4,
        startHour: 11,
        endHour: 13
    },
    {
        id: 15,
        title: "General computer science",
        day: 4,
        startHour: 14,
        endHour: 15
    },
    {
        id: 16,
        title: "Physics",
        day: 4,
        startHour: 15,
        endHour: 17
    },
    /* || end Thursday */ /* || Friday (day 5) */ {
        id: 17,
        title: "Math",
        day: 5,
        startHour: 8,
        endHour: 11
    },
    {
        id: 18,
        title: "Programming",
        day: 5,
        startHour: 11,
        endHour: 13
    },
    {
        id: 19,
        title: "General computer science",
        day: 5,
        startHour: 14,
        endHour: 15
    },
    {
        id: 20,
        title: "Physics",
        day: 5,
        startHour: 15,
        endHour: 17
    }
];
const TeacherCalendarEvents = [
    /* || Monday (day 1) */ {
        id: 1,
        title: "Math",
        day: 1,
        startHour: 8,
        endHour: 10,
        level: "level-100"
    },
    {
        id: 2,
        title: "Programming",
        day: 1,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 3,
        title: "General computer science",
        day: 1,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 4,
        title: "Physics",
        day: 1,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Monday */ /* || Tuesday (day 2) */ {
        id: 5,
        title: "Math",
        day: 2,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 6,
        title: "Programming",
        day: 2,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 7,
        title: "General computer science",
        day: 2,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 8,
        title: "Physics",
        day: 2,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Tuesday */ /* || Wednesday (day 3) */ {
        id: 9,
        title: "Math",
        day: 3,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 10,
        title: "Programming",
        day: 3,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 11,
        title: "General computer science",
        day: 3,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 12,
        title: "Physics",
        day: 3,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Wednesday */ /* || Thursday (day 4) */ {
        id: 13,
        title: "Math",
        day: 4,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 14,
        title: "Programming",
        day: 4,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 15,
        title: "General computer science",
        day: 4,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 16,
        title: "Physics",
        day: 4,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    },
    /* || end Thursday */ /* || Friday (day 5) */ {
        id: 17,
        title: "Math",
        day: 5,
        startHour: 8,
        endHour: 11,
        level: "level-100"
    },
    {
        id: 18,
        title: "Programming",
        day: 5,
        startHour: 11,
        endHour: 13,
        level: "level-200"
    },
    {
        id: 19,
        title: "General computer science",
        day: 5,
        startHour: 14,
        endHour: 15,
        level: "level-300"
    },
    {
        id: 20,
        title: "Physics",
        day: 5,
        startHour: 15,
        endHour: 17,
        level: "level-400"
    }
];
}),
"[project]/src/components/customToobar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-ssr] (ecmascript)");
;
;
function CustomToolbar(props) {
    const { label, onNavigate, date } = props;
    /* || next tooble button which will not be more than the current week */ const startOfCurrentWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().startOf("week").add(6, "day"); // Monday
    const endOfCurrentWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().endOf("week").subtract(0, "day"); // Saturday
    const isCurrentWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(date).isSameOrAfter(startOfCurrentWeek, "day") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(date).isSameOrBefore(endOfCurrentWeek, "day");
    /* || Back tooble button which will not be lesser than the current week */ const startOfBacktWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().startOf("week").add(1, "day"); // Monday
    const endOfNextWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().endOf("week").add(1, "day"); // Saturday
    const isBackToCurrentWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(date).isSameOrAfter(startOfBacktWeek, "day") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(date).isSameOrBefore(endOfNextWeek, "day");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "focus:bg-gray-200 p-3 rounded-2xl bg-gray-100",
                onClick: ()=>onNavigate("PREV"),
                disabled: !isBackToCurrentWeek,
                children: "Back"
            }, void 0, false, {
                fileName: "[project]/src/components/customToobar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-sm",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/customToobar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "focus:bg-gray-200 p-3 rounded-2xl bg-gray-100",
                onClick: ()=>onNavigate("NEXT"),
                disabled: isCurrentWeek,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/customToobar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customToobar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CustomToolbar;
}),
"[project]/src/components/Bigcalendar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-big-calendar/dist/react-big-calendar.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customToobar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customToobar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const localizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["momentLocalizer"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const currentdate = new Date().getFullYear();
const BigCalendar = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].updateLocale("en", {
        week: {
            dow: 1,
            doy: 2
        }
    });
    function generateWeeklyEvents(baseWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calendarEvents"].map((e)=>{
            const start = baseWeek.clone().startOf("week").add(e.day, "days").hour(e.startHour).minute(0).toDate();
            const end = baseWeek.clone().startOf("week").add(e.day, "days").hour(e.endHour).minute(0).toDate();
            return {
                ...e,
                start,
                end
            };
        });
    }
    const events = generateWeeklyEvents();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar"], {
            localizer: localizer,
            events: events,
            startAccessor: "start",
            endAccessor: "end",
            defaultView: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Views"].DAY,
            views: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Views"].DAY
            ],
            components: {
                toolbar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customToobar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            style: {
                height: 600
            },
            min: new Date(1970, 1, 1, 8, 0),
            max: new Date(1970, 1, 1, 18, 0)
        }, void 0, false, {
            fileName: "[project]/src/components/Bigcalendar.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Bigcalendar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BigCalendar;
}),
];

//# sourceMappingURL=src_e9279cc5._.js.map