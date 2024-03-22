/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = createConsumerApi;\n\nvar _manifest = __webpack_require__(/*! ./manifest */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js\");\n\nvar _manifest2 = _interopRequireDefault(_manifest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createReadOnlyValue = function createReadOnlyValue(value) {\n    return {\n        value: value,\n        writable: false,\n        enumerable: false,\n        configurable: true\n    };\n};\nfunction createConsumerApi(manifests, exposureMap) {\n    var api = {};\n    Object.keys(exposureMap).forEach(function (key) {\n        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));\n    });\n    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));\n    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));\n}\n//# sourceMappingURL=createConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = exports.readFromConsumerApi = exports.createConsumerApi = undefined;\n\nvar _createConsumerApi = __webpack_require__(/*! ./createConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js\");\n\nvar _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);\n\nvar _readFromConsumerApi = __webpack_require__(/*! ./readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nvar _index = __webpack_require__(/*! ./registry/index */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _readFromConsumerApi2.default)('manifest');\nexports.createConsumerApi = _createConsumerApi2.default;\nexports.readFromConsumerApi = _readFromConsumerApi2.default;\nexports.SynchronousRegistry = _index.SynchronousRegistry;\nexports.SynchronousMetaRegistry = _index.SynchronousMetaRegistry;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nexports.default = function (manifests) {\n    return function (identifier, options, bootstrap) {\n        manifests.push(_defineProperty({}, identifier, {\n            options: options,\n            bootstrap: bootstrap\n        }));\n    };\n};\n//# sourceMappingURL=manifest.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = readFromConsumerApi;\nfunction readFromConsumerApi(key) {\n    return function () {\n        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {\n            var _window$NeosHostPlu;\n\n            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);\n        }\n        throw new Error('You are trying to read from a consumer api that hasn\\'t been initialized yet!');\n    };\n}\n//# sourceMappingURL=readFromConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar AbstractRegistry = class AbstractRegistry {\n    constructor(description) {\n        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';\n        this.description = description;\n    }\n};\n//# sourceMappingURL=AbstractRegistry.js.map\n\nexports.default = AbstractRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousMetaRegistry = class SynchronousMetaRegistry extends _SynchronousRegistry2.default {\n    set(key, value) {\n        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {\n            throw new Error('You can only add registries to a meta registry');\n        }\n        return super.set(key, value);\n    }\n};\n//# sourceMappingURL=SynchronousMetaRegistry.js.map\n\nexports.default = SynchronousMetaRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _AbstractRegistry = __webpack_require__(/*! ./AbstractRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js\");\n\nvar _AbstractRegistry2 = _interopRequireDefault(_AbstractRegistry);\n\nvar _positionalArraySorter = __webpack_require__(/*! @neos-project/positional-array-sorter */ \"./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js\");\n\nvar _positionalArraySorter2 = _interopRequireDefault(_positionalArraySorter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousRegistry = class SynchronousRegistry extends _AbstractRegistry2.default {\n    constructor(description) {\n        super(description);\n        this._registry = [];\n    }\n    set(key, value) {\n        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n        if (typeof key !== 'string') {\n            throw new Error('Key must be a string');\n        }\n        if (typeof position !== 'string' && typeof position !== 'number') {\n            throw new Error('Position must be a string or a number');\n        }\n        var entry = { key: key, value: value };\n        if (position) {\n            entry.position = position;\n        }\n        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {\n            return item.key === key;\n        });\n        if (indexOfItemWithTheSameKey === -1) {\n            this._registry.push(entry);\n        } else {\n            this._registry[indexOfItemWithTheSameKey] = entry;\n        }\n        return value;\n    }\n    get(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return null;\n        }\n        var result = this._registry.find(function (item) {\n            return item.key === key;\n        });\n        return result ? result.value : null;\n    }\n    _getChildrenWrapped(searchKey) {\n        var unsortedChildren = this._registry.filter(function (item) {\n            return item.key.indexOf(searchKey + '/') === 0;\n        });\n        return (0, _positionalArraySorter2.default)(unsortedChildren);\n    }\n    getChildrenAsObject(searchKey) {\n        var result = {};\n        this._getChildrenWrapped(searchKey).forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getChildren(searchKey) {\n        return this._getChildrenWrapped(searchKey).map(function (item) {\n            return item.value;\n        });\n    }\n    has(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return false;\n        }\n        return Boolean(this._registry.find(function (item) {\n            return item.key === key;\n        }));\n    }\n    _getAllWrapped() {\n        return (0, _positionalArraySorter2.default)(this._registry);\n    }\n    getAllAsObject() {\n        var result = {};\n        this._getAllWrapped().forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getAllAsList() {\n        return this._getAllWrapped().map(function (item) {\n            return Object.assign({ id: item.key }, item.value);\n        });\n    }\n};\n//# sourceMappingURL=SynchronousRegistry.js.map\n\nexports.default = SynchronousRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nvar _SynchronousMetaRegistry = __webpack_require__(/*! ./SynchronousMetaRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js\");\n\nvar _SynchronousMetaRegistry2 = _interopRequireDefault(_SynchronousMetaRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.SynchronousRegistry = _SynchronousRegistry2.default;\nexports.SynchronousMetaRegistry = _SynchronousMetaRegistry2.default;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-guest-frame/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-guest-frame/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiGuestFrameDom;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-guest-frame/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().React;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar positionalArraySorter = function positionalArraySorter(subject) {\n    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'position';\n    var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';\n\n    var positionAccessor = typeof position === 'string' ? function (value) {\n        return value[position];\n    } : position;\n    var indexMapping = {};\n    var middleKeys = {};\n    var startKeys = {};\n    var endKeys = {};\n    var beforeKeys = {};\n    var afterKeys = {};\n    subject.forEach(function (item, index) {\n        var key = item[idKey] ? item[idKey] : String(index);\n        indexMapping[key] = index;\n        var positionValue = positionAccessor(item);\n        var position = String(positionValue ? positionValue : index);\n        var invalid = false;\n        if (position.startsWith('start')) {\n            var weightMatch = position.match(/start\\s+(\\d+)/);\n            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;\n            if (!startKeys[weight]) {\n                startKeys[weight] = [];\n            }\n            startKeys[weight].push(key);\n        } else if (position.startsWith('end')) {\n            var _weightMatch = position.match(/end\\s+(\\d+)/);\n            var _weight = _weightMatch && _weightMatch[1] ? Number(_weightMatch[1]) : 0;\n            if (!endKeys[_weight]) {\n                endKeys[_weight] = [];\n            }\n            endKeys[_weight].push(key);\n        } else if (position.startsWith('before')) {\n            var match = position.match(/before\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!match) {\n                invalid = true;\n            } else {\n                var reference = match[1];\n                var _weight2 = match[3] ? Number(match[3]) : 0;\n                if (!beforeKeys[reference]) {\n                    beforeKeys[reference] = {};\n                }\n                if (!beforeKeys[reference][_weight2]) {\n                    beforeKeys[reference][_weight2] = [];\n                }\n                beforeKeys[reference][_weight2].push(key);\n            }\n        } else if (position.startsWith('after')) {\n            var _match = position.match(/after\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!_match) {\n                invalid = true;\n            } else {\n                var _reference = _match[1];\n                var _weight3 = _match[3] ? Number(_match[3]) : 0;\n                if (!afterKeys[_reference]) {\n                    afterKeys[_reference] = {};\n                }\n                if (!afterKeys[_reference][_weight3]) {\n                    afterKeys[_reference][_weight3] = [];\n                }\n                afterKeys[_reference][_weight3].push(key);\n            }\n        } else {\n            invalid = true;\n        }\n        if (invalid) {\n            var numberPosition = parseFloat(position);\n            if (isNaN(numberPosition) || !isFinite(numberPosition)) {\n                numberPosition = index;\n            }\n            if (!middleKeys[numberPosition]) {\n                middleKeys[numberPosition] = [];\n            }\n            middleKeys[numberPosition].push(key);\n        }\n    });\n    var resultStart = [];\n    var resultMiddle = [];\n    var resultEnd = [];\n    var processedKeys = [];\n    var sortedWeights = function sortedWeights(dict, asc) {\n        var weights = Object.keys(dict).map(function (x) {\n            return Number(x);\n        }).sort(function (a, b) {\n            return a - b;\n        });\n        return asc ? weights : weights.reverse();\n    };\n    var addToResults = function addToResults(keys, result) {\n        keys.forEach(function (key) {\n            if (processedKeys.indexOf(key) >= 0) {\n                return;\n            }\n            processedKeys.push(key);\n            if (beforeKeys[key]) {\n                var beforeWeights = sortedWeights(beforeKeys[key], true);\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = beforeWeights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var i = _step.value;\n\n                        addToResults(beforeKeys[key][i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n            }\n            result.push(key);\n            if (afterKeys[key]) {\n                var afterWeights = sortedWeights(afterKeys[key], false);\n                var _iteratorNormalCompletion2 = true;\n                var _didIteratorError2 = false;\n                var _iteratorError2 = undefined;\n\n                try {\n                    for (var _iterator2 = afterWeights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                        var _i = _step2.value;\n\n                        addToResults(afterKeys[key][_i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError2 = true;\n                    _iteratorError2 = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                            _iterator2.return();\n                        }\n                    } finally {\n                        if (_didIteratorError2) {\n                            throw _iteratorError2;\n                        }\n                    }\n                }\n            }\n        });\n    };\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n        for (var _iterator3 = sortedWeights(startKeys, false)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n            var i = _step3.value;\n\n            addToResults(startKeys[i], resultStart);\n        }\n    } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion3 && _iterator3.return) {\n                _iterator3.return();\n            }\n        } finally {\n            if (_didIteratorError3) {\n                throw _iteratorError3;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion4 = true;\n    var _didIteratorError4 = false;\n    var _iteratorError4 = undefined;\n\n    try {\n        for (var _iterator4 = sortedWeights(middleKeys, true)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n            var _i2 = _step4.value;\n\n            addToResults(middleKeys[_i2], resultMiddle);\n        }\n    } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion4 && _iterator4.return) {\n                _iterator4.return();\n            }\n        } finally {\n            if (_didIteratorError4) {\n                throw _iteratorError4;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion5 = true;\n    var _didIteratorError5 = false;\n    var _iteratorError5 = undefined;\n\n    try {\n        for (var _iterator5 = sortedWeights(endKeys, true)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n            var _i3 = _step5.value;\n\n            addToResults(endKeys[_i3], resultEnd);\n        }\n    } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion5 && _iterator5.return) {\n                _iterator5.return();\n            }\n        } finally {\n            if (_didIteratorError5) {\n                throw _iteratorError5;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion6 = true;\n    var _didIteratorError6 = false;\n    var _iteratorError6 = undefined;\n\n    try {\n        for (var _iterator6 = Object.keys(beforeKeys)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n            var key = _step6.value;\n\n            if (processedKeys.indexOf(key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion8 = true;\n            var _didIteratorError8 = false;\n            var _iteratorError8 = undefined;\n\n            try {\n                for (var _iterator8 = sortedWeights(beforeKeys[key], false)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {\n                    var _i4 = _step8.value;\n\n                    addToResults(beforeKeys[key][_i4], resultStart);\n                }\n            } catch (err) {\n                _didIteratorError8 = true;\n                _iteratorError8 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion8 && _iterator8.return) {\n                        _iterator8.return();\n                    }\n                } finally {\n                    if (_didIteratorError8) {\n                        throw _iteratorError8;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError6 = true;\n        _iteratorError6 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion6 && _iterator6.return) {\n                _iterator6.return();\n            }\n        } finally {\n            if (_didIteratorError6) {\n                throw _iteratorError6;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion7 = true;\n    var _didIteratorError7 = false;\n    var _iteratorError7 = undefined;\n\n    try {\n        for (var _iterator7 = Object.keys(afterKeys)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {\n            var _key = _step7.value;\n\n            if (processedKeys.indexOf(_key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion9 = true;\n            var _didIteratorError9 = false;\n            var _iteratorError9 = undefined;\n\n            try {\n                for (var _iterator9 = sortedWeights(afterKeys[_key], false)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {\n                    var _i5 = _step9.value;\n\n                    addToResults(afterKeys[_key][_i5], resultMiddle);\n                }\n            } catch (err) {\n                _didIteratorError9 = true;\n                _iteratorError9 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion9 && _iterator9.return) {\n                        _iterator9.return();\n                    }\n                } finally {\n                    if (_didIteratorError9) {\n                        throw _iteratorError9;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError7 = true;\n        _iteratorError7 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion7 && _iterator7.return) {\n                _iterator7.return();\n            }\n        } finally {\n            if (_didIteratorError7) {\n                throw _iteratorError7;\n            }\n        }\n    }\n\n    var sortedKeys = [].concat(resultStart, resultMiddle, resultEnd);\n    return sortedKeys.map(function (key) {\n        return indexMapping[key];\n    }).map(function (i) {\n        return subject[i];\n    });\n};\nexports.default = positionalArraySorter;\n//# sourceMappingURL=positionalArraySorter.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js?");

/***/ }),

/***/ "./src/components/MoveButton.js":
/*!**************************************!*\
  !*** ./src/components/MoveButton.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _dec, _dec2, _dec3, _class;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js\");\n\nvar _neosUiReduxStore = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js\");\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _neosUiDecorators = __webpack_require__(/*! @neos-project/neos-ui-decorators */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js\");\n\nvar _neosUiGuestFrame = __webpack_require__(/*! @neos-project/neos-ui-guest-frame */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-guest-frame/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AddButton = (_dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({\n\tsiteNodeSelector: _neosUiReduxStore.selectors.CR.Nodes.siteNodeSelector,\n\tfocusedNodeIdentifier: _neosUiReduxStore.selectors.CR.Nodes.focusedNodeIdentifierSelector,\n\tfocusedSelector: _neosUiReduxStore.selectors.CR.Nodes.focusedSelector\n})), _dec2 = (0, _neosUiDecorators.neos)(function (globalRegistry) {\n\treturn {\n\t\ti18nRegistry: globalRegistry.get('i18n'),\n\t\tnodeTypesRegistry: globalRegistry.get('@neos-project/neos-ui-contentrepository')\n\t};\n}), _dec3 = (0, _reactRedux.connect)(function (state, _ref) {\n\tvar nodeTypesRegistry = _ref.nodeTypesRegistry;\n\n\tvar canBePastedSelector = _neosUiReduxStore.selectors.CR.Nodes.makeCanBePastedSelector(nodeTypesRegistry);\n\n\treturn function (state, _ref2) {\n\t\tvar contextPath = _ref2.contextPath;\n\n\t\tvar clipboardNodesContextPaths = _neosUiReduxStore.selectors.CR.Nodes.clipboardNodesContextPathsSelector(state);\n\t\tvar canBePasted = clipboardNodesContextPaths.every(function (clipboardNodeContextPath) {\n\t\t\treturn canBePastedSelector(state, {\n\t\t\t\tsubject: clipboardNodeContextPath,\n\t\t\t\treference: contextPath\n\t\t\t});\n\t\t});\n\n\t\treturn { canBePasted: canBePasted };\n\t};\n}, {\n\tpasteNode: _neosUiReduxStore.actions.CR.Nodes.paste,\n\tfocusNode: _neosUiReduxStore.actions.CR.Nodes.focus\n}), _dec(_class = _dec2(_class = _dec3(_class = class AddButton extends _react.Component {\n\n\tconstructor(props) {\n\t\tsuper(props);\n\t}\n\n\trender() {\n\t\tvar _props = this.props,\n\t\t    i18nRegistry = _props.i18nRegistry,\n\t\t    focusedSelector = _props.focusedSelector,\n\t\t    pasteNode = _props.pasteNode,\n\t\t    focusNode = _props.focusNode,\n\t\t    canBePasted = _props.canBePasted;\n\n\n\t\tvar findParentWithAttribute = function findParentWithAttribute(element, attributeName) {\n\t\t\tif (!element) {\n\t\t\t\treturn null;\n\t\t\t}\n\t\t\tif (element.getAttribute(attributeName)) {\n\t\t\t\treturn element;\n\t\t\t}\n\t\t\treturn findParentWithAttribute(element.parentElement, attributeName);\n\t\t};\n\n\t\tvar createScroller = function createScroller(body, cssClassName) {\n\t\t\tvar newElement = document.createElement('div');\n\t\t\tnewElement.className = cssClassName;\n\t\t\tnewElement.dataset.scroller = '1';\n\t\t\tbody.appendChild(newElement);\n\t\t};\n\n\t\t// const canBePasted = (node, contextPathToPaste) => {\n\t\t// \tconst nodeContextPath = node.getAttribute('data-__neos-node-contextpath');\n\t\t// \tif(node.parentElement.getAttribute('data-__neos-node-contextpath') === contextPathToPaste) {\n\t\t// \t\treturn false;\n\t\t// \t} else {\n\t\t// \t\tcanBePasted(node.parentElement, contextPathToPaste);\n\t\t// \t}\n\t\t// \treturn true;\n\t\t// }\n\n\t\tvar handleMouseDown = function handleMouseDown() {\n\n\t\t\tvar guestFrame = document.getElementsByName('neos-content-main')[0];\n\t\t\tvar iframeDocument = guestFrame.contentDocument || guestFrame.contentWindow.document;\n\n\t\t\tvar body = iframeDocument.getElementsByTagName('body')[0];\n\n\t\t\tdocument.getElementById('neos-ContentTree-CutSelectedNode').click();\n\t\t\tvar node = (0, _neosUiGuestFrame.findNodeInGuestFrame)(focusedSelector.contextPath);\n\n\t\t\tvar dummyElement = node.cloneNode(true);\n\t\t\tdummyElement.classList.add('movablenode');\n\n\t\t\tnode.parentNode.appendChild(dummyElement);\n\n\t\t\tvar contextPathToPaste = false;\n\t\t\tvar fusionPathToPaste = false;\n\n\t\t\tvar pasteNodeInTarget = function pasteNodeInTarget(contextPathToPaste, fusionPathToPaste) {\n\t\t\t\t// if(canBePasted) {\n\t\t\t\t// \tpasteNode(contextPathToPaste, fusionPathToPaste);\n\t\t\t\t// } else {\n\t\t\t\t// \tconsole.log(\"Node can't be pasted\")\n\t\t\t\t// }\n\t\t\t\tdocument.getElementById('neos-ContentTree-PasteClipBoardNode').click();\n\t\t\t};\n\n\t\t\tvar scrollInterval = false;\n\n\t\t\tvar handleScroll = function handleScroll(event) {\n\t\t\t\tvar elementUnderMouse = iframeDocument.elementFromPoint(event.clientX, event.clientY);\n\t\t\t\tvar scrollerElement = findParentWithAttribute(elementUnderMouse, 'data-scroller');\n\t\t\t\tif (scrollerElement) {\n\t\t\t\t\tif (scrollerElement.classList.contains('scroller-top')) {\n\t\t\t\t\t\tscrollInterval = setInterval(function () {\n\t\t\t\t\t\t\tguestFrame.contentWindow.scrollBy({\n\t\t\t\t\t\t\t\ttop: -200,\n\t\t\t\t\t\t\t\tbehavior: 'smooth'\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}, 200);\n\t\t\t\t\t}\n\t\t\t\t\tif (scrollerElement.classList.contains('scroller-bottom')) {\n\t\t\t\t\t\tscrollInterval = setInterval(function () {\n\t\t\t\t\t\t\tguestFrame.contentWindow.scrollBy({\n\t\t\t\t\t\t\t\ttop: +200,\n\t\t\t\t\t\t\t\tbehavior: 'smooth'\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}, 200);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tvar moveHandler = function moveHandler(event) {\n\t\t\t\tdummyElement.style.left = event.clientX + 'px';\n\t\t\t\tdummyElement.style.top = event.clientY + 'px';\n\n\t\t\t\tvar elementUnderMouse = iframeDocument.elementFromPoint(event.clientX, event.clientY);\n\t\t\t\tvar elementWithAttribute = findParentWithAttribute(elementUnderMouse, 'data-__neos-node-contextpath');\n\t\t\t\tif (elementWithAttribute) {\n\t\t\t\t\tcontextPathToPaste = elementWithAttribute.getAttribute('data-__neos-node-contextpath');\n\t\t\t\t\tfusionPathToPaste = elementWithAttribute.getAttribute('data-__neos-fusion-path');\n\t\t\t\t\tfocusNode(contextPathToPaste);\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tiframeDocument.addEventListener('mousemove', moveHandler);\n\t\t\tcreateScroller(body, 'scroller-top');\n\t\t\tcreateScroller(body, 'scroller-bottom');\n\n\t\t\tbody.querySelector('.scroller-top').addEventListener('mouseover', handleScroll);\n\t\t\tbody.querySelector('.scroller-top').addEventListener('mouseout', function () {\n\t\t\t\tclearInterval(scrollInterval);\n\t\t\t});\n\n\t\t\tbody.querySelector('.scroller-bottom').addEventListener('mouseover', handleScroll);\n\t\t\tbody.querySelector('.scroller-bottom').addEventListener('mouseout', function () {\n\t\t\t\tclearInterval(scrollInterval);\n\t\t\t});\n\n\t\t\tvar upHandler = function upHandler() {\n\t\t\t\tiframeDocument.removeEventListener('mousemove', moveHandler);\n\t\t\t\tdummyElement.remove();\n\t\t\t\tif (body.querySelector('.scroller-top') && body.querySelector('.scroller-bottom')) {\n\t\t\t\t\tbody.querySelector('.scroller-top').remove();\n\t\t\t\t\tbody.querySelector('.scroller-bottom').remove();\n\t\t\t\t}\n\t\t\t\tif (contextPathToPaste && fusionPathToPaste) {\n\t\t\t\t\tpasteNodeInTarget(contextPathToPaste, fusionPathToPaste);\n\t\t\t\t\tcontextPathToPaste = false;\n\t\t\t\t\tfusionPathToPaste = false;\n\t\t\t\t}\n\t\t\t};\n\t\t\tiframeDocument.addEventListener('mouseup', upHandler);\n\t\t};\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ onMouseDown: function onMouseDown() {\n\t\t\t\t\treturn handleMouseDown();\n\t\t\t\t} },\n\t\t\t_react2.default.createElement(_reactUiComponents.IconButton, {\n\t\t\t\tid: 'neos-InlineToolbar-MoveNode',\n\t\t\t\ticon: 'fas fa-arrows-alt',\n\t\t\t\tonClick: function onClick() {},\n\t\t\t\thoverStyle: 'brand',\n\t\t\t\ttitle: i18nRegistry.translate(unescape('NeosRulez.Neos.MoveableNodes:Main:label.moveButton'))\n\t\t\t})\n\t\t);\n\t}\n}) || _class) || _class) || _class);\nexports.default = AddButton;\n\n//# sourceURL=webpack:///./src/components/MoveButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./manifest */ \"./src/manifest.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/index.js\");\n\nvar _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);\n\nvar _MoveButton = __webpack_require__(/*! ./components/MoveButton */ \"./src/components/MoveButton.js\");\n\nvar _MoveButton2 = _interopRequireDefault(_MoveButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _neosUiExtensibility2.default)('NeosRulez.Neos.MoveableNodes', {}, function (globalRegistry, _ref) {\n\tvar frontendConfiguration = _ref.frontendConfiguration;\n\n\tvar guestFrameRegistry = globalRegistry.get('@neos-project/neos-ui-guest-frame');\n\tguestFrameRegistry.set('NodeToolbar/Buttons/MoveButton', AddMoveButton());\n});\n\nvar AddMoveButton = function AddMoveButton() {\n\treturn class addMoveButton extends _react.PureComponent {\n\n\t\tconstructor(props) {\n\t\t\tsuper(props);\n\t\t}\n\n\t\trender() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ style: { float: 'left' } },\n\t\t\t\t_react2.default.createElement(_MoveButton2.default, null)\n\t\t\t);\n\t\t}\n\t};\n};\n\n//# sourceURL=webpack:///./src/manifest.js?");

/***/ })

/******/ });