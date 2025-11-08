(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Input = (param)=>{
    let { type, register, errors, name, label, id, hidden, inputProps, Placeholder } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "".concat(hidden ? 'hidden' : ""),
        htmlFor: id,
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/components/input.tsx",
                lineNumber: 22,
                columnNumber: 73
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            (errors === null || errors === void 0 ? void 0 : errors.message) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-red-600 font-light",
                children: errors === null || errors === void 0 ? void 0 : errors.message.toString()
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
_c = Input;
const __TURBOPACK__default__export__ = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/FormValidationSchima.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courseSchema",
    ()=>courseSchema,
    "studentSchma",
    ()=>studentSchma,
    "teacherSchema",
    ()=>teacherSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/index.js [app-client] (ecmascript) <locals>");
;
const courseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].number().optional(),
    CourseName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be at most 20 characters long'
    }),
    teachers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()).optional()
});
const studentSchma = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    UserName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be at most 20 characters long'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().email({
        message: 'Invalid email address'
    }),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(4, {
        message: 'Password must be at least 4 characters long'
    }).max(8, {
        message: 'Password must be at most 8 characters long'
    }),
    FirstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'First Name must be at least 1 character long'
    }),
    LastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'Last Name must be at least 1 character long'
    }),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().regex(/^\d{9}$/, {
        message: "Invalid phone number"
    }).min(9, {
        message: 'Phone Number must be at least 10 characters long'
    }).max(15, {
        message: 'Phone Number must be at most 15 characters long'
    }),
    sex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].enum([
        'Male',
        'Female'
    ], {
        message: 'sex is required'
    }),
    age: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(2, {
        message: 'Age must be at least 16'
    }),
    MatriculeNo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
    department: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: "Department is requird"
    }),
    Address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(5, {
        message: 'Address must be at least 5 characters long'
    }).max(15, {
        message: 'Address must be at most 15 characters long'
    }),
    dateOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().refine((val)=>!isNaN(Date.parse(val)), {
        message: "Invalid date"
    }),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional()
});
const teacherSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    UserName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be at most 20 characters long'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().email({
        message: 'Invalid email address'
    }),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(4, {
        message: 'Password must be at least 4 characters long'
    }).max(8, {
        message: 'Password must be at most 8 characters long'
    }),
    FirstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'First Name must be at least 1 character long'
    }),
    Courses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()).optional(),
    LastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'Last Name must be at least 1 character long'
    }),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(9, {
        message: 'Phone Number must be at least 10 characters long'
    }).max(15, {
        message: 'Phone Number must be at most 15 characters long'
    }),
    sex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].enum([
        'Male',
        'Female'
    ], {
        message: 'sex is required'
    }),
    teachersId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(4, {
        message: 'TeacherID must be at most 10 characters long'
    }),
    Address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(5, {
        message: 'Address must be at least 5 characters long'
    }).max(15, {
        message: 'Address must be at most 15 characters long'
    }),
    BloodType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'required'
    }),
    dateOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().refine((val)=>!isNaN(Date.parse(val)), {
        message: "Invalid date"
    }),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:3b4a98 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f377155bc56bba58e2e89f23de9327f0d9e537c1a":"CreateCourse"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "CreateCourse",
    ()=>CreateCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var CreateCourse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f377155bc56bba58e2e89f23de9327f0d9e537c1a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "CreateCourse"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSBcImNvbnNvbGVcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycz8ubWFwKCh0ZWFjaGVySWQ6IHN0cmluZykgPT4gKHsgaWQ6IHRlYWNoZXJJZCB9KSksXG4gICAgICAgICB9XG4gICAgIH1cbiAgIH0pO1xuLyogICAgcmV2YWxpZGF0ZVBhdGgoXCIgL2xpc3QvY291cnNlc1wiKSAqL1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcblxuICB9IGNhdGNoKGVycm9yKXtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG5cbiAgfVxuXG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvdXJzZSA9IGFzeW5jIChcbiAgY3VycmVudFN0YXRlOiBjdXJyZW50U3RhdGUsXG4gIGRhdGE6IENvdXJzZVNjaGVtYVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnN1YmplY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIoZGF0YS5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgIHRlYWNoZXJzOiB7XG4gICAgICAgICAgc2V0OiBbXSxcbiAgICAgICAgICBjb25uZWN0OiBkYXRhLnRlYWNoZXJzPy5tYXAoKGlkOiBzdHJpbmcpID0+ICh7IGlkIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG5cblxuXG5leHBvcnQgY29uc3QgZGVsZXRDb3Vyc2UgPSBhc3luYyhcbiAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgZGF0YSA6IEZvcm1EYXRhXG4pPT57XG4gIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC5kZWxldGUoe1xuICAgICB3aGVyZToge1xuICAgICBpZDogcGFyc2VJbnQoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxuXG59IC8qIHx8IEVuZCAqLyBcblxuICAvKiB8fCBzdHVkZW50IHNlY3Rpb24gdG8gdXBkYXRlICwgY3JlYXRlIGFuZCBkZWxldGUgKi9cbiBleHBvcnQgY29uc3QgIENyZWF0U3R1ZGVudCA9IGFzeW5jKCBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSwgZGF0YTpTdHVkZW50U2NoZW1hKSAgPT57ICBcbiAgdHJ5e1xuICAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgYWdlOk51bWJlcihkYXRhLmFnZSksXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgRGF0ZU9mQmlydGg6bmV3IERhdGUoZGF0YS5kYXRlT2ZCaXJ0aCksXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICBtYXRyaWN1bGU6ZGF0YS5NYXRyaWN1bGVObyxcbiAgICAgICAgIGRlcGFydG1lbnQ6e1xuICAgICAgICAgICBjb25uZWN0OntpZDpkYXRhLmRlcGFydG1lbnR9XG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgICB9XG4gfVxuIGV4cG9ydCBjb25zdCBkZWxldGVTdHVkZW50ID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IChpZCksXG4gICAgIH1cbiAgIH0pO1xuICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cbn1cbmV4cG9ydCBjb25zdCAgVXBkYXRlU3R1ZGVudCA9IGFzeW5jKCBcbiAgY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUgLCBcbiAgZGF0YSA6U3R1ZGVudFNjaGVtYVxuXG5cbik9PntcbiAgIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IChkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBhZ2U6TnVtYmVyKGRhdGEuYWdlKSxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBEYXRlT2ZCaXJ0aDpuZXcgRGF0ZShkYXRhLmRhdGVPZkJpcnRoKSxcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIG1hdHJpY3VsZTpkYXRhLk1hdHJpY3VsZU5vLFxuICAgICAgICAgZGVwYXJ0bWVudDp7XG4gICAgICAgICAgIGNvbm5lY3Q6e2lkOmRhdGEuZGVwYXJ0bWVudH1cbiAgICAgICAgIH0gXG4gICAgICAgICBcbiAgICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuLyogfHwgZW5kICovXG4vKiB8fCBUZWFjaGVyIHNlY3Rpb24gdG8gY3JlYXRlICwgdXBkYXRlIGFuZCBkZWxldGUgKi9cbmV4cG9ydCBjb25zdCBDcmVhdFRlYWNoZSA9IGFzeW5jKGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlICwgZGF0YTpUZWFjaGVyU2NoZW1hKT0+e1xuICB0cnkge1xuICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIHRlYWNoZXJzSWQgIDpkYXRhLnRlYWNoZXJzSWQsXG4gICAgICAgICBjb3Vyc2VzOntcbiAgICAgICAgICAgY29ubmVjdDogZGF0YS5Db3Vyc2VzLm1hcCgoY291cnNlSWQ6YW55KSA9PiAoeyBpZDogY291cnNlSWQgfSkpLFxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVhY2hlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgICAgIGNhdGNoKGVycm9yKXsgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0ZWFjaGVyOlwiLCBlcnJvcik7ICBcbiAgICAgICAgcmV0dXJuKCB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfSApOyAgIFxuICAgICAgIH1cbiAgICBcbn1cbmV4cG9ydCBjb25zdCBVcGRhdGVUZWFjaGUgPSBhc3luYyAoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGVcbiAgLCBkYXRhOlRlYWNoZXJTY2hlbWFcblxuKSA9PntcbiAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTp7XG4gICAgICAgIGlkOihkYXRhLmlkKVxuICAgICAgfSxcbiAgICAgIGRhdGE6e1xuICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICB0ZWFjaGVyc0lkICA6ZGF0YS50ZWFjaGVyc0lkLFxuICAgICAgICAgY291cnNlczp7XG4gICAgICAgICAgIGNvbm5lY3Q6IGRhdGEuQ291cnNlcy5tYXAoKGNvdXJzZUlkOmFueSkgPT4gKHsgaWQ6IGNvdXJzZUlkIH0pKSxcbiAgICAgICAgIH0gXG5cbiAgICAgIH1cbiAgICAgIFxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgfVxuICAgICAgICBjYXRjaChlcnJvcil7ICBcbiAgICAgICAgcmV0dXJuKCB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfSApOyAgIFxuICAgICAgIH0gIFxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlVGVhY2hlciA9IGFzeW5jKFxuICAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgICBkYXRhOkZvcm1EYXRhXG4pPT57XG4gIGNvbnNvbGUubG9nKFwiZGVsZXRpbmcgdGVhY2hlciB3aXRoIGRhdGE6XCIsIGRhdGEpO1xuIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLmRlbGV0ZSh7XG4gICAgICB3aGVyZTp7XG4gICAgICAgIGlkOihpZClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybnsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZX1cbiAgfSBcbiBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybnsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZVxuIH1cbn1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlSQWFjIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:9b882f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f97979004df04e563b688357595c32966dfb8cfdf":"UpdateCourse"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "UpdateCourse",
    ()=>UpdateCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var UpdateCourse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f97979004df04e563b688357595c32966dfb8cfdf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UpdateCourse"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSBcImNvbnNvbGVcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycz8ubWFwKCh0ZWFjaGVySWQ6IHN0cmluZykgPT4gKHsgaWQ6IHRlYWNoZXJJZCB9KSksXG4gICAgICAgICB9XG4gICAgIH1cbiAgIH0pO1xuLyogICAgcmV2YWxpZGF0ZVBhdGgoXCIgL2xpc3QvY291cnNlc1wiKSAqL1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcblxuICB9IGNhdGNoKGVycm9yKXtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG5cbiAgfVxuXG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvdXJzZSA9IGFzeW5jIChcbiAgY3VycmVudFN0YXRlOiBjdXJyZW50U3RhdGUsXG4gIGRhdGE6IENvdXJzZVNjaGVtYVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnN1YmplY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIoZGF0YS5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgIHRlYWNoZXJzOiB7XG4gICAgICAgICAgc2V0OiBbXSxcbiAgICAgICAgICBjb25uZWN0OiBkYXRhLnRlYWNoZXJzPy5tYXAoKGlkOiBzdHJpbmcpID0+ICh7IGlkIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG5cblxuXG5leHBvcnQgY29uc3QgZGVsZXRDb3Vyc2UgPSBhc3luYyhcbiAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgZGF0YSA6IEZvcm1EYXRhXG4pPT57XG4gIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC5kZWxldGUoe1xuICAgICB3aGVyZToge1xuICAgICBpZDogcGFyc2VJbnQoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxuXG59IC8qIHx8IEVuZCAqLyBcblxuICAvKiB8fCBzdHVkZW50IHNlY3Rpb24gdG8gdXBkYXRlICwgY3JlYXRlIGFuZCBkZWxldGUgKi9cbiBleHBvcnQgY29uc3QgIENyZWF0U3R1ZGVudCA9IGFzeW5jKCBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSwgZGF0YTpTdHVkZW50U2NoZW1hKSAgPT57ICBcbiAgdHJ5e1xuICAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgYWdlOk51bWJlcihkYXRhLmFnZSksXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgRGF0ZU9mQmlydGg6bmV3IERhdGUoZGF0YS5kYXRlT2ZCaXJ0aCksXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICBtYXRyaWN1bGU6ZGF0YS5NYXRyaWN1bGVObyxcbiAgICAgICAgIGRlcGFydG1lbnQ6e1xuICAgICAgICAgICBjb25uZWN0OntpZDpkYXRhLmRlcGFydG1lbnR9XG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgICB9XG4gfVxuIGV4cG9ydCBjb25zdCBkZWxldGVTdHVkZW50ID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN0dWRlbnQuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IChpZCksXG4gICAgIH1cbiAgIH0pO1xuICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cbn1cbmV4cG9ydCBjb25zdCAgVXBkYXRlU3R1ZGVudCA9IGFzeW5jKCBcbiAgY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUgLCBcbiAgZGF0YSA6U3R1ZGVudFNjaGVtYVxuXG5cbik9PntcbiAgIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IChkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBhZ2U6TnVtYmVyKGRhdGEuYWdlKSxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBEYXRlT2ZCaXJ0aDpuZXcgRGF0ZShkYXRhLmRhdGVPZkJpcnRoKSxcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIG1hdHJpY3VsZTpkYXRhLk1hdHJpY3VsZU5vLFxuICAgICAgICAgZGVwYXJ0bWVudDp7XG4gICAgICAgICAgIGNvbm5lY3Q6e2lkOmRhdGEuZGVwYXJ0bWVudH1cbiAgICAgICAgIH0gXG4gICAgICAgICBcbiAgICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuLyogfHwgZW5kICovXG4vKiB8fCBUZWFjaGVyIHNlY3Rpb24gdG8gY3JlYXRlICwgdXBkYXRlIGFuZCBkZWxldGUgKi9cbmV4cG9ydCBjb25zdCBDcmVhdFRlYWNoZSA9IGFzeW5jKGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlICwgZGF0YTpUZWFjaGVyU2NoZW1hKT0+e1xuICB0cnkge1xuICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIHRlYWNoZXJzSWQgIDpkYXRhLnRlYWNoZXJzSWQsXG4gICAgICAgICBjb3Vyc2VzOntcbiAgICAgICAgICAgY29ubmVjdDogZGF0YS5Db3Vyc2VzLm1hcCgoY291cnNlSWQ6YW55KSA9PiAoeyBpZDogY291cnNlSWQgfSkpLFxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVhY2hlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgICAgIGNhdGNoKGVycm9yKXsgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0ZWFjaGVyOlwiLCBlcnJvcik7ICBcbiAgICAgICAgcmV0dXJuKCB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfSApOyAgIFxuICAgICAgIH1cbiAgICBcbn1cbmV4cG9ydCBjb25zdCBVcGRhdGVUZWFjaGUgPSBhc3luYyAoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGVcbiAgLCBkYXRhOlRlYWNoZXJTY2hlbWFcblxuKSA9PntcbiAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTp7XG4gICAgICAgIGlkOihkYXRhLmlkKVxuICAgICAgfSxcbiAgICAgIGRhdGE6e1xuICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBzZXg6ZGF0YS5zZXgsXG4gICAgICAgICB0ZWFjaGVyc0lkICA6ZGF0YS50ZWFjaGVyc0lkLFxuICAgICAgICAgY291cnNlczp7XG4gICAgICAgICAgIGNvbm5lY3Q6IGRhdGEuQ291cnNlcy5tYXAoKGNvdXJzZUlkOmFueSkgPT4gKHsgaWQ6IGNvdXJzZUlkIH0pKSxcbiAgICAgICAgIH0gXG5cbiAgICAgIH1cbiAgICAgIFxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgfVxuICAgICAgICBjYXRjaChlcnJvcil7ICBcbiAgICAgICAgcmV0dXJuKCB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfSApOyAgIFxuICAgICAgIH0gIFxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlVGVhY2hlciA9IGFzeW5jKFxuICAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgICBkYXRhOkZvcm1EYXRhXG4pPT57XG4gIGNvbnNvbGUubG9nKFwiZGVsZXRpbmcgdGVhY2hlciB3aXRoIGRhdGE6XCIsIGRhdGEpO1xuIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLmRlbGV0ZSh7XG4gICAgICB3aGVyZTp7XG4gICAgICAgIGlkOihpZClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybnsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZX1cbiAgfSBcbiBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybnsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZVxuIH1cbn1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlSQWdDYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Forms/Courseform.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$FormValidationSchima$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/FormValidationSchima.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$3b4a98__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:3b4a98 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$9b882f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:9b882f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const CourseForm = (param)=>{
    let { type, data, SetOpen, relatedData } = param;
    var _data_teachers;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setValue, register, handleSubmit, reset, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$FormValidationSchima$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["courseSchema"])
    });
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(type === 'Create' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$3b4a98__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["CreateCourse"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$9b882f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateCourse"], {
        successMessage: false,
        errorMessage: false
    });
    const onSubmit = handleSubmit((formData)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            formAction(formData);
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourseForm.useEffect": ()=>{
            if (state.successMessage) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Course has been ".concat(type === "Create" ? "created" : "updated", " successfully"), {
                    type: "success"
                });
                SetOpen(false);
                router.refresh();
            }
        }
    }["CourseForm.useEffect"], [
        state,
        type,
        router,
        SetOpen
    ]);
    // Update the form defaults when editing data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourseForm.useEffect": ()=>{
            if (type === "Update" && data) {
                var _data_teachers;
                reset({
                    CourseName: data.name,
                    id: data.id,
                    teachers: ((_data_teachers = data.teachers) === null || _data_teachers === void 0 ? void 0 : _data_teachers.map({
                        "CourseForm.useEffect": (t)=>t.id
                    }["CourseForm.useEffect"])) || []
                });
            }
        }
    }["CourseForm.useEffect"], [
        data,
        type,
        reset
    ]);
    var _relatedData_teachers;
    const teachers = (_relatedData_teachers = relatedData === null || relatedData === void 0 ? void 0 : relatedData.teachers) !== null && _relatedData_teachers !== void 0 ? _relatedData_teachers : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col p-2 lg:p-4 justify-center items-center gap-4",
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold self-start",
                children: [
                    type === "Create" ? "Create a New" : "Update",
                    " Course"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/Courseform.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-gray-500 self-start text-sm font-semibold",
                children: "Course Info"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/Courseform.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "CourseName",
                        id: "CourseName",
                        register: register,
                        errors: errors.CourseName,
                        label: "Course Name",
                        Placeholder: "Enter Course Name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/Courseform.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "",
                                children: "Teacher"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Forms/Courseform.tsx",
                                lineNumber: 103,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                isMulti: true,
                                styles: {
                                    control: (base)=>({
                                            ...base,
                                            border: "2px solid #fef3c7"
                                        })
                                },
                                options: teachers.map((t)=>({
                                        value: t.id,
                                        label: "".concat(t.firstName, " ").concat(t.lastName)
                                    })),
                                defaultValue: (data === null || data === void 0 ? void 0 : (_data_teachers = data.teachers) === null || _data_teachers === void 0 ? void 0 : _data_teachers.map((t)=>({
                                        value: t.id,
                                        label: "".concat(t.firstName, " ").concat(t.lastName)
                                    }))) || [],
                                onChange: (selected)=>{
                                    setValue("teachers", selected.map((s)=>s.value));
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Forms/Courseform.tsx",
                                lineNumber: 105,
                                columnNumber: 1
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Forms/Courseform.tsx",
                        lineNumber: 102,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/Courseform.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            state.errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "Try again something went wrong!."
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/Courseform.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-sm w-full text-white",
                children: type === "Create" ? "Create" : "Update"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/Courseform.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Forms/Courseform.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CourseForm, "lYTkvhCvYerA3IzM4+QwhhocWJk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = CourseForm;
const __TURBOPACK__default__export__ = CourseForm;
var _c;
__turbopack_context__.k.register(_c, "CourseForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Forms/Courseform.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Forms/Courseform.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_cff5f496._.js.map