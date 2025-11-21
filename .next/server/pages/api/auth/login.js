"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("ethers");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\login.js */ \"(api)/./pages/api/auth/login.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/login\",\n        pathname: \"/api/auth/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1Q2xvZ2luLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3lEO0FBQ3pEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxxREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMscURBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNhcm91c2VsLW1ldGFtYXNrLz9kM2FlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxsb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) throw new Error(\"Please add MONGODB_URI to .env\");\nlet cached = global.mongoose;\nif (!cached) cached = global.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUMzQyxJQUFJLENBQUNBLGFBQWEsTUFBTSxJQUFJRyxNQUFNO0FBRWxDLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFDNUIsSUFBSSxDQUFDSyxRQUFRQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7SUFBRU8sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFcEUsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUUsT0FBT0YsT0FBT0UsSUFBSTtJQUNuQyxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQUVDLGdCQUFnQjtRQUFNO1FBQ3JDTixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhUyxNQUFNRyxJQUFJLENBQUNDLENBQUFBLElBQUtBO0lBQ2pFO0lBQ0FULE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jYXJvdXNlbC1tZXRhbWFzay8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuaWYgKCFNT05HT0RCX1VSSSkgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIE1PTkdPREJfVVJJIHRvIC5lbnYnKVxyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZVxyXG5pZiAoIWNhY2hlZCkgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ublxyXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuICAgIGNvbnN0IG9wdHMgPSB7IGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSB9XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4obSA9PiBtKVxyXG4gIH1cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdFxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    address: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    nonce: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxTQUFTO1FBQUVDLE1BQU1DO1FBQVFDLFFBQVE7UUFBTUMsVUFBVTtJQUFLO0lBQ3REQyxPQUFPO1FBQUVKLE1BQU1DO1FBQVFFLFVBQVU7SUFBSztJQUN0Q0UsV0FBVztRQUFFTCxNQUFNTTtRQUFNQyxTQUFTRCxLQUFLRSxHQUFHO0lBQUM7QUFDN0M7QUFFQSxpRUFBZVosd0RBQWUsQ0FBQ2MsSUFBSSxJQUFJZCxxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY2Fyb3VzZWwtbWV0YW1hc2svLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBhZGRyZXNzOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIG5vbmNlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwiYWRkcmVzcyIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsIm5vbmNlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/jwt */ \"(api)/./utils/jwt.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_3__]);\nethers__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).end();\n    const { address, signature } = req.body;\n    if (!address || !signature) return res.status(400).json({\n        error: \"missing\"\n    });\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        address: address.toLowerCase()\n    });\n    if (!user) return res.status(400).json({\n        error: \"no user\"\n    });\n    const message = `Sign this message to login. Nonce: ${user.nonce}`;\n    try {\n        const recovered = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.verifyMessage(message, signature);\n        if (recovered.toLowerCase() !== address.toLowerCase()) return res.status(401).json({\n            error: \"invalid sig\"\n        });\n        user.nonce = crypto__WEBPACK_IMPORTED_MODULE_4___default().randomBytes(16).toString(\"hex\");\n        await user.save();\n        const token = (0,_utils_jwt__WEBPACK_IMPORTED_MODULE_2__.signToken)({\n            address: address.toLowerCase()\n        });\n        res.setHeader(\"Set-Cookie\", `token=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 3600}`);\n        return res.json({\n            ok: true\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(400).json({\n            error: \"verification failed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ047QUFDTztBQUNmO0FBQ0o7QUFFWixlQUFlSyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVEsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDckQsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRSxHQUFHTixJQUFJTyxJQUFJO0lBQ3ZDLElBQUksQ0FBQ0YsV0FBVyxDQUFDQyxXQUFXLE9BQU9MLElBQUlFLE1BQU0sQ0FBQyxLQUFLSyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFVO0lBRTNFLE1BQU1mLHlEQUFTQTtJQUNmLE1BQU1nQixPQUFPLE1BQU1mLDREQUFZLENBQUM7UUFBRVUsU0FBU0EsUUFBUU8sV0FBVztJQUFHO0lBQ2pFLElBQUksQ0FBQ0YsTUFBTSxPQUFPVCxJQUFJRSxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBVTtJQUUxRCxNQUFNSSxVQUFVLENBQUMsbUNBQW1DLEVBQUVILEtBQUtJLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLElBQUk7UUFDRixNQUFNQyxZQUFZbEIsMENBQU1BLENBQUNtQixhQUFhLENBQUNILFNBQVNQO1FBQ2hELElBQUlTLFVBQVVILFdBQVcsT0FBT1AsUUFBUU8sV0FBVyxJQUFJLE9BQU9YLElBQUlFLE1BQU0sQ0FBQyxLQUFLSyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFjO1FBRTFHQyxLQUFLSSxLQUFLLEdBQUdoQix5REFBa0IsQ0FBQyxJQUFJb0IsUUFBUSxDQUFDO1FBQzdDLE1BQU1SLEtBQUtTLElBQUk7UUFFZixNQUFNQyxRQUFReEIscURBQVNBLENBQUM7WUFBRVMsU0FBU0EsUUFBUU8sV0FBVztRQUFHO1FBQ3pEWCxJQUFJb0IsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUVELE1BQU0sNEJBQTRCLEVBQUUsSUFBRSxLQUFHLEtBQUssQ0FBQztRQUNwRixPQUFPbkIsSUFBSU8sSUFBSSxDQUFDO1lBQUVjLElBQUk7UUFBSztJQUM3QixFQUFFLE9BQU9DLEtBQUs7UUFDWkMsUUFBUWYsS0FBSyxDQUFDYztRQUNkLE9BQU90QixJQUFJRSxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBc0I7SUFDN0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jYXJvdXNlbC1tZXRhbWFzay8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29vc2UnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy9Vc2VyJ1xyXG5pbXBvcnQgeyBzaWduVG9rZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9qd3QnXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKVxyXG4gIGNvbnN0IHsgYWRkcmVzcywgc2lnbmF0dXJlIH0gPSByZXEuYm9keVxyXG4gIGlmICghYWRkcmVzcyB8fCAhc2lnbmF0dXJlKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ21pc3NpbmcnIH0pXHJcblxyXG4gIGF3YWl0IGRiQ29ubmVjdCgpXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGFkZHJlc3M6IGFkZHJlc3MudG9Mb3dlckNhc2UoKSB9KVxyXG4gIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdubyB1c2VyJyB9KVxyXG5cclxuICBjb25zdCBtZXNzYWdlID0gYFNpZ24gdGhpcyBtZXNzYWdlIHRvIGxvZ2luLiBOb25jZTogJHt1c2VyLm5vbmNlfWBcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3ZlcmVkID0gZXRoZXJzLnZlcmlmeU1lc3NhZ2UobWVzc2FnZSwgc2lnbmF0dXJlKVxyXG4gICAgaWYgKHJlY292ZXJlZC50b0xvd2VyQ2FzZSgpICE9PSBhZGRyZXNzLnRvTG93ZXJDYXNlKCkpIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnaW52YWxpZCBzaWcnIH0pXHJcblxyXG4gICAgdXNlci5ub25jZSA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpXHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gc2lnblRva2VuKHsgYWRkcmVzczogYWRkcmVzcy50b0xvd2VyQ2FzZSgpIH0pXHJcbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgYHRva2VuPSR7dG9rZW59OyBIdHRwT25seTsgUGF0aD0vOyBNYXgtQWdlPSR7NyoyNCozNjAwfWApXHJcbiAgICByZXR1cm4gcmVzLmpzb24oeyBvazogdHJ1ZSB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ3ZlcmlmaWNhdGlvbiBmYWlsZWQnIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyIiwic2lnblRva2VuIiwiZXRoZXJzIiwiY3J5cHRvIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImFkZHJlc3MiLCJzaWduYXR1cmUiLCJib2R5IiwianNvbiIsImVycm9yIiwidXNlciIsImZpbmRPbmUiLCJ0b0xvd2VyQ2FzZSIsIm1lc3NhZ2UiLCJub25jZSIsInJlY292ZXJlZCIsInZlcmlmeU1lc3NhZ2UiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwic2F2ZSIsInRva2VuIiwic2V0SGVhZGVyIiwib2siLCJlcnIiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ }),

/***/ "(api)/./utils/jwt.js":
/*!**********************!*\
  !*** ./utils/jwt.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nif (!JWT_SECRET) throw new Error(\"Please add JWT_SECRET to .env\");\nfunction signToken(payload, opts = {}) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, JWT_SECRET, {\n        expiresIn: \"7d\",\n        ...opts\n    });\n}\nfunction verifyToken(token) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9qd3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUM5QixNQUFNQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVU7QUFDekMsSUFBSSxDQUFDQSxZQUFZLE1BQU0sSUFBSUcsTUFBTTtBQUUxQixTQUFTQyxVQUFVQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLE9BQU9QLHdEQUFRLENBQUNNLFNBQVNMLFlBQVk7UUFBRVEsV0FBVztRQUFNLEdBQUdGLElBQUk7SUFBQztBQUNsRTtBQUVPLFNBQVNHLFlBQVlDLEtBQUs7SUFDL0IsT0FBT1gsMERBQVUsQ0FBQ1csT0FBT1Y7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY2Fyb3VzZWwtbWV0YW1hc2svLi91dGlscy9qd3QuanM/NjM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcclxuaWYgKCFKV1RfU0VDUkVUKSB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgSldUX1NFQ1JFVCB0byAuZW52JylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduVG9rZW4ocGF5bG9hZCwgb3B0cyA9IHt9KSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIEpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiAnN2QnLCAuLi5vcHRzIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbikge1xyXG4gIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwic2lnblRva2VuIiwicGF5bG9hZCIsIm9wdHMiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/jwt.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();