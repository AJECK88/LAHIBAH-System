module.exports = [
"[project]/src/components/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const Input = ({ type, register, errors, name, label, id, hidden, inputProps, Placeholder })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `${hidden ? 'hidden' : ""}`,
        htmlFor: id,
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/components/input.tsx",
                lineNumber: 22,
                columnNumber: 73
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "h-[40px] border-2 border-amber-100 w-full p-2",
                ...register(name),
                type: type,
                id: id,
                placeholder: Placeholder,
                ...inputProps
            }, void 0, false, {
                fileName: "[project]/src/components/input.tsx",
                lineNumber: 23,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            errors?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-red-600 font-light",
                children: errors?.message.toString()
            }, void 0, false, {
                fileName: "[project]/src/components/input.tsx",
                lineNumber: 27,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/input.tsx",
        lineNumber: 22,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Input;
}),
"[project]/src/lib/FormValidationSchima.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courseSchema",
    ()=>courseSchema,
    "studentSchma",
    ()=>studentSchma,
    "teacherSchema",
    ()=>teacherSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/index.js [app-ssr] (ecmascript) <locals>");
;
const courseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].number().optional(),
    CourseName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be at most 20 characters long'
    }),
    teachers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()).optional()
});
const studentSchma = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    UserName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be at most 20 characters long'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().email({
        message: 'Invalid email address'
    }),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(4, {
        message: 'Password must be at least 4 characters long'
    }).max(8, {
        message: 'Password must be at most 8 characters long'
    }),
    FirstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'First Name must be at least 1 character long'
    }),
    LastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'Last Name must be at least 1 character long'
    }),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().regex(/^\d{9}$/, {
        message: "Invalid phone number"
    }).min(9, {
        message: 'Phone Number must be at least 10 characters long'
    }).max(15, {
        message: 'Phone Number must be at most 15 characters long'
    }),
    sex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].enum([
        'Male',
        'Female'
    ], {
        message: 'sex is required'
    }),
    age: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(2, {
        message: 'Age must be at least 16'
    }),
    MatriculeNo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
    department: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: "Department is requird"
    }),
    Address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(5, {
        message: 'Address must be at least 5 characters long'
    }).max(15, {
        message: 'Address must be at most 15 characters long'
    }),
    dateOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().refine((val)=>!isNaN(Date.parse(val)), {
        message: "Invalid date"
    }),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional()
});
const teacherSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    UserName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be at most 20 characters long'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().email({
        message: 'Invalid email address'
    }),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(4, {
        message: 'Password must be at least 4 characters long'
    }).max(8, {
        message: 'Password must be at most 8 characters long'
    }),
    FirstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'First Name must be at least 1 character long'
    }),
    Courses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()).optional(),
    LastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'Last Name must be at least 1 character long'
    }),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(9, {
        message: 'Phone Number must be at least 10 characters long'
    }).max(15, {
        message: 'Phone Number must be at most 15 characters long'
    }),
    sex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].enum([
        'Male',
        'Female'
    ], {
        message: 'sex is required'
    }),
    teachersId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(4, {
        message: 'TeacherID must be at most 10 characters long'
    }),
    Address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(5, {
        message: 'Address must be at least 5 characters long'
    }).max(15, {
        message: 'Address must be at most 15 characters long'
    }),
    BloodType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'required'
    }),
    dateOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().refine((val)=>!isNaN(Date.parse(val)), {
        message: "Invalid date"
    }),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional()
});
}),
"[project]/src/lib/data:9db5ce [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f77f5b68156b46a2b93dcfa75fbb6cee1de3d8eb6":"CreatStudent"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "CreatStudent",
    ()=>CreatStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var CreatStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f77f5b68156b46a2b93dcfa75fbb6cee1de3d8eb6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "CreatStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSBcImNvbnNvbGVcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycz8ubWFwKCh0ZWFjaGVySWQ6IHN0cmluZykgPT4gKHsgaWQ6IHRlYWNoZXJJZCB9KSksXG4gICAgICAgICB9XG4gICAgIH1cbiAgIH0pO1xuLyogICAgcmV2YWxpZGF0ZVBhdGgoXCIgL2xpc3QvY291cnNlc1wiKSAqL1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcblxuICB9IGNhdGNoKGVycm9yKXtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG5cbiAgfVxuXG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvdXJzZSA9IGFzeW5jIChcbiAgY3VycmVudFN0YXRlOiBjdXJyZW50U3RhdGUsXG4gIGRhdGE6IENvdXJzZVNjaGVtYVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnN1YmplY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIoZGF0YS5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgIHRlYWNoZXJzOiB7XG4gICAgICAgICAgc2V0OiBbXSxcbiAgICAgICAgICBjb25uZWN0OiBkYXRhLnRlYWNoZXJzPy5tYXAoKGlkOiBzdHJpbmcpID0+ICh7IGlkIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG5cblxuXG5leHBvcnQgY29uc3QgZGVsZXRDb3Vyc2UgPSBhc3luYyhcbiAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgZGF0YSA6IEZvcm1EYXRhXG4pPT57XG4gIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC5kZWxldGUoe1xuICAgICB3aGVyZToge1xuICAgICBpZDogcGFyc2VJbnQoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxuXG59IC8qIHx8IEVuZCAqLyBcblxuICAvKiB8fCBzdHVkZW50IHNlY3Rpb24gdG8gdXBkYXRlICwgY3JlYXRlIGFuZCBkZWxldGUgKi9cbiBleHBvcnQgY29uc3QgIENyZWF0U3R1ZGVudCA9IGFzeW5jKCBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSwgZGF0YTpTdHVkZW50U2NoZW1hKSAgPT57ICBcbiAgdHJ5e1xuICAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgYWdlOk51bWJlcihkYXRhLmFnZSksXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgRGF0ZU9mQmlydGg6bmV3IERhdGUoZGF0YS5kYXRlT2ZCaXJ0aCksXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICBtYXRyaWN1bGU6ZGF0YS5NYXRyaWN1bGVObyxcbiAgICAgICAgIGRlcGFydG1lbnQ6e1xuICAgICAgICAgICBjb25uZWN0OntpZDpkYXRhLmRlcGFydG1lbnR9XG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgICB9XG4gfVxuIGV4cG9ydCBjb25zdCBkZWxldGVTdHVkZW50ID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IChpZCksXG4gICAgIH1cbiAgIH0pO1xuICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cbn1cbmV4cG9ydCBjb25zdCAgVXBkYXRlU3R1ZGVudCA9IGFzeW5jKCBcbiAgY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUgLCBcbiAgZGF0YSA6U3R1ZGVudFNjaGVtYVxuXG5cbik9PntcbiAgIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IChkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBhZ2U6TnVtYmVyKGRhdGEuYWdlKSxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBEYXRlT2ZCaXJ0aDpuZXcgRGF0ZShkYXRhLmRhdGVPZkJpcnRoKSxcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIG1hdHJpY3VsZTpkYXRhLk1hdHJpY3VsZU5vLFxuICAgICAgICAgZGVwYXJ0bWVudDp7XG4gICAgICAgICAgIGNvbm5lY3Q6e2lkOmRhdGEuZGVwYXJ0bWVudH1cbiAgICAgICAgIH0gXG4gICAgICAgICBcbiAgICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuLyogfHwgZW5kICovXG4vKiB8fCBUZWFjaGVyIHNlY3Rpb24gdG8gY3JlYXRlICwgdXBkYXRlIGFuZCBkZWxldGUgKi9cbmV4cG9ydCBjb25zdCBDcmVhdFRlYWNoZSA9IGFzeW5jKGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlICwgZGF0YTpUZWFjaGVyU2NoZW1hKT0+e1xuICB0cnkge1xuICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXM/Lm1hcCgoY291cnNlSWQ6YW55KSA9PiAoeyBpZDogY291cnNlSWQgfSkpLFxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVhY2hlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgICAgIGNhdGNoKGVycm9yKXsgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0ZWFjaGVyOlwiLCBlcnJvcik7ICBcbiAgICAgICAgcmV0dXJuKCB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfSApOyAgIFxuICAgICAgIH1cbiAgICBcbn1cbmV4cG9ydCBjb25zdCBVcGRhdGVUZWFjaGUgPSBhc3luYyAoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGVcbiAgLCBkYXRhOlRlYWNoZXJTY2hlbWFcblxuKSA9PntcbiAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTp7XG4gICAgICAgIGlkOihkYXRhLmlkKVxuICAgICAgfSxcbiAgICAgIGRhdGE6e1xuICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICB0ZWFjaGVyc0lkICA6ZGF0YS50ZWFjaGVyc0lkLFxuICAgICAgICAgY291cnNlczp7XG4gICAgICAgICAgc2V0OltdLFxuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXM/Lm1hcCgoY291cnNlSWQ6YW55KSA9PiAoeyBpZDogY291cnNlSWQgfSkpLFxuICAgICAgICAgfSBcblxuICAgICAgfVxuICAgICAgXG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXsgIFxuICAgICAgICByZXR1cm4oIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9ICk7ICAgXG4gICAgICAgfSAgXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUZWFjaGVyID0gYXN5bmMoXG4gICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICAgIGRhdGE6Rm9ybURhdGFcbik9PntcbiAgY29uc29sZS5sb2coXCJkZWxldGluZyB0ZWFjaGVyIHdpdGggZGF0YTpcIiwgZGF0YSk7XG4gY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuZGVsZXRlKHtcbiAgICAgIHdoZXJlOntcbiAgICAgICAgaWQ6KGlkKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJueyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlfVxuICB9IFxuIGNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJueyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlXG4gfVxufVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVJBOEVlIn0=
}),
"[project]/src/lib/data:243ba9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7ffcce5cc34b3e34c4f76b15b416fd791b8f2ef2a5":"UpdateStudent"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "UpdateStudent",
    ()=>UpdateStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var UpdateStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7ffcce5cc34b3e34c4f76b15b416fd791b8f2ef2a5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UpdateStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSBcImNvbnNvbGVcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycz8ubWFwKCh0ZWFjaGVySWQ6IHN0cmluZykgPT4gKHsgaWQ6IHRlYWNoZXJJZCB9KSksXG4gICAgICAgICB9XG4gICAgIH1cbiAgIH0pO1xuLyogICAgcmV2YWxpZGF0ZVBhdGgoXCIgL2xpc3QvY291cnNlc1wiKSAqL1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcblxuICB9IGNhdGNoKGVycm9yKXtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG5cbiAgfVxuXG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvdXJzZSA9IGFzeW5jIChcbiAgY3VycmVudFN0YXRlOiBjdXJyZW50U3RhdGUsXG4gIGRhdGE6IENvdXJzZVNjaGVtYVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnN1YmplY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIoZGF0YS5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgIHRlYWNoZXJzOiB7XG4gICAgICAgICAgc2V0OiBbXSxcbiAgICAgICAgICBjb25uZWN0OiBkYXRhLnRlYWNoZXJzPy5tYXAoKGlkOiBzdHJpbmcpID0+ICh7IGlkIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG5cblxuXG5leHBvcnQgY29uc3QgZGVsZXRDb3Vyc2UgPSBhc3luYyhcbiAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgZGF0YSA6IEZvcm1EYXRhXG4pPT57XG4gIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC5kZWxldGUoe1xuICAgICB3aGVyZToge1xuICAgICBpZDogcGFyc2VJbnQoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxuXG59IC8qIHx8IEVuZCAqLyBcblxuICAvKiB8fCBzdHVkZW50IHNlY3Rpb24gdG8gdXBkYXRlICwgY3JlYXRlIGFuZCBkZWxldGUgKi9cbiBleHBvcnQgY29uc3QgIENyZWF0U3R1ZGVudCA9IGFzeW5jKCBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSwgZGF0YTpTdHVkZW50U2NoZW1hKSAgPT57ICBcbiAgdHJ5e1xuICAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgYWdlOk51bWJlcihkYXRhLmFnZSksXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgRGF0ZU9mQmlydGg6bmV3IERhdGUoZGF0YS5kYXRlT2ZCaXJ0aCksXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICBtYXRyaWN1bGU6ZGF0YS5NYXRyaWN1bGVObyxcbiAgICAgICAgIGRlcGFydG1lbnQ6e1xuICAgICAgICAgICBjb25uZWN0OntpZDpkYXRhLmRlcGFydG1lbnR9XG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgICB9XG4gfVxuIGV4cG9ydCBjb25zdCBkZWxldGVTdHVkZW50ID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IChpZCksXG4gICAgIH1cbiAgIH0pO1xuICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cbn1cbmV4cG9ydCBjb25zdCAgVXBkYXRlU3R1ZGVudCA9IGFzeW5jKCBcbiAgY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUgLCBcbiAgZGF0YSA6U3R1ZGVudFNjaGVtYVxuXG5cbik9PntcbiAgIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IChkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBhZ2U6TnVtYmVyKGRhdGEuYWdlKSxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBEYXRlT2ZCaXJ0aDpuZXcgRGF0ZShkYXRhLmRhdGVPZkJpcnRoKSxcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIG1hdHJpY3VsZTpkYXRhLk1hdHJpY3VsZU5vLFxuICAgICAgICAgZGVwYXJ0bWVudDp7XG4gICAgICAgICAgIGNvbm5lY3Q6e2lkOmRhdGEuZGVwYXJ0bWVudH1cbiAgICAgICAgIH0gXG4gICAgICAgICBcbiAgICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuLyogfHwgZW5kICovXG4vKiB8fCBUZWFjaGVyIHNlY3Rpb24gdG8gY3JlYXRlICwgdXBkYXRlIGFuZCBkZWxldGUgKi9cbmV4cG9ydCBjb25zdCBDcmVhdFRlYWNoZSA9IGFzeW5jKGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlICwgZGF0YTpUZWFjaGVyU2NoZW1hKT0+e1xuICB0cnkge1xuICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXM/Lm1hcCgoY291cnNlSWQ6YW55KSA9PiAoeyBpZDogY291cnNlSWQgfSkpLFxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVhY2hlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgICAgIGNhdGNoKGVycm9yKXsgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0ZWFjaGVyOlwiLCBlcnJvcik7ICBcbiAgICAgICAgcmV0dXJuKCB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfSApOyAgIFxuICAgICAgIH1cbiAgICBcbn1cbmV4cG9ydCBjb25zdCBVcGRhdGVUZWFjaGUgPSBhc3luYyAoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGVcbiAgLCBkYXRhOlRlYWNoZXJTY2hlbWFcblxuKSA9PntcbiAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTp7XG4gICAgICAgIGlkOihkYXRhLmlkKVxuICAgICAgfSxcbiAgICAgIGRhdGE6e1xuICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICB0ZWFjaGVyc0lkICA6ZGF0YS50ZWFjaGVyc0lkLFxuICAgICAgICAgY291cnNlczp7XG4gICAgICAgICAgc2V0OltdLFxuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXM/Lm1hcCgoY291cnNlSWQ6YW55KSA9PiAoeyBpZDogY291cnNlSWQgfSkpLFxuICAgICAgICAgfSBcblxuICAgICAgfVxuICAgICAgXG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXsgIFxuICAgICAgICByZXR1cm4oIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9ICk7ICAgXG4gICAgICAgfSAgXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUZWFjaGVyID0gYXN5bmMoXG4gICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICAgIGRhdGE6Rm9ybURhdGFcbik9PntcbiAgY29uc29sZS5sb2coXCJkZWxldGluZyB0ZWFjaGVyIHdpdGggZGF0YTpcIiwgZGF0YSk7XG4gY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuZGVsZXRlKHtcbiAgICAgIHdoZXJlOntcbiAgICAgICAgaWQ6KGlkKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJueyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlfVxuICB9IFxuIGNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJueyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlXG4gfVxufVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFJBNEhjIn0=
}),
"[project]/src/components/Forms/StusdentForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$FormValidationSchima$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/FormValidationSchima.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$9db5ce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:9db5ce [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$243ba9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:243ba9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
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
/**
 * ✅ StudentsForms Component
 * Handles both creation and updating of student data.
 * Includes form validation using Zod + React Hook Form.
 */ const StudentsForms = ({ type, data, SetOpen, relatedData })=>{
    const Router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    /**
   * 🎯 Initialize form handling with zod validation
   */ const { register, reset, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$FormValidationSchima$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentSchma"])
    });
    /**
   * 📦 Preview image state
   */ const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   *  Handle file input change for previewing uploaded image
   */ const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };
    /**
   * 🔁 When updating, pre-fill the form with existing data
   */ /* || Using react Formaction to check if the form is sumited  */ const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(type === "Create" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$9db5ce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["CreatStudent"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$243ba9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateStudent"], {
        successMessage: false,
        errorMessage: false
    });
    /**
   * 📁 Handle form submission (stub)
   * This can be extended to send data to your backend.
   */ const onSubmit = handleSubmit((formData)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            formAction(formData);
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.successMessage) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])(`Sudent has been ${type === "Create" ? "created" : "updated"} successfully`, {
                type: "success"
            });
            SetOpen(false);
            Router.refresh();
        }
    }, [
        state,
        type,
        Router,
        SetOpen
    ]);
    /**
   *  Extract department list from relatedData (fallback to empty)
   */ const departments = relatedData?.departments ?? [];
    /* || Updating the form default when editing data changes */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (type === "Update" && data) {
            let formattedDate = "";
            if (data.DateOfBirth) {
                const parsedDate = new Date(data.DateOfBirth);
                if (!isNaN(parsedDate.getTime())) {
                    // Only format valid date
                    formattedDate = parsedDate.toISOString().split("T")[0];
                }
            }
            reset({
                UserName: data.username,
                Address: data.address,
                age: data.age,
                email: data.email,
                password: data.password,
                FirstName: data.firstName,
                LastName: data.lastName,
                phoneNumber: data.phoneNumber,
                dateOfBirth: formattedDate,
                sex: data.sex,
                MatriculeNo: data.matricule,
                department: data.department.id,
                id: data.id
            });
        }
    }, [
        data,
        type,
        reset
    ]);
    /**
   * JSX Render
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col p-2 lg:p-4 justify-center items-center gap-4",
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold self-start",
                children: [
                    type === "Create" ? "Create A New" : "Update",
                    " Student"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-gray-500 self-start text-sm font-semibold",
                children: "Authentication Info"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 grid-cols-1 gap-5 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "UserName",
                        id: "UserName",
                        register: register,
                        errors: errors.UserName,
                        label: "UserName",
                        Placeholder: "Enter username"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "email",
                        id: "email",
                        name: "email",
                        register: register,
                        errors: errors.email,
                        label: "Email",
                        Placeholder: "example@gmail.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "password",
                        id: "password",
                        type: "password",
                        register: register,
                        errors: errors.password,
                        label: "Password",
                        Placeholder: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "self-start text-sm font-semibold text-gray-500",
                children: "Personal Info"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 grid-cols-1 gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "FirstName",
                        id: "FirstName",
                        register: register,
                        errors: errors.FirstName,
                        label: "First Name",
                        Placeholder: "First name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "LastName",
                        id: "LastName",
                        register: register,
                        errors: errors.LastName,
                        label: "Last Name",
                        Placeholder: "Last name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "number",
                        name: "phoneNumber",
                        id: "phoneNumber",
                        register: register,
                        errors: errors.phoneNumber,
                        label: "Phone",
                        Placeholder: "Phone number"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "Address",
                        id: "Address",
                        register: register,
                        errors: errors.Address,
                        label: "Address",
                        Placeholder: "Address"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "MatriculeNo",
                        id: "MatriculeNo",
                        register: register,
                        errors: errors.MatriculeNo,
                        label: "Matricule N°",
                        Placeholder: "MatriculeNo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "date",
                        name: "dateOfBirth",
                        id: "dateOfBirth",
                        register: register,
                        errors: errors.dateOfBirth,
                        label: "Date of Birth",
                        Placeholder: "Date of birth"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sex",
                                children: "Gender"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "h-[40px] border-2 border-amber-100 w-full p-2",
                                ...register("sex"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Sex"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 253,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Male",
                                        children: "Male"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 254,
                                        columnNumber: 12
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Female",
                                        children: "Female"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 255,
                                        columnNumber: 12
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            errors.sex?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-red-600 font-light",
                                children: errors.sex?.message.toString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: "number",
                        name: "age",
                        id: "age",
                        register: register,
                        errors: errors.age,
                        label: "Age",
                        Placeholder: "Age"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 263,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    type === "Update" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "hidden",
                        ...register("id"),
                        value: data?.id
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 274,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:col-start-3 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "department",
                                        children: "Department"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "department",
                                        ...register("department"),
                                        className: "h-[40px] border-2 border-amber-100 w-full p-2",
                                        defaultValue: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "Select department"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            departments.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: d.id,
                                                    children: d.name
                                                }, d.id, false, {
                                                    fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    errors.department && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-red-500",
                                        children: errors.department.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "image",
                                        className: "flex items-center gap-2 cursor-pointer p-2",
                                        children: [
                                            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: preview,
                                                alt: "Preview",
                                                width: 40,
                                                height: 40,
                                                className: "mt-2 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/upload.png",
                                                alt: "Upload icon",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Upload Image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "image",
                                        type: "file",
                                        className: "hidden",
                                        onChange: handleFileChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-sm w-full text-white",
                children: type === "Create" ? "Create" : "Update"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            state.errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "Try again something went wrong!."
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 342,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = StudentsForms;
}),
"[project]/src/components/Forms/StusdentForm.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Forms/StusdentForm.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=src_853250bb._.js.map