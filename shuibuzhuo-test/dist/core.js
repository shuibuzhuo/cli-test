/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/core.js":
/*!*********************!*\
  !*** ./bin/core.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./bin/utils.js\");\n\n\n\nconsole.log(path__WEBPACK_IMPORTED_MODULE_0___default().resolve('.'));\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_1__.exists)(path__WEBPACK_IMPORTED_MODULE_0___default().resolve('.')));\n\n(async() => {\n  const res = await new Promise(resolve => setTimeout(() => resolve('haha'), 1000))\n  console.log('res ok', res);\n})()\n\n\n//# sourceURL=webpack://shuibuzhuo-test/./bin/core.js?");

/***/ }),

/***/ "./bin/utils.js":
/*!**********************!*\
  !*** ./bin/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exists\": () => /* binding */ exists\n/* harmony export */ });\n/* harmony import */ var path_exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-exists */ \"./node_modules/path-exists/index.js\");\n/* harmony import */ var path_exists__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_exists__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction exists(p) {\n  return path_exists__WEBPACK_IMPORTED_MODULE_0___default().sync(p)\n}\n\n\n//# sourceURL=webpack://shuibuzhuo-test/./bin/utils.js?");

/***/ }),

/***/ "./node_modules/path-exists/index.js":
/*!*******************************************!*\
  !*** ./node_modules/path-exists/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst {promisify} = __webpack_require__(/*! util */ \"util\");\n\nconst pAccess = promisify(fs.access);\n\nmodule.exports = async path => {\n\ttry {\n\t\tawait pAccess(path);\n\t\treturn true;\n\t} catch (_) {\n\t\treturn false;\n\t}\n};\n\nmodule.exports.sync = path => {\n\ttry {\n\t\tfs.accessSync(path);\n\t\treturn true;\n\t} catch (_) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack://shuibuzhuo-test/./node_modules/path-exists/index.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack://shuibuzhuo-test/external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://shuibuzhuo-test/external_%22path%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = require(\"util\");;\n\n//# sourceURL=webpack://shuibuzhuo-test/external_%22util%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./bin/core.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;