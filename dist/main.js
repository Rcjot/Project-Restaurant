/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gbpBgCoco.png */ \"./src/images/gbpBgCoco.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n:root {\n    --header-height: 20px;\n    --footer-height: 20px;\n    --content-height: calc(100vh - calc(var(--header-height) + var(--footer-height)));\n    --Gamboge: rgb(229, 167, 16, 0.6);\n    --DawnPink: rgb(247, 240, 239);\n    --Cowboy: rgb(81, 44, 42, 0.8);\n    --MuleFawn: rgb(158, 76, 52, 0.6);\n}\nbutton {\n    cursor: pointer;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); \n}\n\nheader {\n    min-height: var(--header-height);\n    display: flex;\n    background-color: white;\n    align-items: center;\n    color: white;\n    padding: 16px 64px;\n    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n}\nnav {\n    display: flex;\n    gap: 64px;\n}\n\n#content{\n    flex: 1;\n}\n\n/* start Home  */\n    #contentHome {\n        flex: 1;\n        max-height: var(--content-height) ;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n\n    }\n\n    #right {\n        display: flex;\n        flex-direction: column;\n        justify-content: start;\n        padding-top: 200px;\n        gap: 30px;\n    }\n    #hr {\n        width: 90%;\n    }\n    #right h1 {\n        font-size:5em;\n    }\n    #right p {\n        font-size: 1.3em;\n    }\n\n    #reserveBtn {\n        margin-top: 160px;\n        width: 20%;\n    }\n/* Home end */\n\n/* start Menu */\n    #contentMenu {\n        margin: 128px 128px;\n        flex: 1;\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(1fr, 6);\n        gap: 32px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .raanaDiv{\n        display: flex;\n        align-items: center;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n    }\n\n    .raana{\n        -moz-transform: scaleX(-1);\n        -o-transform: scaleX(-1);\n        -webkit-transform: scaleX(-1);\n        transform: scaleX(-1);\n        filter: FlipH;\n        -ms-filter: \"FlipH\";\n        border-radius: 64px;\n        width: 150px;\n\n    }\n    \n    #menuFood {\n        display: flex;\n        align-items: center;\n        gap: 100px;\n    }\n\n    .foodimg {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 32px;\n        padding: 10px 0px;\n        background-color: var(--MuleFawn);\n        width: 450px;\n        max-height: 200px;\n        padding: 10px 32px;\n    }\n\n    .secondMenu {\n        justify-content: flex-end;\n    }\n\n    .fooddesc {\n        display: flex;\n        gap: 16px;\n        justify-content: center;\n        flex-direction: column;\n    }\n\n/* Menu end */\n\n/* start About */\n    #contentAbout {\n        padding-top: 30px;\n        flex: 1;\n        display: flex;\n    }\n    .aboutRight {\n        padding-top: 8%;\n        display: flex;\n        flex-direction: column;\n        gap: 32px;\n        width: 40%;\n    }\n\n/* About end */\n\n/* start images */\n    .image {\n        margin-right: auto;\n    }\n    .cocoslogo {\n        height: 70px;\n    }\n    .cocoallimg {\n        height: 800px;\n    }\n    #food {\n        height: 200px;\n    }\n    .cocoran {\n        height: 800px;\n    }\n\n/* images end */\n\nfooter {\n    display: flex;\n    background-color: var(--Cowboy);\n    min-height: var(--footer-height);\n    justify-content: center;\n    height: fit-content;\n    flex-grow: 0;\n    color: white;\n}\n\n/* nav buttons */\n.navBtn {\n    background-color: transparent;\n    border: 0px;\n    font-size: 1.3em;\n}\n\n/* nav buttons */\n\n/* reserve button */\n    #reserveBtn {\n    background: var(--MuleFawn);\n    border: 1px solid var(--MuleFawn);\n    border-radius: 6px;\n    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\n    box-sizing: border-box;\n    color: #FFFFFF;\n    cursor: pointer;\n    display: inline-block;\n    font-family: nunito,roboto,proxima-nova,\"proxima nova\",sans-serif;\n    font-size: 16px;\n    font-weight: 800;\n    line-height: 16px;\n    min-height: 40px;\n    outline: 0;\n    padding: 12px 14px;\n    text-align: center;\n    text-rendering: geometricprecision;\n    text-transform: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    }\n\n    #reserveBtn:hover,\n    #reserveBtn:active {\n    background-color: initial;\n    background-position: 0 0;\n    color: var(--MuleFawn);\n    }\n\n    #reserveBtn:active {\n    opacity: .5;\n    }\n/* button */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_cocoran_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cocoran.png */ \"./src/images/cocoran.png\");\n\n\nconst aboutDisplay = {\n    content: document.querySelector('#content'),\n    init: function(){\n        this.content.innerHTML = '';\n        this.content.setAttribute('id', 'contentAbout');\n\n        this.appendImg();\n        this.appendRight();\n    },\n    appendImg: function(){\n        const cocoranImg = new Image();\n        cocoranImg.src = _images_cocoran_png__WEBPACK_IMPORTED_MODULE_0__;\n        this.content.appendChild(cocoranImg);\n        cocoranImg.classList.add('cocoran');\n    },\n    appendRight: function(){\n        const aboutRight = document.createElement('div');\n        aboutRight.classList.add('aboutRight');\n        const h1 = document.createElement('h1');\n        h1.textContent = 'About';\n        const p1 = document.createElement('p');\n        p1.textContent = \"A collaboration between Bang Dream franchise and Coco's Restaurant. Lots of Bang Dream merchandise and fun limited delicacies are available during this event.\";\n        const p2 = document.createElement('p');\n        p2.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus eveniet? Maiores libero commodi laudantium labore, nostrum pariatur itaque minima reiciendis ut alias in, doloremque quas cumque assumenda harum id.\";\n        const p3 = document.createElement('p');\n        p3.textContent = \"Sorry I'm too lazy to style more, especially typography :(\";\n\n        this.content.appendChild(aboutRight);\n        aboutRight.appendChild(h1);\n        aboutRight.appendChild(p1);\n        aboutRight.appendChild(p2);\n        aboutRight.appendChild(p3);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutDisplay);\n\n//# sourceURL=webpack://project-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_cocoall2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cocoall2.png */ \"./src/images/cocoall2.png\");\n\n\nconst homeDisplay = {\n    content: document.querySelector('#content'),\n    test: function(){\n        alert('asdflikj');\n    },\n    init: function() {\n        this.content.innerHTML = '';\n\n        this.content.setAttribute(\"id\", \"contentHome\");\n        this.appendLeftRight();\n        this.appendLeftContent();\n        this.appendRightContent();\n    },\n    appendLeftRight: function() {\n        this.left = document.createElement('div');\n        this.left.setAttribute(\"id\", \"left\");\n        this.right = document.createElement('div');\n        this.right.setAttribute('id', 'right');\n        this.content.appendChild(this.left);\n        this.content.appendChild(this.right);\n    },\n    appendLeftContent: function() {\n        const cocoallImgContainer = document.createElement('div');\n        const cocoallImg = new Image();\n        cocoallImg.src = _images_cocoall2_png__WEBPACK_IMPORTED_MODULE_0__;\n        cocoallImgContainer.appendChild(cocoallImg);\n        cocoallImg.classList.add('cocoallimg');\n        this.left.appendChild(cocoallImgContainer);\n    },\n    appendRightContent: function(){\n        const titleH1 = document.createElement('h1');\n        titleH1.textContent = \"COCO'S × バンドリ\"\n        const hr = document.createElement('hr');\n        hr.setAttribute('id', 'hr');\n        const p = document.createElement('p');\n        p.textContent = \"A collaboration that brings great delicacies to a whole new experience!\";\n        const reserveBtn = document.createElement('button');\n        reserveBtn.setAttribute('id', 'reserveBtn');\n        reserveBtn.textContent = 'Reserve Now';\n        this.right.appendChild(titleH1);\n        this.right.appendChild(hr);\n        this.right.appendChild(p);\n        this.right.appendChild(reserveBtn);\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeDisplay);\n\n//# sourceURL=webpack://project-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _images_cocos_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cocos.png */ \"./src/images/cocos.png\");\n\n\n\n\n\n\nconsole.log('alsdfi');\n\n(function(){\n    const mainModule = {\n        init: function(){\n            _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n            this.cacheDOM();\n            this.btnFunctions();\n            this.cacheLogo();\n        },\n        cacheDOM: function(){\n            this.homeBtn = document.querySelector('#homebtn');\n            this.menuBtn = document.querySelector('#menubtn');\n            this.aboutBtn = document.querySelector('#aboutbtn');\n        },\n        cacheLogo: function(){\n            const cocosContain = document.querySelector('.image');\n            const cocosLogo = new Image();\n            cocosLogo.src = _images_cocos_png__WEBPACK_IMPORTED_MODULE_4__;\n            cocosLogo.classList.add('cocoslogo'); \n            cocosContain.appendChild(cocosLogo);\n        },\n        btnFunctions: function(){\n            this.homeBtn.addEventListener('click', () => {\n                _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n            });\n            this.menuBtn.addEventListener('click', () => {\n                _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n            });\n            this.aboutBtn.addEventListener('click', () => {\n                _about__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n            })\n        },\n    }\n    mainModule.init();\n})();\n\n\n//# sourceURL=webpack://project-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_beefstew_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/beefstew.png */ \"./src/images/beefstew.png\");\n/* harmony import */ var _images_omurice_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/omurice.png */ \"./src/images/omurice.png\");\n/* harmony import */ var _images_milkcoco_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/milkcoco.png */ \"./src/images/milkcoco.png\");\n/* harmony import */ var _images_milfleure_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/milfleure.png */ \"./src/images/milfleure.png\");\n/* harmony import */ var _images_parfey_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/parfey.png */ \"./src/images/parfey.png\");\n/* harmony import */ var _images_matcha_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/matcha.png */ \"./src/images/matcha.png\");\n/* harmony import */ var _images_raana_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/raana.png */ \"./src/images/raana.png\");\n\n\n\n\n\n\n\n\nconst menuDisplay = {\n    content: document.querySelector('#content'),\n    Foods: {\n        myBeefstew: {\n            foodName: 'beefstew',\n            img: _images_beefstew_png__WEBPACK_IMPORTED_MODULE_0__,\n            h1Name: 'Luxurious Beefstew Hamburger',\n            pText: 'Delicious combination of beefstew and burger steak!',\n            h2Price: '¥1,190',\n            second: false,\n        },\n        myOmurice: {\n            foodName: 'omurice',\n            img: _images_omurice_png__WEBPACK_IMPORTED_MODULE_1__,\n            h1Name: 'Colorfuly Melty Omurice',\n            pText: 'Omurice with softly cooked eggs! <br> A colorful enticing dish!',\n            h2Price: '¥990',\n            second: true,\n        },\n        myMilkcoco: {\n            foodName: 'milkcoco',\n            img: _images_milkcoco_png__WEBPACK_IMPORTED_MODULE_2__,\n            h1Name: 'Honey Milk Coco',\n            pText: 'Milk cream filled baked coco topped off with plenty of sweet honey!',\n            h2Price: '¥790',\n            second: false,\n        },\n        myMilfleure: {\n            foodName: 'milfleure',\n            img: _images_milfleure_png__WEBPACK_IMPORTED_MODULE_3__,\n            h1Name: \"Rockin' Millefeuille\",\n            pText: 'Tall tower of brownies, icecream, and chocolate.<br> Having the usual exquisite taste of Millefeuille!',\n            h2Price: '¥790',\n            second: true,\n        },\n        myParfey: {\n            foodName: 'parfey',\n            img: _images_parfey_png__WEBPACK_IMPORTED_MODULE_4__,\n            h1Name: \"Classic Honey Tea Parfait\",\n            pText: \"Honey's alluring taste is quite shown boldly in this desert. <br> A strong recommendation to savor!\",\n            h2Price: '¥890',\n            second: false,\n        },\n        myMatcha: {\n            foodName: 'matcha',\n            img: _images_matcha_png__WEBPACK_IMPORTED_MODULE_5__,\n            h1Name: \"Tapioca Matcha Milk\",\n            h2Price: '¥500',\n            second: true,\n        },\n\n    },\n    init: function(){\n        this.content.innerHTML = '';\n\n        this.content.setAttribute(\"id\", \"contentMenu\");\n\n        this.createMenuFood('myBeefstew');\n        this.createMenuFood('myOmurice');\n        this.createMenuFood('myMilkcoco');\n        this.createMenuFood('myMilfleure');\n        this.createMenuFood('myParfey');\n        this.createMenuFood('myMatcha');\n\n    },\n    createMenuFood: function(myFood){\n        const food = this.Foods[myFood];\n\n        const menuFood = document.createElement('div');\n        menuFood.classList.add(`${food.foodName}`);\n        menuFood.setAttribute('id', 'menuFood');\n\n        const foodImgContainer = document.createElement('div');\n        foodImgContainer.classList.add('foodimg');\n\n        const fooddesc = document.createElement('div');\n        fooddesc.classList.add('fooddesc');\n\n        const foodImg = new Image();\n        foodImg.src = food.img;\n        foodImg.setAttribute('id', 'food');\n        \n\n        const h1Name = document.createElement('h1');\n        h1Name.textContent = `${food.h1Name}`;\n        fooddesc.appendChild(h1Name);\n\n        const h2Price = document.createElement('h2');\n        h2Price.textContent = `${food.h2Price}`;\n        \n        if (myFood === 'myMatcha'){\n            const raanaDiv = document.createElement('div');\n            raanaDiv.classList.add('raanaDiv');\n\n            const raanaImg = new Image();\n            raanaImg.src = _images_raana_png__WEBPACK_IMPORTED_MODULE_6__;\n            raanaImg.classList.add('raana');\n            const raanaP = document.createElement('p');\n            raanaP.textContent = 'Raana Approved!';\n            raanaDiv.appendChild(raanaImg);\n            raanaDiv.appendChild(raanaP);      \n            fooddesc.appendChild(raanaDiv);\n\n        }else{\n            const pText = document.createElement('p');\n            pText.innerHTML = food.pText;\n            fooddesc.appendChild(pText);\n        }\n\n\n        if (food.second) {\n            console.log(food);\n            menuFood.classList.add('secondMenu');\n            menuFood.appendChild(fooddesc);\n            menuFood.appendChild(foodImgContainer);\n        }else{\n            menuFood.appendChild(foodImgContainer);\n            menuFood.appendChild(fooddesc);\n        }\n\n        foodImgContainer.appendChild(foodImg);\n\n        fooddesc.appendChild(h2Price);\n\n        this.content.appendChild(menuFood);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuDisplay);\n\n//# sourceURL=webpack://project-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/images/beefstew.png":
/*!*********************************!*\
  !*** ./src/images/beefstew.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b40ea1ea05fc91a314c7.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/beefstew.png?");

/***/ }),

/***/ "./src/images/cocoall2.png":
/*!*********************************!*\
  !*** ./src/images/cocoall2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"311cbfc9bccb856286d3.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/cocoall2.png?");

/***/ }),

/***/ "./src/images/cocoran.png":
/*!********************************!*\
  !*** ./src/images/cocoran.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b8cbe0ed8963e6acd22.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/cocoran.png?");

/***/ }),

/***/ "./src/images/cocos.png":
/*!******************************!*\
  !*** ./src/images/cocos.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2b6babc24c1cb2db573.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/cocos.png?");

/***/ }),

/***/ "./src/images/gbpBgCoco.png":
/*!**********************************!*\
  !*** ./src/images/gbpBgCoco.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93f343ff3a51eadb466c.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/gbpBgCoco.png?");

/***/ }),

/***/ "./src/images/matcha.png":
/*!*******************************!*\
  !*** ./src/images/matcha.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b35e843bfe698118c581.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/matcha.png?");

/***/ }),

/***/ "./src/images/milfleure.png":
/*!**********************************!*\
  !*** ./src/images/milfleure.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4eba7ae17271b705380.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/milfleure.png?");

/***/ }),

/***/ "./src/images/milkcoco.png":
/*!*********************************!*\
  !*** ./src/images/milkcoco.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed7a5bcaaaacc8bc7306.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/milkcoco.png?");

/***/ }),

/***/ "./src/images/omurice.png":
/*!********************************!*\
  !*** ./src/images/omurice.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b9e6399ba9346149728.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/omurice.png?");

/***/ }),

/***/ "./src/images/parfey.png":
/*!*******************************!*\
  !*** ./src/images/parfey.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2365a2807c0c31a97503.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/parfey.png?");

/***/ }),

/***/ "./src/images/raana.png":
/*!******************************!*\
  !*** ./src/images/raana.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"341609219aab1728fa16.png\";\n\n//# sourceURL=webpack://project-restaurant/./src/images/raana.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;