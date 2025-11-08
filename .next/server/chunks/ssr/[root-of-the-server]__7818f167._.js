module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const PrismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
};
const prisma = globalThis.PrismaGlobal ?? PrismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalThis.PrismaGlobal = prisma;
}),
"[project]/src/lib/actions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f1958bbffa72d1118ebe8e856d2bc8e4988dfcec7":"CreatTeache","7f377155bc56bba58e2e89f23de9327f0d9e537c1a":"CreateCourse","7f48bf0f5cf48325463aa065f652203ad690e91960":"deletCourse","7f6e290e7a4ae1394b99b9b07e1941bacc1529a7ed":"deleteStudent","7f77f5b68156b46a2b93dcfa75fbb6cee1de3d8eb6":"CreatStudent","7f97979004df04e563b688357595c32966dfb8cfdf":"UpdateCourse","7ffcce5cc34b3e34c4f76b15b416fd791b8f2ef2a5":"UpdateStudent"},"",""] */ __turbopack_context__.s([
    "CreatStudent",
    ()=>CreatStudent,
    "CreatTeache",
    ()=>CreatTeache,
    "CreateCourse",
    ()=>CreateCourse,
    "UpdateCourse",
    ()=>UpdateCourse,
    "UpdateStudent",
    ()=>UpdateStudent,
    "deletCourse",
    ()=>deletCourse,
    "deleteStudent",
    ()=>deleteStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const CreateCourse = async (currentState, data)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].subject.create({
            data: {
                name: data.CourseName,
                teachers: {
                    connect: data.teachers.map((teacherId)=>({
                            id: teacherId
                        }))
                }
            }
        });
        /*    revalidatePath(" /list/courses") */ return {
            successMessage: true,
            errorMessage: false
        };
    } catch (error) {
        return {
            successMessage: false,
            errorMessage: true
        };
    }
};
const UpdateCourse = async (currentState, data)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].subject.update({
            where: {
                id: Number(data.id)
            },
            data: {
                name: data.CourseName,
                teachers: {
                    set: [],
                    connect: data.teachers.map((id)=>({
                            id
                        }))
                }
            }
        });
        return {
            successMessage: true,
            errorMessage: false
        };
    } catch (error) {
        return {
            successMessage: false,
            errorMessage: true
        };
    }
};
const deletCourse = async (currentState, data)=>{
    const id = data.get("id");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].subject.delete({
            where: {
                id: parseInt(id)
            }
        });
        return {
            successMessage: true,
            errorMessage: false
        };
    } catch (error) {
        return {
            successMessage: false,
            errorMessage: true
        };
    }
} /* || End */ ;
const CreatStudent = async (currentState, data)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].student.create({
            data: {
                username: data.UserName,
                address: data.Address,
                age: Number(data.age),
                email: data.email,
                firstName: data.FirstName,
                lastName: data.LastName,
                password: data.password,
                phoneNumber: data.phoneNumber,
                DateOfBirth: new Date(data.dateOfBirth),
                sex: data.sex,
                matricule: data.MatriculeNo,
                department: {
                    connect: {
                        id: data.department
                    }
                }
            }
        });
        return {
            successMessage: true,
            errorMessage: false
        };
    } catch (error) {
        return {
            successMessage: false,
            errorMessage: true
        };
    }
};
const deleteStudent = async (currentState, data)=>{
    const id = data.get("id");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].student.delete({
            where: {
                id: id
            }
        });
        return {
            successMessage: true,
            errorMessage: false
        };
        //TURBOPACK unreachable
        ;
    } catch (error) {
        return {
            successMessage: false,
            errorMessage: true
        };
    }
};
const UpdateStudent = async (currentState, data)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].student.update({
            where: {
                id: data.id
            },
            data: {
                username: data.UserName,
                address: data.Address,
                age: Number(data.age),
                email: data.email,
                firstName: data.FirstName,
                lastName: data.LastName,
                password: data.password,
                phoneNumber: data.phoneNumber,
                DateOfBirth: new Date(data.dateOfBirth),
                sex: data.sex,
                matricule: data.MatriculeNo,
                department: {
                    connect: {
                        id: data.department
                    }
                }
            }
        });
        return {
            successMessage: true,
            errorMessage: false
        };
    } catch (error) {
        return {
            successMessage: false,
            errorMessage: true
        };
    }
};
const CreatTeache = async (currentState, data)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].teacher.create({
            data: {
                username: data.UserName,
                address: data.Address,
                age: Number(data.age),
                email: data.email,
                firstName: data.FirstName,
                lastName: data.LastName,
                password: data.password,
                phoneNumber: data.phoneNumber,
                sex: data.sex,
                teachersId: data.teachersId,
                courses: {
                    connect: data.Courses.map((courseId)=>({
                            id: courseId
                        }))
                }
            }
        });
        return {
            successMessage: true,
            errorMessage: false
        };
    } catch (error) {
        return {
            successMessage: false,
            errorMessage: true
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    CreateCourse,
    UpdateCourse,
    deletCourse,
    CreatStudent,
    deleteStudent,
    UpdateStudent,
    CreatTeache
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(CreateCourse, "7f377155bc56bba58e2e89f23de9327f0d9e537c1a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(UpdateCourse, "7f97979004df04e563b688357595c32966dfb8cfdf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletCourse, "7f48bf0f5cf48325463aa065f652203ad690e91960", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(CreatStudent, "7f77f5b68156b46a2b93dcfa75fbb6cee1de3d8eb6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteStudent, "7f6e290e7a4ae1394b99b9b07e1941bacc1529a7ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(UpdateStudent, "7ffcce5cc34b3e34c4f76b15b416fd791b8f2ef2a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(CreatTeache, "7f1958bbffa72d1118ebe8e856d2bc8e4988dfcec7", null);
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(dashboard)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboard)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/pagination.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/pagination.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pagination.tsx <module evaluation>", "default");
}),
"[project]/src/components/pagination.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/pagination.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pagination.tsx", "default");
}),
"[project]/src/components/pagination.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/pagination.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/pagination.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/table.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Table = ({ columns, renderRow, data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: "w-full mt-4 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "text-left text-gray-500 text-sm ",
                    children: columns.map((columns)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: columns.className,
                            children: [
                                " ",
                                columns.header
                            ]
                        }, columns.accessorKey, true, {
                            fileName: "[project]/src/components/table.tsx",
                            lineNumber: 16,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/table.tsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/table.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                className: "",
                children: data.map((item)=>renderRow(item))
            }, void 0, false, {
                fileName: "[project]/src/components/table.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/table.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Table;
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/TablesearchBar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/TablesearchBar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/TablesearchBar.tsx <module evaluation>", "default");
}),
"[project]/src/components/TablesearchBar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/TablesearchBar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/TablesearchBar.tsx", "default");
}),
"[project]/src/components/TablesearchBar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TablesearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/TablesearchBar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TablesearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/TablesearchBar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TablesearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(dashboard)/Settings.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Items_Per_Page",
    ()=>Items_Per_Page,
    "routeAccessMap",
    ()=>routeAccessMap
]);
const Items_Per_Page = 10;
const routeAccessMap = {
    "admin(.*)": [
        "admin"
    ],
    "student(.*)": [
        "student"
    ],
    "parent(.*)": [
        "parent"
    ],
    "teacher(.*)": [
        "teacher"
    ],
    "list/teache": [
        "admin",
        "teacher"
    ],
    "list/students": [
        "admin",
        "teacher",
        "parent"
    ],
    "list/subjects": [
        "admin",
        "teacher",
        "student",
        "parent"
    ],
    "list/lessons": [
        "admin",
        "teacher",
        "student",
        "parent"
    ],
    "list/exams": [
        "admin",
        "teacher",
        "student",
        "parent"
    ],
    "list/results": [
        "admin",
        "teacher",
        "student",
        "parent"
    ],
    "assignments": [
        "admin",
        "teacher",
        "student",
        "parent"
    ],
    "attendance": [
        "admin",
        "teacher",
        "student",
        "parent"
    ],
    "events": [
        "admin",
        "teacher",
        "student",
        "parent"
    ],
    "announcements": [
        "admin",
        "teacher",
        "student",
        "parent"
    ]
};
}),
"[project]/src/components/FormModel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FormModel.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FormModel.tsx <module evaluation>", "default");
}),
"[project]/src/components/FormModel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FormModel.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FormModel.tsx", "default");
}),
"[project]/src/components/FormModel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormModel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/FormModel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormModel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/FormModel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormModel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/NoResult.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoResultFound",
    ()=>NoResultFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const NoResultFound = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-800 font-semibold",
                children: props.Result
            }, void 0, false, {
                fileName: "[project]/src/components/NoResult.tsx",
                lineNumber: 6,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/EmtyResult.png",
                alt: "",
                width: 300,
                height: 300
            }, void 0, false, {
                fileName: "[project]/src/components/NoResult.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NoResult.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/(dashboard)/list/teachers/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pagination.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/table.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TablesearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TablesearchBar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/Settings.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormModel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormModel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NoResult$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NoResult.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const Columns = [
    {
        header: "Info",
        accessorKey: "info"
    },
    {
        header: "Teacher ID",
        accessorKey: "teacherId ",
        className: "hidden md:table-cell"
    },
    {
        header: "Subjects",
        accessorKey: "subjects",
        className: "hidden md:table-cell"
    },
    /*            {
            header:"Classes",
            accessorKey:"classes",
            className: "hidden md:table-cell"
            
        }, */ {
        header: "Phone",
        accessorKey: "phone",
        className: "hidden md:table-cell"
    },
    {
        header: "Address",
        accessorKey: "address",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessorKey: "actions",
        className: "hidden md:table-cell"
    }
];
const renderRow = (teacher)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "flex items-center gap-4  p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "md:hidden xl:block w-10 h-10 rounded-full object-cover",
                        alt: "",
                        width: 40,
                        height: 40,
                        src: teacher.image || teacher.sex == "Female" ? "/FemaleIcon.png" : "/maleIcon.png"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                        lineNumber: 63,
                        columnNumber: 62
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: teacher.firstName + " " + teacher.lastName
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 hidden md:table-cell",
                                children: teacher.email
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "hidden md:table-cell",
                children: teacher.teachersId
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 70,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "hidden md:table-cell",
                children: teacher.courses.map((course)=>course.name).join(", ")
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 71,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "hidden md:table-cell",
                children: teacher.phoneNumber
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 72,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "hidden md:table-cell",
                children: teacher.address
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 73,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: " md:table-cell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 self-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/list/teachers/${teacher.id}`,
                            className: "text-blue-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-7 h-7 flex items-center justify-center rounded-full bg-[#271288]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/view.png",
                                    alt: "",
                                    width: 16,
                                    height: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 114
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                lineNumber: 77,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["role"] === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "  ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormModel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    table: "Teacher",
                                    type: "Update",
                                    id: teacher.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormModel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    table: "Teacher",
                                    type: "Delete",
                                    id: teacher.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, teacher.id, true, {
        fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
        lineNumber: 62,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
const TeacherListpage = async ({ searchParams })=>{
    const Params = await searchParams;
    const { page, ...queryParams } = Params;
    /* || checking if page ex */ const p = page ? parseInt(page) : 1;
    /* || uRL SEARCHE CONDITION */ const query = {};
    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)){
            if (value !== undefined && value !== "") {
                switch(key){
                    case "search":
                        query.OR = [
                            {
                                lastName: {
                                    contains: value
                                }
                            },
                            {
                                firstName: {
                                    contains: value
                                }
                            }
                        ];
                }
            }
        }
    }
    const [teachers, count] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].teacher.findMany({
            where: query,
            include: {
                courses: true
            },
            take: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Items_Per_Page"],
            skip: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Items_Per_Page"] * (p - 1)
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].teacher.count({
            where: query
        })
    ]);
    return /* Teacher Page */ /* Right hand side */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " flex-1 bg-white p-4 rounded-md m-4 mt-0 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mb-5 flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hidden md:block  text-lg font-semibold",
                        children: "All Teachers "
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TablesearchBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                            lineNumber: 139,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 self-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-8 h-8 flex items-center justify-center rounded-full bg-orange-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/filter.png",
                                    alt: "Add",
                                    width: 14,
                                    height: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 110
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                lineNumber: 142,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-8 h-8 flex items-center justify-center rounded-full bg-orange-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/sort.png",
                                    alt: "Add",
                                    width: 14,
                                    height: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 110
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                lineNumber: 143,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormModel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                table: "Teacher",
                                type: "Create"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                                lineNumber: 144,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${count == 0 ? ' flex items-center justify-center mt-4 h-[90vh]' : ""}`,
                children: count !== 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    columns: Columns,
                    renderRow: renderRow,
                    data: teachers
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                    lineNumber: 149,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NoResult$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoResultFound"], {
                    Result: "Teacher not Found !! please Input the right Name"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                    lineNumber: 150,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: count !== 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    page: p,
                    count: count
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)) : ""
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/list/teachers/page.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TeacherListpage;
}),
"[project]/src/app/(dashboard)/list/teachers/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboard)/list/teachers/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7818f167._.js.map