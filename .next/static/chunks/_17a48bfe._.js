(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(dashboard)/Settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/Settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Pagination = (param)=>{
    let { page, count } = param;
    _s();
    /* || cheaking if the next is more than it limite and some with the Prov button to disaplay the button */ const length = Math.ceil(count / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Items_Per_Page"]);
    const hasProv = page === 1;
    const hasNext = page >= length;
    /*end*/ const Route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const changePage = (NewPage)=>{
        const Params = new URLSearchParams(window.location.search);
        Params.set("page", NewPage.toString());
        Route.push("".concat(window.location.pathname, "?").concat(Params));
    };
    console.log(length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " pt-4 md:p-1 lg:p-4 flex items-center justify-between text-gray-500 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: hasProv,
                className: "py-2 p-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                onClick: ()=>{
                    changePage(page - 1);
                },
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/src/components/pagination.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 ",
                children: Array.from({
                    length: Math.ceil(count / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Items_Per_Page"])
                }, (_, index)=>{
                    const PageIndex = index + 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-2 py-1 rounded-sm  text-xs font-semibold ".concat(page === PageIndex ? "bg-blue-300" : ""),
                        onClick: ()=>{
                            changePage(PageIndex);
                        },
                        children: PageIndex
                    }, PageIndex, false, {
                        fileName: "[project]/src/components/pagination.tsx",
                        lineNumber: 31,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/pagination.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: hasNext,
                className: "py-2 p-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                onClick: ()=>{
                    changePage(page + 1);
                },
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/pagination.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pagination.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Pagination, "Zd0ptsY80YZHh5Qk8yZo3NKEs5w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TablesearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TableSearchBar = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Use FormData to safely grab the input value
        const formData = new FormData(e.currentTarget);
        const value = formData.get("search");
        const params = new URLSearchParams(window.location.search);
        params.set("search", value);
        router.push("".concat(window.location.pathname, "?").concat(params.toString()));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onKeyUp: handleSubmit,
        className: "flex md:flex items-center justify-start gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/search.png",
                    alt: "search",
                    width: 14,
                    height: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/TablesearchBar.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/TablesearchBar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "search",
                placeholder: "Search...",
                className: "w-[200px] p-2 bg-transparent outline-none"
            }, void 0, false, {
                fileName: "[project]/src/components/TablesearchBar.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TablesearchBar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TableSearchBar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TableSearchBar;
const __TURBOPACK__default__export__ = TableSearchBar;
var _c;
__turbopack_context__.k.register(_c, "TableSearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:5c2927 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f48bf0f5cf48325463aa065f652203ad690e91960":"deletCourse"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "deletCourse",
    ()=>deletCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deletCourse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f48bf0f5cf48325463aa065f652203ad690e91960", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletCourse"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG50eXBlIGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBzdWNjZXNzTWVzc2FnZTpib29sZWFuIDtcbiAgICBlcnJvck1lc3NhZ2U6Ym9vbGVhblxufVxuLyogfHwgQ291cnNlIHNlY3Rpb24gdG8gY3JlYXQgdXBkYXRlIGFuZCBkZWxldGUgKi9cbmV4cG9ydCAgY29uc3QgQ3JlYXRlQ291cnNlID0gIGFzeW5jKCBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSwgZGF0YTogQ291cnNlU2NoZW1hKSAgPT57XG4gIHRyeXsgXG4gICAgIGF3YWl0IHByaXNtYS5zdWJqZWN0LmNyZWF0ZSh7XG4gICAgIGRhdGE6e1xuICAgICAgICAgbmFtZTogZGF0YS5Db3Vyc2VOYW1lLFxuICAgICAgICAgdGVhY2hlcnM6e1xuICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEudGVhY2hlcnMubWFwKCh0ZWFjaGVySWQ6IHN0cmluZykgPT4gKHsgaWQ6IHRlYWNoZXJJZCB9KSksXG4gICAgICAgICB9XG4gICAgIH1cbiAgIH0pO1xuLyogICAgcmV2YWxpZGF0ZVBhdGgoXCIgL2xpc3QvY291cnNlc1wiKSAqL1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcblxuICB9IGNhdGNoKGVycm9yKXtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG5cbiAgfVxuXG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvdXJzZSA9IGFzeW5jIChcbiAgY3VycmVudFN0YXRlOiBjdXJyZW50U3RhdGUsXG4gIGRhdGE6IENvdXJzZVNjaGVtYVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnN1YmplY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIoZGF0YS5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgIHRlYWNoZXJzOiB7XG4gICAgICAgICAgc2V0OiBbXSxcbiAgICAgICAgICBjb25uZWN0OiBkYXRhLnRlYWNoZXJzLm1hcCgoaWQ6IHN0cmluZykgPT4gKHsgaWQgfSkpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiB0cnVlLCBlcnJvck1lc3NhZ2U6IGZhbHNlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IHRydWUgfTtcbiAgfVxufTtcblxuXG5cbmV4cG9ydCBjb25zdCBkZWxldENvdXJzZSA9IGFzeW5jKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICBkYXRhIDogRm9ybURhdGFcbik9PntcbiAgY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgIGF3YWl0IHByaXNtYS5zdWJqZWN0LmRlbGV0ZSh7XG4gICAgIHdoZXJlOiB7XG4gICAgIGlkOiBwYXJzZUludChpZCksXG4gICAgIH1cbiAgIH0pO1xuICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuIFxuICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9O1xuICB9XG5cbn0gLyogfHwgRW5kICovIFxuXG4gIC8qIHx8IHN0dWRlbnQgc2VjdGlvbiB0byB1cGRhdGUgLCBjcmVhdGUgYW5kIGRlbGV0ZSAqL1xuIGV4cG9ydCBjb25zdCAgQ3JlYXRTdHVkZW50ID0gYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOlN0dWRlbnRTY2hlbWEpICA9PnsgIFxuICB0cnl7XG4gICAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC5jcmVhdGUoe1xuICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBhZ2U6TnVtYmVyKGRhdGEuYWdlKSxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBEYXRlT2ZCaXJ0aDpuZXcgRGF0ZShkYXRhLmRhdGVPZkJpcnRoKSxcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIG1hdHJpY3VsZTpkYXRhLk1hdHJpY3VsZU5vLFxuICAgICAgICAgZGVwYXJ0bWVudDp7XG4gICAgICAgICAgIGNvbm5lY3Q6e2lkOmRhdGEuZGVwYXJ0bWVudH1cbiAgICAgICAgIH0gXG4gICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfSkgXG4gICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuICAgIH1cbiAgICBjYXRjaChlcnJvcil7XG4gICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9O1xuICAgIH1cbiB9XG4gZXhwb3J0IGNvbnN0IGRlbGV0ZVN0dWRlbnQgPSBhc3luYyhcbiAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgZGF0YSA6IEZvcm1EYXRhXG4pPT57XG4gIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC5kZWxldGUoe1xuICAgICB3aGVyZToge1xuICAgICBpZDogKGlkKSxcbiAgICAgfVxuICAgfSk7XG4gICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG5cbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0ICBVcGRhdGVTdHVkZW50ID0gYXN5bmMoIFxuICBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSAsIFxuICBkYXRhIDpTdHVkZW50U2NoZW1hXG5cblxuKT0+e1xuICAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogKGRhdGEuaWQpLFxuICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG4vKiB8fCBlbmQgKi9cbi8qIHx8IFRlYWNoZXIgc2VjdGlvbiB0byBjcmVhdGUgLCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0IGNvbnN0IENyZWF0VGVhY2hlID0gYXN5bmMoY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUgLCBkYXRhOlRlYWNoZXJTY2hlbWEpPT57XG4gIHRyeSB7XG4gICBhd2FpdCBwcmlzbWEudGVhY2hlci5jcmVhdGUoe1xuICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXMubWFwKChjb3Vyc2VJZDphbnkpID0+ICh7IGlkOiBjb3Vyc2VJZCB9KSksXG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgICAgY2F0Y2goZXJyb3IpeyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9XG4gICAgXG59XG5leHBvcnQgY29uc3QgVXBkYXRlVGVhY2hlID0gYXN5bmMgKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlXG4gICwgZGF0YTpUZWFjaGVyU2NoZW1hXG5cbikgPT57XG4gIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci51cGRhdGUoe1xuICAgICAgd2hlcmU6e1xuICAgICAgICBpZDooZGF0YS5pZClcbiAgICAgIH0sXG4gICAgICBkYXRhOntcbiAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXMubWFwKChjb3Vyc2VJZDphbnkpID0+ICh7IGlkOiBjb3Vyc2VJZCB9KSksXG4gICAgICAgICB9IFxuXG4gICAgICB9XG4gICAgICBcbiAgICB9KTtcbiAgICAgY29uc29sZS5sb2coXCJUZWFjaGVyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgfVxuICAgICAgICBjYXRjaChlcnJvcil7IFxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgdGVhY2hlcjpcIiwgZXJyb3IpOyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9ICBcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRlYWNoZXIgPSBhc3luYyhcbiAgIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gICAgZGF0YTpGb3JtRGF0YVxuKT0+e1xuICBjb25zb2xlLmxvZyhcImRlbGV0aW5nIHRlYWNoZXIgd2l0aCBkYXRhOlwiLCBkYXRhKTtcbiBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5kZWxldGUoe1xuICAgICAgd2hlcmU6e1xuICAgICAgICBpZDooaWQpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm57IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2V9XG4gIH0gXG4gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm57IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWVcbiB9XG59XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkF5RGEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:75ccf4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f6e290e7a4ae1394b99b9b07e1941bacc1529a7ed":"deleteStudent"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "deleteStudent",
    ()=>deleteStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f6e290e7a4ae1394b99b9b07e1941bacc1529a7ed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG50eXBlIGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBzdWNjZXNzTWVzc2FnZTpib29sZWFuIDtcbiAgICBlcnJvck1lc3NhZ2U6Ym9vbGVhblxufVxuLyogfHwgQ291cnNlIHNlY3Rpb24gdG8gY3JlYXQgdXBkYXRlIGFuZCBkZWxldGUgKi9cbmV4cG9ydCAgY29uc3QgQ3JlYXRlQ291cnNlID0gIGFzeW5jKCBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSwgZGF0YTogQ291cnNlU2NoZW1hKSAgPT57XG4gIHRyeXsgXG4gICAgIGF3YWl0IHByaXNtYS5zdWJqZWN0LmNyZWF0ZSh7XG4gICAgIGRhdGE6e1xuICAgICAgICAgbmFtZTogZGF0YS5Db3Vyc2VOYW1lLFxuICAgICAgICAgdGVhY2hlcnM6e1xuICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEudGVhY2hlcnMubWFwKCh0ZWFjaGVySWQ6IHN0cmluZykgPT4gKHsgaWQ6IHRlYWNoZXJJZCB9KSksXG4gICAgICAgICB9XG4gICAgIH1cbiAgIH0pO1xuLyogICAgcmV2YWxpZGF0ZVBhdGgoXCIgL2xpc3QvY291cnNlc1wiKSAqL1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcblxuICB9IGNhdGNoKGVycm9yKXtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG5cbiAgfVxuXG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvdXJzZSA9IGFzeW5jIChcbiAgY3VycmVudFN0YXRlOiBjdXJyZW50U3RhdGUsXG4gIGRhdGE6IENvdXJzZVNjaGVtYVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnN1YmplY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIoZGF0YS5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgIHRlYWNoZXJzOiB7XG4gICAgICAgICAgc2V0OiBbXSxcbiAgICAgICAgICBjb25uZWN0OiBkYXRhLnRlYWNoZXJzLm1hcCgoaWQ6IHN0cmluZykgPT4gKHsgaWQgfSkpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiB0cnVlLCBlcnJvck1lc3NhZ2U6IGZhbHNlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IHRydWUgfTtcbiAgfVxufTtcblxuXG5cbmV4cG9ydCBjb25zdCBkZWxldENvdXJzZSA9IGFzeW5jKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICBkYXRhIDogRm9ybURhdGFcbik9PntcbiAgY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgIGF3YWl0IHByaXNtYS5zdWJqZWN0LmRlbGV0ZSh7XG4gICAgIHdoZXJlOiB7XG4gICAgIGlkOiBwYXJzZUludChpZCksXG4gICAgIH1cbiAgIH0pO1xuICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuIFxuICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9O1xuICB9XG5cbn0gLyogfHwgRW5kICovIFxuXG4gIC8qIHx8IHN0dWRlbnQgc2VjdGlvbiB0byB1cGRhdGUgLCBjcmVhdGUgYW5kIGRlbGV0ZSAqL1xuIGV4cG9ydCBjb25zdCAgQ3JlYXRTdHVkZW50ID0gYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOlN0dWRlbnRTY2hlbWEpICA9PnsgIFxuICB0cnl7XG4gICAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC5jcmVhdGUoe1xuICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBhZ2U6TnVtYmVyKGRhdGEuYWdlKSxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBEYXRlT2ZCaXJ0aDpuZXcgRGF0ZShkYXRhLmRhdGVPZkJpcnRoKSxcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIG1hdHJpY3VsZTpkYXRhLk1hdHJpY3VsZU5vLFxuICAgICAgICAgZGVwYXJ0bWVudDp7XG4gICAgICAgICAgIGNvbm5lY3Q6e2lkOmRhdGEuZGVwYXJ0bWVudH1cbiAgICAgICAgIH0gXG4gICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfSkgXG4gICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuICAgIH1cbiAgICBjYXRjaChlcnJvcil7XG4gICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9O1xuICAgIH1cbiB9XG4gZXhwb3J0IGNvbnN0IGRlbGV0ZVN0dWRlbnQgPSBhc3luYyhcbiAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgZGF0YSA6IEZvcm1EYXRhXG4pPT57XG4gIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC5kZWxldGUoe1xuICAgICB3aGVyZToge1xuICAgICBpZDogKGlkKSxcbiAgICAgfVxuICAgfSk7XG4gICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG5cbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0ICBVcGRhdGVTdHVkZW50ID0gYXN5bmMoIFxuICBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSAsIFxuICBkYXRhIDpTdHVkZW50U2NoZW1hXG5cblxuKT0+e1xuICAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogKGRhdGEuaWQpLFxuICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG4vKiB8fCBlbmQgKi9cbi8qIHx8IFRlYWNoZXIgc2VjdGlvbiB0byBjcmVhdGUgLCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0IGNvbnN0IENyZWF0VGVhY2hlID0gYXN5bmMoY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUgLCBkYXRhOlRlYWNoZXJTY2hlbWEpPT57XG4gIHRyeSB7XG4gICBhd2FpdCBwcmlzbWEudGVhY2hlci5jcmVhdGUoe1xuICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXMubWFwKChjb3Vyc2VJZDphbnkpID0+ICh7IGlkOiBjb3Vyc2VJZCB9KSksXG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgICAgY2F0Y2goZXJyb3IpeyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9XG4gICAgXG59XG5leHBvcnQgY29uc3QgVXBkYXRlVGVhY2hlID0gYXN5bmMgKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlXG4gICwgZGF0YTpUZWFjaGVyU2NoZW1hXG5cbikgPT57XG4gIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci51cGRhdGUoe1xuICAgICAgd2hlcmU6e1xuICAgICAgICBpZDooZGF0YS5pZClcbiAgICAgIH0sXG4gICAgICBkYXRhOntcbiAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXMubWFwKChjb3Vyc2VJZDphbnkpID0+ICh7IGlkOiBjb3Vyc2VJZCB9KSksXG4gICAgICAgICB9IFxuXG4gICAgICB9XG4gICAgICBcbiAgICB9KTtcbiAgICAgY29uc29sZS5sb2coXCJUZWFjaGVyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgfVxuICAgICAgICBjYXRjaChlcnJvcil7IFxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgdGVhY2hlcjpcIiwgZXJyb3IpOyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9ICBcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRlYWNoZXIgPSBhc3luYyhcbiAgIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gICAgZGF0YTpGb3JtRGF0YVxuKT0+e1xuICBjb25zb2xlLmxvZyhcImRlbGV0aW5nIHRlYWNoZXIgd2l0aCBkYXRhOlwiLCBkYXRhKTtcbiBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5kZWxldGUoe1xuICAgICAgd2hlcmU6e1xuICAgICAgICBpZDooaWQpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm57IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2V9XG4gIH0gXG4gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm57IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWVcbiB9XG59XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwUkF5R2MifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:63f1d9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f0d32fcfac92fe91f7d588cb18e56389f1dd7568d":"deleteTeacher"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "deleteTeacher",
    ()=>deleteTeacher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteTeacher = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f0d32fcfac92fe91f7d588cb18e56389f1dd7568d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteTeacher"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG50eXBlIGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBzdWNjZXNzTWVzc2FnZTpib29sZWFuIDtcbiAgICBlcnJvck1lc3NhZ2U6Ym9vbGVhblxufVxuLyogfHwgQ291cnNlIHNlY3Rpb24gdG8gY3JlYXQgdXBkYXRlIGFuZCBkZWxldGUgKi9cbmV4cG9ydCAgY29uc3QgQ3JlYXRlQ291cnNlID0gIGFzeW5jKCBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSwgZGF0YTogQ291cnNlU2NoZW1hKSAgPT57XG4gIHRyeXsgXG4gICAgIGF3YWl0IHByaXNtYS5zdWJqZWN0LmNyZWF0ZSh7XG4gICAgIGRhdGE6e1xuICAgICAgICAgbmFtZTogZGF0YS5Db3Vyc2VOYW1lLFxuICAgICAgICAgdGVhY2hlcnM6e1xuICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEudGVhY2hlcnMubWFwKCh0ZWFjaGVySWQ6IHN0cmluZykgPT4gKHsgaWQ6IHRlYWNoZXJJZCB9KSksXG4gICAgICAgICB9XG4gICAgIH1cbiAgIH0pO1xuLyogICAgcmV2YWxpZGF0ZVBhdGgoXCIgL2xpc3QvY291cnNlc1wiKSAqL1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcblxuICB9IGNhdGNoKGVycm9yKXtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG5cbiAgfVxuXG59O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvdXJzZSA9IGFzeW5jIChcbiAgY3VycmVudFN0YXRlOiBjdXJyZW50U3RhdGUsXG4gIGRhdGE6IENvdXJzZVNjaGVtYVxuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnN1YmplY3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIoZGF0YS5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgIHRlYWNoZXJzOiB7XG4gICAgICAgICAgc2V0OiBbXSxcbiAgICAgICAgICBjb25uZWN0OiBkYXRhLnRlYWNoZXJzLm1hcCgoaWQ6IHN0cmluZykgPT4gKHsgaWQgfSkpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiB0cnVlLCBlcnJvck1lc3NhZ2U6IGZhbHNlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IHRydWUgfTtcbiAgfVxufTtcblxuXG5cbmV4cG9ydCBjb25zdCBkZWxldENvdXJzZSA9IGFzeW5jKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICBkYXRhIDogRm9ybURhdGFcbik9PntcbiAgY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgIGF3YWl0IHByaXNtYS5zdWJqZWN0LmRlbGV0ZSh7XG4gICAgIHdoZXJlOiB7XG4gICAgIGlkOiBwYXJzZUludChpZCksXG4gICAgIH1cbiAgIH0pO1xuICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuIFxuICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9O1xuICB9XG5cbn0gLyogfHwgRW5kICovIFxuXG4gIC8qIHx8IHN0dWRlbnQgc2VjdGlvbiB0byB1cGRhdGUgLCBjcmVhdGUgYW5kIGRlbGV0ZSAqL1xuIGV4cG9ydCBjb25zdCAgQ3JlYXRTdHVkZW50ID0gYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOlN0dWRlbnRTY2hlbWEpICA9PnsgIFxuICB0cnl7XG4gICAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC5jcmVhdGUoe1xuICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBhZ2U6TnVtYmVyKGRhdGEuYWdlKSxcbiAgICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICAgICBmaXJzdE5hbWU6ZGF0YS5GaXJzdE5hbWUsXG4gICAgICAgICBsYXN0TmFtZTpkYXRhLkxhc3ROYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcbiAgICAgICAgIHBob25lTnVtYmVyOmRhdGEucGhvbmVOdW1iZXIsXG4gICAgICAgICBEYXRlT2ZCaXJ0aDpuZXcgRGF0ZShkYXRhLmRhdGVPZkJpcnRoKSxcbiAgICAgICAgIHNleDpkYXRhLnNleCxcbiAgICAgICAgIG1hdHJpY3VsZTpkYXRhLk1hdHJpY3VsZU5vLFxuICAgICAgICAgZGVwYXJ0bWVudDp7XG4gICAgICAgICAgIGNvbm5lY3Q6e2lkOmRhdGEuZGVwYXJ0bWVudH1cbiAgICAgICAgIH0gXG4gICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfSkgXG4gICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuICAgIH1cbiAgICBjYXRjaChlcnJvcil7XG4gICAgICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6ZmFsc2UgLCBlcnJvck1lc3NhZ2U6dHJ1ZSB9O1xuICAgIH1cbiB9XG4gZXhwb3J0IGNvbnN0IGRlbGV0ZVN0dWRlbnQgPSBhc3luYyhcbiAgY3VycmVudFN0YXRlOmN1cnJlbnRTdGF0ZSxcbiAgZGF0YSA6IEZvcm1EYXRhXG4pPT57XG4gIGNvbnN0IGlkID0gZGF0YS5nZXQoXCJpZFwiKSBhcyBzdHJpbmdcbiAgdHJ5e1xuICAgICBhd2FpdCBwcmlzbWEuc3R1ZGVudC5kZWxldGUoe1xuICAgICB3aGVyZToge1xuICAgICBpZDogKGlkKSxcbiAgICAgfVxuICAgfSk7XG4gICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG5cbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0ICBVcGRhdGVTdHVkZW50ID0gYXN5bmMoIFxuICBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSAsIFxuICBkYXRhIDpTdHVkZW50U2NoZW1hXG5cblxuKT0+e1xuICAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogKGRhdGEuaWQpLFxuICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG4vKiB8fCBlbmQgKi9cbi8qIHx8IFRlYWNoZXIgc2VjdGlvbiB0byBjcmVhdGUgLCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0IGNvbnN0IENyZWF0VGVhY2hlID0gYXN5bmMoY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUgLCBkYXRhOlRlYWNoZXJTY2hlbWEpPT57XG4gIHRyeSB7XG4gICBhd2FpdCBwcmlzbWEudGVhY2hlci5jcmVhdGUoe1xuICAgICAgICAgZGF0YTp7XG4gICAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXMubWFwKChjb3Vyc2VJZDphbnkpID0+ICh7IGlkOiBjb3Vyc2VJZCB9KSksXG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgICAgY2F0Y2goZXJyb3IpeyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9XG4gICAgXG59XG5leHBvcnQgY29uc3QgVXBkYXRlVGVhY2hlID0gYXN5bmMgKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlXG4gICwgZGF0YTpUZWFjaGVyU2NoZW1hXG5cbikgPT57XG4gIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci51cGRhdGUoe1xuICAgICAgd2hlcmU6e1xuICAgICAgICBpZDooZGF0YS5pZClcbiAgICAgIH0sXG4gICAgICBkYXRhOntcbiAgICAgICB1c2VybmFtZTpkYXRhLlVzZXJOYW1lLFxuICAgICAgICAgYWRkcmVzczpkYXRhLkFkZHJlc3MsXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgdGVhY2hlcnNJZCAgOmRhdGEudGVhY2hlcnNJZCxcbiAgICAgICAgIGNvdXJzZXM6e1xuICAgICAgICAgICBjb25uZWN0OiBkYXRhLkNvdXJzZXMubWFwKChjb3Vyc2VJZDphbnkpID0+ICh7IGlkOiBjb3Vyc2VJZCB9KSksXG4gICAgICAgICB9IFxuXG4gICAgICB9XG4gICAgICBcbiAgICB9KTtcbiAgICAgY29uc29sZS5sb2coXCJUZWFjaGVyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgfVxuICAgICAgICBjYXRjaChlcnJvcil7IFxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgdGVhY2hlcjpcIiwgZXJyb3IpOyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9ICBcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRlYWNoZXIgPSBhc3luYyhcbiAgIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gICAgZGF0YTpGb3JtRGF0YVxuKT0+e1xuICBjb25zb2xlLmxvZyhcImRlbGV0aW5nIHRlYWNoZXIgd2l0aCBkYXRhOlwiLCBkYXRhKTtcbiBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5kZWxldGUoe1xuICAgICAgd2hlcmU6e1xuICAgICAgICBpZDooaWQpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm57IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2V9XG4gIH0gXG4gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm57IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWVcbiB9XG59XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwUkFnT2EifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FormModel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$5c2927__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:5c2927 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$75ccf4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:75ccf4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$63f1d9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:63f1d9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const deletActionMap = {
    Teacher: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$63f1d9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteTeacher"],
    Student: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$75ccf4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteStudent"],
    /* Parent: deleteParent, */ Course: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$5c2927__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"]
};
const StudentsForms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/StusdentForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/StusdentForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 41,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0))
});
_c = StudentsForms;
const TeachersForms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/TeachersForms.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/TeachersForms.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 44,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = TeachersForms;
const ParentFoorem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/ PerantsForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/ PerantsForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 47,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = ParentFoorem;
const Courseform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/Courseform.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/Courseform.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading.."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 50,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = Courseform;
const DepartmentForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/DepertmentForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/DepertmentForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c4 = DepartmentForm;
const AnnouncementForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/AnnouncementForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/AnnouncementForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c5 = AnnouncementForm;
const ExamForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/ExamForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/ExamForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c6 = ExamForm;
const Forms = {
    Teacher: (SetOpen, type, data, relatedData1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeachersForms, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData1
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 60,
            columnNumber: 8
        }, ("TURBOPACK compile-time value", void 0)),
    Student: (SetOpen, type, data, relatedData1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsForms, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData1
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
    Parent: (SetOpen, type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentFoorem, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
    Course: (SetOpen, type, data, relatedData1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Courseform, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData1,
            hidden: true
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 69,
            columnNumber: 8
        }, ("TURBOPACK compile-time value", void 0)),
    Department: (SetOpen, type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DepartmentForm, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 72,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0)),
    announcement: (SetOpen, type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnnouncementForm, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 75,
            columnNumber: 8
        }, ("TURBOPACK compile-time value", void 0)),
    Exams: (SetOpen, type, date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamForm, {
            type: type,
            data: date,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 78,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
};
const FormModel = (param)=>{
    let { type, table, data, id, relatedData: relatedData1 } = param;
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const size = type === "Create" ? "w-8 h-8" : "w-8 h-8";
    const bgColor = type === "Create" ? "bg-green-100" : type === "Update" ? "bg-blue-300" : "bg-red-400";
    const [open, SetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const Form = (param)=>{
        let { data } = param;
        _s1();
        const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(deletActionMap[table], {
            successMessage: false,
            errorMessage: false
        });
        formAction;
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
        const getSuccesMessage = (table)=>{
            switch(table){
                case "Course":
                    return "Course ".concat(data.name, " has been deleted!");
                case "Student":
                    return "Student has been deleted!";
                case "Teacher":
                    return "Teacher has been deleted!";
                default:
                    return "Operation completed successfully!";
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "FormModel.Form.useEffect": ()=>{
                if (state.successMessage) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(getSuccesMessage(table), {
                        type: "success"
                    });
                    SetOpen(false);
                    router.refresh();
                }
            }
        }["FormModel.Form.useEffect"], [
            state,
            type,
            router,
            SetOpen
        ]);
        return type === "Delete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            action: formAction,
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "hidden",
                    name: "id",
                    value: data === null || data === void 0 ? void 0 : data.id
                }, void 0, false, {
                    fileName: "[project]/src/components/FormModel.tsx",
                    lineNumber: 125,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " flex flex-col gap-6 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: "Warning!!:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FormModel.tsx",
                                    lineNumber: 127,
                                    columnNumber: 50
                                }, ("TURBOPACK compile-time value", void 0)),
                                " All data related to this ",
                                table,
                                " will be lost. Are you sure you want to delete this ",
                                table,
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FormModel.tsx",
                            lineNumber: 127,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-red-500 text-white py-2 px-4 rounded w-max self-center",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FormModel.tsx",
                            lineNumber: 128,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FormModel.tsx",
                    lineNumber: 126,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)) : Forms[table](SetOpen, type, data, relatedData1);
    };
    _s1(Form, "+r1v3wONu1YpAnic9xGTLPXmM8g=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>SetOpen(true),
                className: "".concat(size, " flex items-center justify-center rounded-full ").concat(bgColor),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/".concat(type, ".png"),
                    alt: "",
                    height: 14,
                    width: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/FormModel.tsx",
                    lineNumber: 140,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FormModel.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 z-50 flex justify-center p-2 items-center overflow-scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-white p-4 rounded w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
                            data: data
                        }, void 0, false, {
                            fileName: "[project]/src/components/FormModel.tsx",
                            lineNumber: 146,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>SetOpen(false),
                            className: "absolute top-2 right-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/close.png",
                                alt: "close",
                                height: 14,
                                width: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/FormModel.tsx",
                                lineNumber: 152,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FormModel.tsx",
                            lineNumber: 148,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FormModel.tsx",
                    lineNumber: 145,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FormModel.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(FormModel, "Z3FP6hWfZVRAK0ZSc/gF2d0qh7k=");
_c7 = FormModel;
const __TURBOPACK__default__export__ = FormModel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "StudentsForms");
__turbopack_context__.k.register(_c1, "TeachersForms");
__turbopack_context__.k.register(_c2, "ParentFoorem");
__turbopack_context__.k.register(_c3, "Courseform");
__turbopack_context__.k.register(_c4, "DepartmentForm");
__turbopack_context__.k.register(_c5, "AnnouncementForm");
__turbopack_context__.k.register(_c6, "ExamForm");
__turbopack_context__.k.register(_c7, "FormModel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 16),
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "protocol": ("TURBOPACK compile-time value", "https"),
                    "hostname": ("TURBOPACK compile-time value", "images.pexels.com")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_17a48bfe._.js.map