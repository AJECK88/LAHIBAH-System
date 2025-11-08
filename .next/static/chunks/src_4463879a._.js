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
    teachers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()).nonempty("Select at least one teacher")
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
    age: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].number().min(22, {
        message: 'Age must be at least 22'
    }),
    TeacherID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(4, {
        message: 'TeacherID must be at most 10 characters long'
    }),
    Address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(5, {
        message: 'Address must be at least 5 characters long'
    }).max(15, {
        message: 'Address must be at most 15 characters long'
    }),
    BloodType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().min(1, {
        message: 'required'
    })
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:c07235 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f77f5b68156b46a2b93dcfa75fbb6cee1de3d8eb6":"CreatStudent"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "CreatStudent",
    ()=>CreatStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var CreatStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f77f5b68156b46a2b93dcfa75fbb6cee1de3d8eb6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "CreatStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IFByaXNtYX0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBpZCwgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBhbnkgfSBmcm9tIFwiem9kL3Y0LW1pbmlcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycy5tYXAoKHRlYWNoZXJJZDogc3RyaW5nKSA9PiAoeyBpZDogdGVhY2hlcklkIH0pKSxcbiAgICAgICAgIH1cbiAgICAgfVxuICAgfSk7XG4vKiAgICByZXZhbGlkYXRlUGF0aChcIiAvbGlzdC9jb3Vyc2VzXCIpICovXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcblxuICB9XG5cbn07XG5leHBvcnQgY29uc3QgVXBkYXRlQ291cnNlID0gYXN5bmMgKFxuICBjdXJyZW50U3RhdGU6IGN1cnJlbnRTdGF0ZSxcbiAgZGF0YTogQ291cnNlU2NoZW1hXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IE51bWJlcihkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEuQ291cnNlTmFtZSxcbiAgICAgICAgdGVhY2hlcnM6IHtcbiAgICAgICAgICBzZXQ6IFtdLFxuICAgICAgICAgIGNvbm5lY3Q6IGRhdGEudGVhY2hlcnMubWFwKChpZDogc3RyaW5nKSA9PiAoeyBpZCB9KSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IGRlbGV0Q291cnNlID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IHBhcnNlSW50KGlkKSxcbiAgICAgfVxuICAgfSk7XG4gICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cblxufSAvKiB8fCBFbmQgKi8gXG5cbiAgLyogfHwgc3R1ZGVudCBzZWN0aW9uIHRvIHVwZGF0ZSAsIGNyZWF0ZSBhbmQgZGVsZXRlICovXG4gZXhwb3J0IGNvbnN0ICBDcmVhdFN0dWRlbnQgPSBhc3luYyggY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUsIGRhdGE6U3R1ZGVudFNjaGVtYSkgID0+eyAgXG4gIHRyeXtcbiAgICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmNyZWF0ZSh7XG4gICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gICAgfVxuIH1cbiBleHBvcnQgY29uc3QgZGVsZXRlU3R1ZGVudCA9IGFzeW5jKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICBkYXRhIDogRm9ybURhdGFcbik9PntcbiAgY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmRlbGV0ZSh7XG4gICAgIHdoZXJlOiB7XG4gICAgIGlkOiAoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICBjb25zb2xlLmxvZyhcImdvb2QgdG8gZ29cIilcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0ICBVcGRhdGVTdHVkZW50ID0gYXN5bmMoIFxuICBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSAsIFxuICBkYXRhIDpTdHVkZW50U2NoZW1hXG5cblxuKT0+e1xuICAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogKGRhdGEuaWQpLFxuICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG4vKiB8fCBlbmQgKi9cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVJBa0ZlIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:838b0e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7ffcce5cc34b3e34c4f76b15b416fd791b8f2ef2a5":"UpdateStudent"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "UpdateStudent",
    ()=>UpdateStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var UpdateStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7ffcce5cc34b3e34c4f76b15b416fd791b8f2ef2a5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UpdateStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IFByaXNtYX0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBpZCwgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBhbnkgfSBmcm9tIFwiem9kL3Y0LW1pbmlcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycy5tYXAoKHRlYWNoZXJJZDogc3RyaW5nKSA9PiAoeyBpZDogdGVhY2hlcklkIH0pKSxcbiAgICAgICAgIH1cbiAgICAgfVxuICAgfSk7XG4vKiAgICByZXZhbGlkYXRlUGF0aChcIiAvbGlzdC9jb3Vyc2VzXCIpICovXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcblxuICB9XG5cbn07XG5leHBvcnQgY29uc3QgVXBkYXRlQ291cnNlID0gYXN5bmMgKFxuICBjdXJyZW50U3RhdGU6IGN1cnJlbnRTdGF0ZSxcbiAgZGF0YTogQ291cnNlU2NoZW1hXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IE51bWJlcihkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEuQ291cnNlTmFtZSxcbiAgICAgICAgdGVhY2hlcnM6IHtcbiAgICAgICAgICBzZXQ6IFtdLFxuICAgICAgICAgIGNvbm5lY3Q6IGRhdGEudGVhY2hlcnMubWFwKChpZDogc3RyaW5nKSA9PiAoeyBpZCB9KSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IGRlbGV0Q291cnNlID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IHBhcnNlSW50KGlkKSxcbiAgICAgfVxuICAgfSk7XG4gICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cblxufSAvKiB8fCBFbmQgKi8gXG5cbiAgLyogfHwgc3R1ZGVudCBzZWN0aW9uIHRvIHVwZGF0ZSAsIGNyZWF0ZSBhbmQgZGVsZXRlICovXG4gZXhwb3J0IGNvbnN0ICBDcmVhdFN0dWRlbnQgPSBhc3luYyggY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUsIGRhdGE6U3R1ZGVudFNjaGVtYSkgID0+eyAgXG4gIHRyeXtcbiAgICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmNyZWF0ZSh7XG4gICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gICAgfVxuIH1cbiBleHBvcnQgY29uc3QgZGVsZXRlU3R1ZGVudCA9IGFzeW5jKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICBkYXRhIDogRm9ybURhdGFcbik9PntcbiAgY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmRlbGV0ZSh7XG4gICAgIHdoZXJlOiB7XG4gICAgIGlkOiAoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICBjb25zb2xlLmxvZyhcImdvb2QgdG8gZ29cIilcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0ICBVcGRhdGVTdHVkZW50ID0gYXN5bmMoIFxuICBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSAsIFxuICBkYXRhIDpTdHVkZW50U2NoZW1hXG5cblxuKT0+e1xuICAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogKGRhdGEuaWQpLFxuICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG4vKiB8fCBlbmQgKi9cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFJBZ0ljIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Forms/StusdentForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$FormValidationSchima$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/FormValidationSchima.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$c07235__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:c07235 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$838b0e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:838b0e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
/**
 * ✅ StudentsForms Component
 * Handles both creation and updating of student data.
 * Includes form validation using Zod + React Hook Form.
 */ const StudentsForms = (param)=>{
    let { type, data, SetOpen, relatedData } = param;
    var _errors_sex, _errors_sex1;
    _s();
    const Router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    /**
   * 🎯 Initialize form handling with zod validation
   */ const { register, reset, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$FormValidationSchima$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentSchma"])
    });
    /**
   * 📦 Preview image state
   */ const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   *  Handle file input change for previewing uploaded image
   */ const handleFileChange = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };
    /**
   * 🔁 When updating, pre-fill the form with existing data
   */ /* || Using react Formaction to check if the form is sumited  */ const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(type === "Create" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$c07235__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["CreatStudent"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$838b0e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateStudent"], {
        successMessage: false,
        errorMessage: false
    });
    /**
   * 📁 Handle form submission (stub)
   * This can be extended to send data to your backend.
   */ const onSubmit = handleSubmit((formData)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            formAction(formData);
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentsForms.useEffect": ()=>{
            if (state.successMessage) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Sudent has been ".concat(type === "Create" ? "created" : "updated", " successfully"), {
                    type: "success"
                });
                SetOpen(false);
                Router.refresh();
            }
        }
    }["StudentsForms.useEffect"], [
        state,
        type,
        Router,
        SetOpen
    ]);
    var _relatedData_departments;
    /**
   *  Extract department list from relatedData (fallback to empty)
   */ const departments = (_relatedData_departments = relatedData === null || relatedData === void 0 ? void 0 : relatedData.departments) !== null && _relatedData_departments !== void 0 ? _relatedData_departments : [];
    /* || Updating the form default when editing data changes */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentsForms.useEffect": ()=>{
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
        }
    }["StudentsForms.useEffect"], [
        data,
        type,
        reset
    ]);
    /**
   * JSX Render
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col p-2 lg:p-4 justify-center items-center gap-4",
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-gray-500 self-start text-sm font-semibold",
                children: "Authentication Info"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 grid-cols-1 gap-5 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "self-start text-sm font-semibold text-gray-500",
                children: "Personal Info"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 grid-cols-1 gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sex",
                                children: "Gender"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "h-[40px] border-2 border-amber-100 w-full p-2",
                                ...register("sex"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Sex"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 253,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Male",
                                        children: "Male"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 254,
                                        columnNumber: 12
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            ((_errors_sex = errors.sex) === null || _errors_sex === void 0 ? void 0 : _errors_sex.message) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-red-600 font-light",
                                children: (_errors_sex1 = errors.sex) === null || _errors_sex1 === void 0 ? void 0 : _errors_sex1.message.toString()
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    type === "Update" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "hidden",
                        ...register("id"),
                        value: data === null || data === void 0 ? void 0 : data.id
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                        lineNumber: 274,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:col-start-3 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "department",
                                        children: "Department"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "department",
                                        ...register("department"),
                                        className: "h-[40px] border-2 border-amber-100 w-full p-2",
                                        defaultValue: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "Select department"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            departments.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                    errors.department && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "image",
                                        className: "flex items-center gap-2 cursor-pointer p-2",
                                        children: [
                                            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: preview,
                                                alt: "Preview",
                                                width: 40,
                                                height: 40,
                                                className: "mt-2 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/upload.png",
                                                alt: "Upload icon",
                                                width: 40,
                                                height: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-sm w-full text-white",
                children: type === "Create" ? "Create" : "Update"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/StusdentForm.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            state.errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(StudentsForms, "mvYjrTk/WI0Lu/JoXwaOd5AXT4E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = StudentsForms;
const __TURBOPACK__default__export__ = StudentsForms;
var _c;
__turbopack_context__.k.register(_c, "StudentsForms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Forms/StusdentForm.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Forms/StusdentForm.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_4463879a._.js.map