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
"[project]/src/components/Forms/ PerantsForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    UserName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be at most 20 characters long'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email({
        message: 'Invalid email address'
    }),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(4, {
        message: 'Password must be at least 4 characters long'
    }).max(8, {
        message: 'Password must be at most 8 characters long'
    }),
    FirstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'First Name must be at least 1 character long'
    }),
    LastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'Last Name must be at least 1 character long'
    }),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(9, {
        message: 'Phone Number must be at least 10 characters long'
    }).max(15, {
        message: 'Phone Number must be at most 15 characters long'
    }),
    sex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'male',
        'female'
    ], {
        message: 'sex is required'
    }),
    age: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(22, {
        message: 'Age must be at least 22'
    }),
    img: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].instanceof(File, {
        message: 'Image is required'
    }),
    Address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, {
        message: 'Address must be at least 5 characters long'
    }).max(15, {
        message: 'Address must be at most 15 characters long'
    }),
    studentName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'Student Name is required'
    }),
    BloodType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'Blood Type is required'
    }),
    dateOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date()
});
const StudentsForms = (param)=>{
    let { type, data } = param;
    var _errors_sex, _errors_sex1;
    _s();
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(schema)
    });
    const SubmiteData = handleSubmit((data)=>{});
    return(/*  This form should be validated if and only there  the perant have a student in the school with a 
             proof of the student name */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col p-2 lg:p-4 justify-center items-center gap-4 ",
        onSubmit: SubmiteData,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold self-start",
                children: [
                    type === "Create" ? "Create A New" : "Update",
                    " Parent"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-gray-500 self-start tex-sm font-semibold",
                children: "Authentification info"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 73,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "UserName",
                        id: "UserName",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.UserName,
                        errors: errors.UserName,
                        label: "UserName",
                        Placeholder: "Enter username"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "email",
                        id: "email",
                        name: "email",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.email,
                        errors: errors.email,
                        label: "Email",
                        Placeholder: "example@gmail.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "password",
                        id: "password",
                        type: "password",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.password,
                        errors: errors.password,
                        label: "Password",
                        Placeholder: " password"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 74,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-semibold text-sm  text-gray-500  self-start",
                children: "Proofs of the student in the school"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 108,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "text",
                    name: "studentName",
                    id: "studentName",
                    register: register,
                    Defaultvalue: data === null || data === void 0 ? void 0 : data.studentName,
                    errors: errors.studentName,
                    label: "Student Name",
                    Placeholder: "Enter student name"
                }, void 0, false, {
                    fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 111,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "self-start text-sm font-semibold text-gray-500",
                children: "personal Info"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 122,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 grid-cols-1 gap-4 justify-between  items-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "FirstName",
                        id: "FirstName",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.FirstName,
                        errors: errors.FirstName,
                        label: "First Name",
                        Placeholder: " first name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "LastName",
                        id: "LastName",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.LastName,
                        errors: errors.LastName,
                        label: "Last Name",
                        Placeholder: " last name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "number",
                        name: "phoneNumber",
                        id: "phoneNumber",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.phoneNumber,
                        errors: errors.phoneNumber,
                        label: "Phone",
                        Placeholder: " phone number"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "Address",
                        id: "Address",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.Address,
                        errors: errors.Address,
                        label: "Address",
                        Placeholder: " address"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "text",
                        name: "BloodType",
                        id: "BloodType",
                        register: register,
                        Defaultvalue: data === null || data === void 0 ? void 0 : data.BloodType,
                        errors: errors.BloodType,
                        label: "Blood type",
                        Placeholder: "A+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "",
                                children: "Gender"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "h-[40px] border-2 border-amber-100 w-full p-2 ",
                                ...register('sex'),
                                defaultValue: "male",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "male",
                                        children: "Male"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                                        lineNumber: 183,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "female",
                                        children: "Female"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                                        lineNumber: 184,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            ((_errors_sex = errors.sex) === null || _errors_sex === void 0 ? void 0 : _errors_sex.message) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-red-600 font-light",
                                children: (_errors_sex1 = errors.sex) === null || _errors_sex1 === void 0 ? void 0 : _errors_sex1.message.toString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                                lineNumber: 186,
                                columnNumber: 35
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:col-start-3 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 124,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white",
                children: type === "Create" ? "Create" : "Update"
            }, void 0, false, {
                fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
                lineNumber: 193,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Forms/ PerantsForm.tsx",
        lineNumber: 70,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(StudentsForms, "RYZPTseqfOWwG22SG5Bo6h4cS4k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
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
"[project]/src/components/Forms/ PerantsForm.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Forms/ PerantsForm.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_810b8882._.js.map