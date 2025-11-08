module.exports = [
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__commonJS",
    ()=>__commonJS
]);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
;
 //# sourceMappingURL=chunk-BUSYA2B4.js.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)");
;
var require_safe_node_apis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__commonJS"])({
    "src/runtime/node/safe-node-apis.js" (exports, module) {
        const { existsSync, writeFileSync, readFileSync, appendFileSync, mkdirSync, rmSync } = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
        const path = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
        const fs = {
            existsSync,
            writeFileSync,
            readFileSync,
            appendFileSync,
            mkdirSync,
            rmSync
        };
        const cwd = ()=>process.cwd();
        module.exports = {
            fs,
            path,
            cwd
        };
    }
});
const __TURBOPACK__default__export__ = require_safe_node_apis();
 //# sourceMappingURL=safe-node-apis.js.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeCwdOrThrow",
    ()=>nodeCwdOrThrow,
    "nodeFsOrThrow",
    ()=>nodeFsOrThrow,
    "nodePathOrThrow",
    ()=>nodePathOrThrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)");
;
;
function assertNotNullable(value, moduleName) {
    if (!value) {
        throw new Error(`Clerk: ${moduleName} is missing. This is an internal error. Please contact Clerk's support.`);
    }
}
const nodeFsOrThrow = ()=>{
    assertNotNullable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs, "fs");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs;
};
const nodePathOrThrow = ()=>{
    assertNotNullable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path, "path");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path;
};
const nodeCwdOrThrow = ()=>{
    assertNotNullable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd, "cwd");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd;
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-telemetry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectKeylessEnvDrift",
    ()=>detectKeylessEnvDrift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)");
;
;
;
;
const EVENT_KEYLESS_ENV_DRIFT_DETECTED = "KEYLESS_ENV_DRIFT_DETECTED";
const EVENT_SAMPLING_RATE = 1;
const TELEMETRY_FLAG_FILE = ".clerk/.tmp/telemetry.json";
function getTelemetryFlagFilePath() {
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
    return path.join(process.cwd(), TELEMETRY_FLAG_FILE);
}
function tryMarkTelemetryEventAsFired() {
    try {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canUseKeyless"]) {
            const { mkdirSync, writeFileSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
            const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
            const flagFilePath = getTelemetryFlagFilePath();
            const flagDirectory = path.dirname(flagFilePath);
            mkdirSync(flagDirectory, {
                recursive: true
            });
            const flagData = {
                firedAt: /* @__PURE__ */ new Date().toISOString(),
                event: EVENT_KEYLESS_ENV_DRIFT_DETECTED
            };
            writeFileSync(flagFilePath, JSON.stringify(flagData, null, 2), {
                flag: "wx"
            });
            return true;
        } else {
            return false;
        }
    } catch (error) {
        if ((error == null ? void 0 : error.code) === "EEXIST") {
            return false;
        }
        console.warn("Failed to create telemetry flag file:", error);
        return false;
    }
}
async function detectKeylessEnvDrift() {
    var _a, _b;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canUseKeyless"]) {
        return;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const { safeParseClerkFile } = await __turbopack_context__.A("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-node.js [app-rsc] (ecmascript, async loader)");
        const keylessFile = safeParseClerkFile();
        if (!keylessFile) {
            return;
        }
        const envPublishableKey = ("TURBOPACK compile-time value", "pk_test_aGFuZHktam9leS00NC5jbGVyay5hY2NvdW50cy5kZXYk");
        const envSecretKey = process.env.CLERK_SECRET_KEY;
        const hasEnvVars = Boolean(envPublishableKey || envSecretKey);
        const keylessFileHasKeys = Boolean((keylessFile == null ? void 0 : keylessFile.publishableKey) && (keylessFile == null ? void 0 : keylessFile.secretKey));
        const envVarsMissing = !envPublishableKey && !envSecretKey;
        if (!hasEnvVars && !keylessFileHasKeys) {
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!keylessFileHasKeys) {
            return;
        }
        if (!hasEnvVars) {
            return;
        }
        const publicKeyMatch = Boolean(envPublishableKey && keylessFile.publishableKey && envPublishableKey === keylessFile.publishableKey);
        const secretKeyMatch = Boolean(envSecretKey && keylessFile.secretKey && envSecretKey === keylessFile.secretKey);
        const hasActualDrift = envPublishableKey && keylessFile.publishableKey && !publicKeyMatch || envSecretKey && keylessFile.secretKey && !secretKeyMatch;
        if (!hasActualDrift) {
            return;
        }
        const payload = {
            publicKeyMatch,
            secretKeyMatch,
            envVarsMissing,
            keylessFileHasKeys,
            keylessPublishableKey: (_a = keylessFile.publishableKey) != null ? _a : "",
            envPublishableKey: envPublishableKey != null ? envPublishableKey : ""
        };
        const clerkClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({
            publishableKey: keylessFile.publishableKey,
            secretKey: keylessFile.secretKey,
            telemetry: {
                samplingRate: 1
            }
        });
        const shouldFireEvent = tryMarkTelemetryEventAsFired();
        if (shouldFireEvent) {
            const driftDetectedEvent = {
                event: EVENT_KEYLESS_ENV_DRIFT_DETECTED,
                eventSamplingRate: EVENT_SAMPLING_RATE,
                payload
            };
            (_b = clerkClient.telemetry) == null ? void 0 : _b.record(driftDetectedEvent);
        }
    } catch (error) {
        console.warn("Failed to detect keyless environment drift:", error);
    }
}
;
 //# sourceMappingURL=keyless-telemetry.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91d72ae3._.js.map