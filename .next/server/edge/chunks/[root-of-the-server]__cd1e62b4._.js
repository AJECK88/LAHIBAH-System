(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__cd1e62b4._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/app/(dashboard)/Settings.tsx [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/Settings.tsx [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
;
;
const MatcherRole = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routeAccessMap"]).map((route, soure)=>({
        Matcher: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRouteMatcher"])([
            soure ? `/${route}` : `/${route}`
        ]),
        allowedRoles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$Settings$2e$tsx__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routeAccessMap"][route]
    }));
console.log(MatcherRole);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clerkMiddleware"])(async (auth, req)=>{
    const { sessionClaims } = await Promise.resolve(auth());
    const role = sessionClaims?.metadata?.role;
    for (const { Matcher, allowedRoles } of MatcherRole){
        if (Matcher(req) && !allowedRoles.includes(role)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${role}`, req.url));
        }
    }
});
const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__cd1e62b4._.js.map