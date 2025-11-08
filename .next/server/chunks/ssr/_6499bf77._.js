module.exports = [
"[project]/src/app/(dashboard)/Settings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/pagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/Settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Pagination = ({ page, count })=>{
    /* || cheaking if the next is more than it limite and some with the Prov button to disaplay the button */ const length = Math.ceil(count / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Items_Per_Page"]);
    const hasProv = page === 1;
    const hasNext = page >= length;
    /*end*/ const Route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const changePage = (NewPage)=>{
        const Params = new URLSearchParams(window.location.search);
        Params.set("page", NewPage.toString());
        Route.push(`${window.location.pathname}?${Params}`);
    };
    console.log(length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " pt-4 md:p-1 lg:p-4 flex items-center justify-between text-gray-500 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 ",
                children: Array.from({
                    length: Math.ceil(count / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Items_Per_Page"])
                }, (_, index)=>{
                    const PageIndex = index + 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-2 py-1 rounded-sm  text-xs font-semibold ${page === PageIndex ? "bg-blue-300" : ""}`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = Pagination;
}),
"[project]/src/components/TablesearchBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const TableSearchBar = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Use FormData to safely grab the input value
        const formData = new FormData(e.currentTarget);
        const value = formData.get("search");
        const params = new URLSearchParams(window.location.search);
        params.set("search", value);
        router.push(`${window.location.pathname}?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onKeyUp: handleSubmit,
        className: "flex md:flex items-center justify-start gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
const __TURBOPACK__default__export__ = TableSearchBar;
}),
"[project]/src/lib/data:138051 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f48bf0f5cf48325463aa065f652203ad690e91960":"deletCourse"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "deletCourse",
    ()=>deletCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deletCourse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f48bf0f5cf48325463aa065f652203ad690e91960", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletCourse"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycy5tYXAoKHRlYWNoZXJJZDogc3RyaW5nKSA9PiAoeyBpZDogdGVhY2hlcklkIH0pKSxcbiAgICAgICAgIH1cbiAgICAgfVxuICAgfSk7XG4vKiAgICByZXZhbGlkYXRlUGF0aChcIiAvbGlzdC9jb3Vyc2VzXCIpICovXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcblxuICB9XG5cbn07XG5leHBvcnQgY29uc3QgVXBkYXRlQ291cnNlID0gYXN5bmMgKFxuICBjdXJyZW50U3RhdGU6IGN1cnJlbnRTdGF0ZSxcbiAgZGF0YTogQ291cnNlU2NoZW1hXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IE51bWJlcihkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEuQ291cnNlTmFtZSxcbiAgICAgICAgdGVhY2hlcnM6IHtcbiAgICAgICAgICBzZXQ6IFtdLFxuICAgICAgICAgIGNvbm5lY3Q6IGRhdGEudGVhY2hlcnMubWFwKChpZDogc3RyaW5nKSA9PiAoeyBpZCB9KSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IGRlbGV0Q291cnNlID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IHBhcnNlSW50KGlkKSxcbiAgICAgfVxuICAgfSk7XG4gICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cblxufSAvKiB8fCBFbmQgKi8gXG5cbiAgLyogfHwgc3R1ZGVudCBzZWN0aW9uIHRvIHVwZGF0ZSAsIGNyZWF0ZSBhbmQgZGVsZXRlICovXG4gZXhwb3J0IGNvbnN0ICBDcmVhdFN0dWRlbnQgPSBhc3luYyggY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUsIGRhdGE6U3R1ZGVudFNjaGVtYSkgID0+eyAgXG4gIHRyeXtcbiAgICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmNyZWF0ZSh7XG4gICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gICAgfVxuIH1cbiBleHBvcnQgY29uc3QgZGVsZXRlU3R1ZGVudCA9IGFzeW5jKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICBkYXRhIDogRm9ybURhdGFcbik9PntcbiAgY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmRlbGV0ZSh7XG4gICAgIHdoZXJlOiB7XG4gICAgIGlkOiAoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICBjb25zb2xlLmxvZyhcImdvb2QgdG8gZ29cIilcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0ICBVcGRhdGVTdHVkZW50ID0gYXN5bmMoIFxuICBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSAsIFxuICBkYXRhIDpTdHVkZW50U2NoZW1hXG5cblxuKT0+e1xuICAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogKGRhdGEuaWQpLFxuICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG4vKiB8fCBlbmQgKi9cbmV4cG9ydCBjb25zdCBDcmVhdFRlYWNoZSA9IGFzeW5jKGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlICwgZGF0YTpUZWFjaGVyU2NoZW1hKT0+e1xuICB0cnkge1xuICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgYWdlOk51bWJlcihkYXRhLmFnZSksXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgVGVhY2hlcklEIDpkYXRhLlRlYWNoZXJJRCxcbiAgICAgICAgIGRlcGFydG1lbnQ6e1xuICAgICAgICAgICBjb25uZWN0OntpZDpkYXRhLmRlcGFydG1lbnR9XG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgICAgY2F0Y2goZXJyb3IpeyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9XG4gICAgXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkF3RGEifQ==
}),
"[project]/src/lib/data:ee24cd [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f6e290e7a4ae1394b99b9b07e1941bacc1529a7ed":"deleteStudent"},"src/lib/actions.tsx",""] */ __turbopack_context__.s([
    "deleteStudent",
    ()=>deleteStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f6e290e7a4ae1394b99b9b07e1941bacc1529a7ed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgQ291cnNlU2NoZW1hLCBTdHVkZW50U2NoZW1hLCBUZWFjaGVyU2NoZW1hLCB0ZWFjaGVyU2NoZW1hIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb25TY2hpbWFcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIlxuaW1wb3J0IHsgdHIgfSBmcm9tIFwiem9kL2xvY2FsZXNcIjtcbnR5cGUgY3VycmVudFN0YXRlID0ge1xuICAgIHN1Y2Nlc3NNZXNzYWdlOmJvb2xlYW4gO1xuICAgIGVycm9yTWVzc2FnZTpib29sZWFuXG59XG4vKiB8fCBDb3Vyc2Ugc2VjdGlvbiB0byBjcmVhdCB1cGRhdGUgYW5kIGRlbGV0ZSAqL1xuZXhwb3J0ICBjb25zdCBDcmVhdGVDb3Vyc2UgPSAgYXN5bmMoIGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlLCBkYXRhOiBDb3Vyc2VTY2hlbWEpICA9PntcbiAgdHJ5eyBcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuY3JlYXRlKHtcbiAgICAgZGF0YTp7XG4gICAgICAgICBuYW1lOiBkYXRhLkNvdXJzZU5hbWUsXG4gICAgICAgICB0ZWFjaGVyczp7XG4gICAgICAgICAgICAgY29ubmVjdDogZGF0YS50ZWFjaGVycy5tYXAoKHRlYWNoZXJJZDogc3RyaW5nKSA9PiAoeyBpZDogdGVhY2hlcklkIH0pKSxcbiAgICAgICAgIH1cbiAgICAgfVxuICAgfSk7XG4vKiAgICByZXZhbGlkYXRlUGF0aChcIiAvbGlzdC9jb3Vyc2VzXCIpICovXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6dHJ1ZSAsIGVycm9yTWVzc2FnZTpmYWxzZSB9O1xuXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcblxuICB9XG5cbn07XG5leHBvcnQgY29uc3QgVXBkYXRlQ291cnNlID0gYXN5bmMgKFxuICBjdXJyZW50U3RhdGU6IGN1cnJlbnRTdGF0ZSxcbiAgZGF0YTogQ291cnNlU2NoZW1hXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc3ViamVjdC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IE51bWJlcihkYXRhLmlkKSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEuQ291cnNlTmFtZSxcbiAgICAgICAgdGVhY2hlcnM6IHtcbiAgICAgICAgICBzZXQ6IFtdLFxuICAgICAgICAgIGNvbm5lY3Q6IGRhdGEudGVhY2hlcnMubWFwKChpZDogc3RyaW5nKSA9PiAoeyBpZCB9KSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6IHRydWUsIGVycm9yTWVzc2FnZTogZmFsc2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogZmFsc2UsIGVycm9yTWVzc2FnZTogdHJ1ZSB9O1xuICB9XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IGRlbGV0Q291cnNlID0gYXN5bmMoXG4gIGN1cnJlbnRTdGF0ZTpjdXJyZW50U3RhdGUsXG4gIGRhdGEgOiBGb3JtRGF0YVxuKT0+e1xuICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIikgYXMgc3RyaW5nXG4gIHRyeXtcbiAgICAgYXdhaXQgcHJpc21hLnN1YmplY3QuZGVsZXRlKHtcbiAgICAgd2hlcmU6IHtcbiAgICAgaWQ6IHBhcnNlSW50KGlkKSxcbiAgICAgfVxuICAgfSk7XG4gICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gXG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gIH1cblxufSAvKiB8fCBFbmQgKi8gXG5cbiAgLyogfHwgc3R1ZGVudCBzZWN0aW9uIHRvIHVwZGF0ZSAsIGNyZWF0ZSBhbmQgZGVsZXRlICovXG4gZXhwb3J0IGNvbnN0ICBDcmVhdFN0dWRlbnQgPSBhc3luYyggY3VycmVudFN0YXRlIDpjdXJyZW50U3RhdGUsIGRhdGE6U3R1ZGVudFNjaGVtYSkgID0+eyAgXG4gIHRyeXtcbiAgICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmNyZWF0ZSh7XG4gICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9KSBcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTp0cnVlICwgZXJyb3JNZXNzYWdlOmZhbHNlIH07XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH07XG4gICAgfVxuIH1cbiBleHBvcnQgY29uc3QgZGVsZXRlU3R1ZGVudCA9IGFzeW5jKFxuICBjdXJyZW50U3RhdGU6Y3VycmVudFN0YXRlLFxuICBkYXRhIDogRm9ybURhdGFcbik9PntcbiAgY29uc3QgaWQgPSBkYXRhLmdldChcImlkXCIpIGFzIHN0cmluZ1xuICB0cnl7XG4gICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LmRlbGV0ZSh7XG4gICAgIHdoZXJlOiB7XG4gICAgIGlkOiAoaWQpLFxuICAgICB9XG4gICB9KTtcbiAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICBjb25zb2xlLmxvZyhcImdvb2QgdG8gZ29cIilcbiBcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOmZhbHNlICwgZXJyb3JNZXNzYWdlOnRydWUgfTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0ICBVcGRhdGVTdHVkZW50ID0gYXN5bmMoIFxuICBjdXJyZW50U3RhdGUgOmN1cnJlbnRTdGF0ZSAsIFxuICBkYXRhIDpTdHVkZW50U2NoZW1hXG5cblxuKT0+e1xuICAgdHJ5e1xuICAgIGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogKGRhdGEuaWQpLFxuICAgICAgfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgIHVzZXJuYW1lOmRhdGEuVXNlck5hbWUsXG4gICAgICAgICBhZGRyZXNzOmRhdGEuQWRkcmVzcyxcbiAgICAgICAgIGFnZTpOdW1iZXIoZGF0YS5hZ2UpLFxuICAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcbiAgICAgICAgIGZpcnN0TmFtZTpkYXRhLkZpcnN0TmFtZSxcbiAgICAgICAgIGxhc3ROYW1lOmRhdGEuTGFzdE5hbWUsXG4gICAgICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgcGhvbmVOdW1iZXI6ZGF0YS5waG9uZU51bWJlcixcbiAgICAgICAgIERhdGVPZkJpcnRoOm5ldyBEYXRlKGRhdGEuZGF0ZU9mQmlydGgpLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgbWF0cmljdWxlOmRhdGEuTWF0cmljdWxlTm8sXG4gICAgICAgICBkZXBhcnRtZW50OntcbiAgICAgICAgICAgY29ubmVjdDp7aWQ6ZGF0YS5kZXBhcnRtZW50fVxuICAgICAgICAgfSBcbiAgICAgICAgIFxuICAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZTogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBmYWxzZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiB0cnVlIH07XG4gIH1cbn07XG4vKiB8fCBlbmQgKi9cbmV4cG9ydCBjb25zdCBDcmVhdFRlYWNoZSA9IGFzeW5jKGN1cnJlbnRTdGF0ZSA6Y3VycmVudFN0YXRlICwgZGF0YTpUZWFjaGVyU2NoZW1hKT0+e1xuICB0cnkge1xuICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgICAgIGRhdGE6e1xuICAgICAgICAgdXNlcm5hbWU6ZGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgIGFkZHJlc3M6ZGF0YS5BZGRyZXNzLFxuICAgICAgICAgYWdlOk51bWJlcihkYXRhLmFnZSksXG4gICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxuICAgICAgICAgZmlyc3ROYW1lOmRhdGEuRmlyc3ROYW1lLFxuICAgICAgICAgbGFzdE5hbWU6ZGF0YS5MYXN0TmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOmRhdGEucGFzc3dvcmQsXG4gICAgICAgICBwaG9uZU51bWJlcjpkYXRhLnBob25lTnVtYmVyLFxuICAgICAgICAgc2V4OmRhdGEuc2V4LFxuICAgICAgICAgVGVhY2hlcklEIDpkYXRhLlRlYWNoZXJJRCxcbiAgICAgICAgIGRlcGFydG1lbnQ6e1xuICAgICAgICAgICBjb25uZWN0OntpZDpkYXRhLmRlcGFydG1lbnR9XG4gICAgICAgICB9IFxuICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH0pIFxuICAgICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOnRydWUgLCBlcnJvck1lc3NhZ2U6ZmFsc2UgfTtcbiAgICB9XG4gICAgICAgY2F0Y2goZXJyb3IpeyAgXG4gICAgICAgIHJldHVybiggeyBzdWNjZXNzTWVzc2FnZTpmYWxzZSAsIGVycm9yTWVzc2FnZTp0cnVlIH0gKTsgICBcbiAgICAgICB9XG4gICAgXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwUkF3R2MifQ==
}),
"[project]/src/components/FormModel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:138051 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ee24cd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:ee24cd [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
"use client";
;
;
;
;
;
;
;
const deletActionMap = {
    Teacher: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Student: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ee24cd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteStudent"],
    Parent: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Course: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Department: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    announcement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Exams: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Result: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Class: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Attendance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Assignments: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"],
    Lessons: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$138051__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletCourse"]
};
const StudentsForms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/StusdentForm.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/StusdentForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 39,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0))
});
const TeachersForms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/TeachersForms.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/TeachersForms.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 42,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0))
});
const ParentFoorem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/ PerantsForm.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/ PerantsForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 45,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0))
});
const Courseform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/Courseform.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/Courseform.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading.."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 48,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0))
});
const DepartmentForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/DepertmentForm.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/DepertmentForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
const AnnouncementForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/AnnouncementForm.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/AnnouncementForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
const ExamForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Forms/ExamForm.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Forms/ExamForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
const Forms = {
    Teacher: (SetOpen, type, data, relatedData1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeachersForms, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData1
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 58,
            columnNumber: 8
        }, ("TURBOPACK compile-time value", void 0)),
    Student: (SetOpen, type, data, relatedData1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsForms, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData1
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
    Parent: (SetOpen, type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentFoorem, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
    Course: (SetOpen, type, data, relatedData1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Courseform, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData1,
            hidden: true
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 67,
            columnNumber: 8
        }, ("TURBOPACK compile-time value", void 0)),
    Department: (SetOpen, type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DepartmentForm, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 70,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0)),
    announcement: (SetOpen, type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnnouncementForm, {
            type: type,
            data: data,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 73,
            columnNumber: 8
        }, ("TURBOPACK compile-time value", void 0)),
    Exams: (SetOpen, type, date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamForm, {
            type: type,
            data: date,
            SetOpen: SetOpen,
            relatedData: relatedData
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 76,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
};
const FormModel = ({ type, table, data, id, relatedData: relatedData1 })=>{
    const size = type === "Create" ? "w-8 h-8" : "w-8 h-8";
    const bgColor = type === "Create" ? "bg-green-100" : type === "Update" ? "bg-blue-300" : "bg-red-400";
    const [open, SetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const Form = ({ data })=>{
        const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(deletActionMap[table], {
            successMessage: false,
            errorMessage: false
        });
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
        const getSuccesMessage = (table)=>{
            switch(table){
                case "Course":
                    return `Course ${data.name} has been deleted!`;
                case "Student":
                    return `Student has been deleted!`;
                default:
                    return "Operation completed successfully!";
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (state.successMessage) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])(getSuccesMessage(table), {
                    type: "success"
                });
                SetOpen(false);
                router.refresh();
            }
        }, [
            state,
            type,
            router,
            SetOpen
        ]);
        return type === "Delete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            action: formAction,
            className: "flex flex-col gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex flex-col gap-6 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Warning!!:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FormModel.tsx",
                                lineNumber: 121,
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
                        lineNumber: 121,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-red-500 text-white py-2 px-4 rounded w-max self-center",
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FormModel.tsx",
                        lineNumber: 122,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FormModel.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/FormModel.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)) : Forms[table](SetOpen, type, data, relatedData1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>SetOpen(true),
                className: `${size} flex items-center justify-center rounded-full ${bgColor}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: `/${type}.png`,
                    alt: "",
                    height: 14,
                    width: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/FormModel.tsx",
                    lineNumber: 134,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FormModel.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 z-50 flex justify-center p-2 items-center overflow-scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-white p-4 rounded w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
                            data: data
                        }, void 0, false, {
                            fileName: "[project]/src/components/FormModel.tsx",
                            lineNumber: 140,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>SetOpen(false),
                            className: "absolute top-2 right-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/close.png",
                                alt: "close",
                                height: 14,
                                width: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/FormModel.tsx",
                                lineNumber: 146,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FormModel.tsx",
                            lineNumber: 142,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FormModel.tsx",
                    lineNumber: 139,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FormModel.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = FormModel;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
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
"[project]/node_modules/next/image.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_6499bf77._.js.map