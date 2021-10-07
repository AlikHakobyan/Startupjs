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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main/routes.js":
/*!************************!*\
  !*** ./main/routes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((components={})=>[{path:'/',exact:true,component:components.PHome},{path:'/vpeeps',exact:true,component:components.PAbout}]);

/***/ }),

/***/ "./model/TestThingModel.js":
/*!*********************************!*\
  !*** ./model/TestThingModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestThingModel; });
/* harmony import */ var startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/orm */ "./node_modules/startupjs/orm.js");
class TestThingModel extends startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]{async addSelf(){await this.root.add(this.getCollection(),{id:this.getId(),counter:0});}async reset(){await this.set('counter',0);}}

/***/ }),

/***/ "./model/index.js":
/*!************************!*\
  !*** ./model/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/i18n/model */ "./node_modules/startupjs/i18n/model.js");
/* harmony import */ var _TestThingModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestThingModel */ "./model/TestThingModel.js");
/* harmony default export */ __webpack_exports__["default"] = (function(racer){Object(startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__["default"])(racer);racer.orm('testThings.*',_TestThingModel__WEBPACK_IMPORTED_MODULE_1__["default"]);});

/***/ }),

/***/ "./node_modules/@startupjs/app/server/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@startupjs/app/server/index.js ***!
  \*****************************************************/
/*! exports provided: initApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initApp */ "./node_modules/@startupjs/app/server/initApp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return _initApp__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@startupjs/app/server/initApp.js":
/*!*******************************************************!*\
  !*** ./node_modules/@startupjs/app/server/initApp.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApp; });
async function initApp(ee,criticalVersion){if(criticalVersion){ee.on('backend',async backend=>{const model=backend.createModel();const $version=model.at('service.version');await $version.subscribe();const version=$version.get();if(!version){await model.addAsync('service',{id:'version',criticalVersion});}else{await $version.setDiffDeep('criticalVersion',criticalVersion);}console.log('Critical version:',JSON.stringify(criticalVersion,null,2));model.close();});}ee.on('routes',expressApp=>{expressApp.get('/api/serverSession',function(req,res){const restoreUrl=req.session.restoreUrl;if(restoreUrl){delete req.session.restoreUrl;req.model.set('_session.restoreUrl',restoreUrl);}return res.json(req.model.get('_session'));});expressApp.post('/api/restore-url',function(req,res){const{restoreUrl}=req.body;req.session.restoreUrl=restoreUrl;res.sendStatus(200);});});}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/client/app/routes.js":
/*!***********************************************************!*\
  !*** ./node_modules/@startupjs/i18n/client/app/routes.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(components={}){return[{path:'/i18n',exact:true,component:components.PI18n,filters:[i18nPageAccess]}];});function i18nPageAccess(model,next,redirect){return model.scope('i18nTranslations').i18nPageAccess(model,next,redirect);}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/isomorphic/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/i18n/isomorphic/index.js ***!
  \**********************************************************/
/*! exports provided: encodePath, decodePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodePath", function() { return encodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodePath", function() { return decodePath; });
const encodePath=str=>str.replace(/\./g,'%2E');const decodePath=str=>str.replace(/%2E/g,'.');

/***/ }),

/***/ "./node_modules/@startupjs/i18n/model/BaseTranslationModel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@startupjs/i18n/model/BaseTranslationModel.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseTranslationModel; });
/* harmony import */ var startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/orm */ "./node_modules/startupjs/orm.js");
const DRAFT_POSTFIX='--draft';class BaseTranslationModel extends startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]{async createNew(){const collection=this.getCollection();const draftId=this.getDraftId();await Promise.all([this.create(),this.root.add(collection,{id:draftId})]);}getDraftId(){return this.getId()+DRAFT_POSTFIX;}}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/model/getTranslationsModel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@startupjs/i18n/model/getTranslationsModel.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTranslationsModel; });
/* harmony import */ var startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/orm */ "./node_modules/startupjs/orm.js");
function getTranslationsModel(i18nPageAccess){return class BaseTranslationsModel extends startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]{async addNew(lang){if(typeof lang!=='string'){throw new Error('[@startupjs/i18n] BaseTranslationsModel addNew: '+'lang must be a string');}await this.scope(lang).createNew();return lang;}i18nPageAccess(model,next,redirect){i18nPageAccess(model,next,redirect);}};}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/model/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@startupjs/i18n/model/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTranslationsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslationsModel */ "./node_modules/@startupjs/i18n/model/getTranslationsModel.js");
/* harmony import */ var _BaseTranslationModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseTranslationModel */ "./node_modules/@startupjs/i18n/model/BaseTranslationModel.js");
/* harmony default export */ __webpack_exports__["default"] = (function(racer,i18nPageAccess){if(typeof i18nPageAccess!=='function'){i18nPageAccess=(model,next)=>next();}racer.orm('i18nTranslations',Object(_getTranslationsModel__WEBPACK_IMPORTED_MODULE_0__["default"])(i18nPageAccess));racer.orm('i18nTranslations.*',_BaseTranslationModel__WEBPACK_IMPORTED_MODULE_1__["default"]);});

/***/ }),

/***/ "./node_modules/@startupjs/i18n/server/api/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/i18n/server/api/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resolve */ "resolve");
/* harmony import */ var resolve__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(resolve__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isomorphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../isomorphic */ "./node_modules/@startupjs/i18n/isomorphic/index.js");
const router=express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();router.post('/get-translations',(req,res)=>{let translations;try{translations=JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(getTranslationPath(),{encoding:'utf8'}));}catch{console.error('[@startupjs/i18n]: translations.json not found');}res.json(translations?encodeObjectKeys(translations):{});});router.post('/change-language',(req,res)=>{const{lang}=req.body;let status;if(lang){req.session.lang=lang;status=200;}else{status=400;}res.status(status).end();});function getTranslationPath(){let translationsPath;try{translationsPath=resolve__WEBPACK_IMPORTED_MODULE_2___default.a.sync('@startupjs/babel-plugin-i18n-extract/translations.json');}catch{throw new Error('[@startupjs/i18n]: @startupjs/babel-plugin-i18n-extract not found');}return translationsPath;}function encodeObjectKeys(obj){const newObj={};for(const key in obj){const value=obj[key];newObj[Object(_isomorphic__WEBPACK_IMPORTED_MODULE_3__["encodePath"])(key)]=typeof value==='object'?encodeObjectKeys(value):value;}return newObj;}/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./node_modules/@startupjs/i18n/server/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@startupjs/i18n/server/index.js ***!
  \******************************************************/
/*! exports provided: initI18n, getI18nRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initI18n", function() { return initI18n; });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./node_modules/@startupjs/i18n/server/routes.js");
/* harmony import */ var _client_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../client/app/routes */ "./node_modules/@startupjs/i18n/client/app/routes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getI18nRoutes", function() { return _client_app_routes__WEBPACK_IMPORTED_MODULE_1__["default"]; });

function initI18n(ee,config){if(!ee){throw new Error('[@startupjs/i18n] initI18n: ee is required');}ee.on('routes',_routes__WEBPACK_IMPORTED_MODULE_0__["default"]);ee.on('middleware',expressApp=>{expressApp.use((req,res,next)=>{const lang=req.session.lang;if(lang)req.model.set('_session.lang',lang);next();});});}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/server/routes.js":
/*!*******************************************************!*\
  !*** ./node_modules/@startupjs/i18n/server/routes.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i18nRoutesServer; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/@startupjs/i18n/server/api/index.js");
function i18nRoutesServer(expressApp){expressApp.use('/api/i18n',_api__WEBPACK_IMPORTED_MODULE_0__["default"]);}

/***/ }),

/***/ "./node_modules/@startupjs/init/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@startupjs/init/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./node_modules/@startupjs/init/lib/index.server.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@startupjs/init/lib/index.server.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/index.server.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./node_modules/@startupjs/init/lib/server/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _server__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@startupjs/init/lib/server/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/server/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sharedb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sharedb */ "sharedb");
/* harmony import */ var sharedb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sharedb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/common */ "./node_modules/@startupjs/init/lib/util/common.js");
/* harmony default export */ __webpack_exports__["default"] = (options=>{Object(_util_common__WEBPACK_IMPORTED_MODULE_1__["default"])(sharedb__WEBPACK_IMPORTED_MODULE_0___default.a,options);});

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/util/batch.server.js":
/*!***************************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/util/batch.server.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (fn=>fn());

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/util/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/util/common.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rich-text */ "rich-text");
/* harmony import */ var rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! racer */ "racer");
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(racer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! racer/lib/Model/RemoteDoc */ "racer/lib/Model/RemoteDoc");
/* harmony import */ var racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch */ "./node_modules/@startupjs/init/lib/util/batch.server.js");
/* harmony import */ var _startupjs_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @startupjs/orm */ "./node_modules/@startupjs/orm/lib/index.js");
/* harmony default export */ __webpack_exports__["default"] = ((ShareDB,{orm}={})=>{ShareDB.types.register(rich_text__WEBPACK_IMPORTED_MODULE_0___default.a.type);const oldRemoteDocOnOp=racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2___default.a.prototype._onOp;racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2___default.a.prototype._onOp=function(){if(this.shareDoc.type===rich_text__WEBPACK_IMPORTED_MODULE_0___default.a.type)return;return oldRemoteDocOnOp.apply(this,arguments);};racer__WEBPACK_IMPORTED_MODULE_1___default.a.Model.prototype.batch=_batch__WEBPACK_IMPORTED_MODULE_3__["default"];if(orm){racer__WEBPACK_IMPORTED_MODULE_1___default.a.use(_startupjs_orm__WEBPACK_IMPORTED_MODULE_4__["default"]);racer__WEBPACK_IMPORTED_MODULE_1___default.a.use(orm);}});

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/belongsTo.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/belongsTo.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return belongsTo; });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "pluralize");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
function belongsTo(AssociatedOrmEntity,options={}){return function(OrmEntity){const key=pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(AssociatedOrmEntity.collection)+'Id';OrmEntity.addAssociation(Object.assign({type:'belongsTo',orm:AssociatedOrmEntity,key},options));AssociatedOrmEntity.addAssociation(Object.assign({type:'oppositeBelongsTo',orm:OrmEntity,key,opposite:true},options));return OrmEntity;};}

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/hasMany.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/hasMany.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasMany; });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "pluralize");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
function hasMany(AssociatedOrmEntity,options={}){return function(OrmEntity){const key=pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(AssociatedOrmEntity.collection)+'Ids';OrmEntity.addAssociation(Object.assign({type:'hasMany',orm:AssociatedOrmEntity,key},options));AssociatedOrmEntity.addAssociation(Object.assign({type:'oppositeHasMany',orm:OrmEntity,key,opposite:true},options));return OrmEntity;};}

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/hasOne.js":
/*!****************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/hasOne.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasOne; });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "pluralize");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
function hasOne(AssociatedOrmEntity,options={}){return function(OrmEntity){const key=pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(AssociatedOrmEntity.collection)+'Id';OrmEntity.addAssociation(Object.assign({type:'hasOne',orm:AssociatedOrmEntity,key},options));AssociatedOrmEntity.addAssociation(Object.assign({type:'oppositeHasOne',orm:OrmEntity,key,opposite:true},options));return OrmEntity;};}

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/index.js ***!
  \***************************************************************/
/*! exports provided: belongsTo, hasOne, hasMany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _belongsTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belongsTo */ "./node_modules/@startupjs/orm/lib/associations/belongsTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "belongsTo", function() { return _belongsTo__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hasOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasOne */ "./node_modules/@startupjs/orm/lib/associations/hasOne.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOne", function() { return _hasOne__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hasMany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasMany */ "./node_modules/@startupjs/orm/lib/associations/hasMany.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasMany", function() { return _hasMany__WEBPACK_IMPORTED_MODULE_2__["default"]; });



/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/index.js ***!
  \**************************************************/
/*! exports provided: default, ChildModel, BaseModel, belongsTo, hasOne, hasMany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildModel", function() { return ChildModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! racer */ "racer");
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(racer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promisifyRacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promisifyRacer */ "./node_modules/@startupjs/orm/lib/promisifyRacer.js");
/* harmony import */ var _associations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associations */ "./node_modules/@startupjs/orm/lib/associations/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "belongsTo", function() { return _associations__WEBPACK_IMPORTED_MODULE_2__["belongsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOne", function() { return _associations__WEBPACK_IMPORTED_MODULE_2__["hasOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasMany", function() { return _associations__WEBPACK_IMPORTED_MODULE_2__["hasMany"]; });

const Model=racer__WEBPACK_IMPORTED_MODULE_0___default.a.Model;global.STARTUP_JS_ORM={};/* harmony default export */ __webpack_exports__["default"] = (function(racer){if(racer.orm)return;racer._orm=global.STARTUP_JS_ORM;racer.orm=function(pattern,OrmEntity,alias){var name=alias||pattern;if(global.STARTUP_JS_ORM[name])throw alreadyDefinedError(pattern,alias);if(!OrmEntity.collection){var match=pattern.match(/^[^.]+/);if(match)OrmEntity.collection=match[0];}global.STARTUP_JS_ORM[name]={pattern:pattern,regexp:patternToRegExp(pattern),OrmEntity:OrmEntity};};Model.prototype.at=function(subpath,alias){var path=this.path(subpath);return this.scope(path,alias);};Model.prototype._scope=function(path){var ChildModel=Model.ChildModel;var model=new ChildModel(this);model._at=path;return model;};Model.prototype.scope=function(path,alias){if(alias){if(global.STARTUP_JS_ORM[alias]){return this.__createScopedModel(path,global.STARTUP_JS_ORM[alias].OrmEntity);}else{throw new Error('Non-existent alias of the OrmEntity specified: '+alias+'\n\n'+'Most likely you have specified the path incorrectly in '+'".scope()" or ".at()"\n\n'+'The path must be passed as a single string separated by dots, '+'for example:\n\n'+'CORRECT:\n'+"$root.at('users.' + userId)\n\n"+'INCORRECT:\n'+"$root.at('users', userId)");}}var segments=this._dereference(this.__splitPath(path),true);var fullPath=segments.join('.');for(var name in global.STARTUP_JS_ORM){var regexp=global.STARTUP_JS_ORM[name].regexp;if(regexp.test(fullPath)){return this.__createScopedModel(path,global.STARTUP_JS_ORM[name].OrmEntity);}}return this._scope(path);};Model.prototype.__createScopedModel=function(path,OrmEntity){var model;if(OrmEntity.factory||OrmEntity.prototype.factory){model=OrmEntity(this._scope(path),this);if(!model)model=this._scope(path);}else{model=new OrmEntity(this);}model._at=path;return model;};Model.prototype.__splitPath=function(path){return path&&path.split('.')||[];};Object(_promisifyRacer__WEBPACK_IMPORTED_MODULE_1__["default"])();});function patternToRegExp(pattern){pattern=pattern.replace(/\$/g,'\\$').replace(/\./g,'\\.').replace(/\*/g,'([^\\.]*)');return new RegExp('^'+pattern+'$');}function alreadyDefinedError(pattern,alias){var msg;if(alias){msg="ORM entity with the alias '"+alias+"' is already defined. "+'Aliases must be unique. If you did already define the same ORM entity with '+"that alias name, just don't specify the alias at all -- path pattern is sufficient.";}else{msg="ORM entity matching the same path pattern '"+pattern+"' is already defined.";}return new Error(msg);}const ChildModel=Model.ChildModel;function BaseModel(){Model.ChildModel.apply(this,arguments);}BaseModel.prototype=Object.create(Model.ChildModel.prototype);BaseModel.prototype.constructor=BaseModel;BaseModel.prototype.getId=function(){var actualField=this.dereferenceSelf();return actualField.leaf();};BaseModel.prototype.getCollection=function(){let collection=this.constructor.collection;if(!collection){const model=this.root;const actualField=this.dereferenceSelf();collection=model._splitPath(actualField.path())[0];}return collection;};BaseModel.prototype.dereferenceSelf=function(){var model=this.root;var segments=model._splitPath(this.path());return model.scope(model._dereference(segments,true).join('.'));};BaseModel.associations=[];BaseModel.addAssociation=function(association){this.associations=this.associations.concat(association);};BaseModel.prototype.getAssociations=function(){return this.constructor.associations;};

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/promisifyRacer.js":
/*!***********************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/promisifyRacer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! racer */ "racer");
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(racer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! racer/lib/Model/Query */ "racer/lib/Model/Query");
/* harmony import */ var racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__);
const Model=racer__WEBPACK_IMPORTED_MODULE_0___default.a.Model;const FIX_VALUE_CB={set:{minArgs:2},setNull:{minArgs:2},setEach:{minArgs:2},push:{minArgs:2},unshift:{minArgs:2},insert:{minArgs:3},remove:{minArgs:2,onlyValidate:true},move:{minArgs:3,onlyValidate:true},stringInsert:{minArgs:3,onlyValidate:true},stringRemove:{minArgs:3,onlyValidate:true},subtypeSubmit:{minArgs:3,onlyValidate:true},setDiff:{minArgs:2},setDiffDeep:{minArgs:2},setArrayDiff:{minArgs:2},setArrayDiffDeep:{minArgs:2}};const MUTATORS=['set','setNull','setEach','create','createNull','add','del','increment','push','unshift','insert','pop','shift','remove','move','stringInsert','stringRemove','subtypeSubmit','setDiff','setDiffDeep','setArrayDiff','setArrayDiffDeep'];const SUBSCRIPTIONS=['subscribe','fetch'];const ASYNC_METHODS=MUTATORS.concat(SUBSCRIPTIONS);/* harmony default export */ __webpack_exports__["default"] = (function(){for(const method in FIX_VALUE_CB){const{minArgs,onlyValidate}=FIX_VALUE_CB[method];Model.prototype[method]=fixValueCbApi(Model.prototype[method],method,minArgs,onlyValidate);}for(const method of ASYNC_METHODS){Model.prototype[method]=optionalPromisify(Model.prototype[method]);Model.prototype[method+'Async']=deprecationWarning(Model.prototype[method],method);}for(const method of SUBSCRIPTIONS){racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1___default.a.prototype[method]=optionalPromisify(racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1___default.a.prototype[method]);racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1___default.a.prototype[method+'Async']=deprecationWarning(racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1___default.a.prototype[method],method);}});function optionalPromisify(originalFn){return function optionalPromisifier(...args){if(typeof args[args.length-1]==='function'){return originalFn.apply(this,args);}else{return new Promise((resolve,reject)=>{let syncResult;let isSyncCallback=true;args.push(function promisifyCallback(err,value){if(err)return reject(err);if(value)return resolve(value);if(isSyncCallback){process.nextTick(()=>resolve(syncResult));}else{return resolve(syncResult);}});syncResult=originalFn.apply(this,args);isSyncCallback=undefined;}).catch(err=>{console.error(err);if(this instanceof racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1___default.a){this.model.root.emit('error',err);}else{this.root.emit('error',err);}});}};}function fixValueCbApi(originalFn,methodName,minArgs,onlyValidate){return function(...args){if(typeof arguments[arguments.length-1]==='function'){if(arguments.length<minArgs){throw new Error('Not enough arguments for '+methodName);}else if(!onlyValidate&&arguments.length===minArgs){args.unshift('');}}return originalFn.apply(this,args);};}function deprecationWarning(originalFn,methodName){return function(){console.warn('model.'+methodName+'Async() is DEPRECATED and going to be '+'REMOVED soon!\n Please use '+methodName+'(), '+'it supports promises now and you can \'await\' it directly.');return originalFn.apply(this,arguments);};}

/***/ }),

/***/ "./node_modules/@startupjs/ui/server/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@startupjs/ui/server/index.js ***!
  \****************************************************/
/*! exports provided: getUiHead, initUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUiHead", function() { return getUiHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUi", function() { return initUi; });
function getUiHead(){return'';}function initUi(ee,options){}

/***/ }),

/***/ "./node_modules/startupjs/app/server.js":
/*!**********************************************!*\
  !*** ./node_modules/startupjs/app/server.js ***!
  \**********************************************/
/*! exports provided: initApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startupjs_app_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/app/server */ "./node_modules/@startupjs/app/server/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return _startupjs_app_server__WEBPACK_IMPORTED_MODULE_0__["initApp"]; });



/***/ }),

/***/ "./node_modules/startupjs/i18n/model.js":
/*!**********************************************!*\
  !*** ./node_modules/startupjs/i18n/model.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/i18n/model */ "./node_modules/@startupjs/i18n/model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/startupjs/i18n/server.js":
/*!***********************************************!*\
  !*** ./node_modules/startupjs/i18n/server.js ***!
  \***********************************************/
/*! exports provided: initI18n, getI18nRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/i18n/server */ "./node_modules/@startupjs/i18n/server/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initI18n", function() { return _startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_0__["initI18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getI18nRoutes", function() { return _startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_0__["getI18nRoutes"]; });



/***/ }),

/***/ "./node_modules/startupjs/init.js":
/*!****************************************!*\
  !*** ./node_modules/startupjs/init.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startupjs_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/init */ "./node_modules/@startupjs/init/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _startupjs_init__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/startupjs/orm.js":
/*!***************************************!*\
  !*** ./node_modules/startupjs/orm.js ***!
  \***************************************/
/*! exports provided: default, ChildModel, BaseModel, belongsTo, hasOne, hasMany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/orm */ "./node_modules/@startupjs/orm/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildModel", function() { return _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["ChildModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "belongsTo", function() { return _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["belongsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOne", function() { return _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["hasOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasMany", function() { return _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["hasMany"]; });



/***/ }),

/***/ "./node_modules/startupjs/server.js":
/*!******************************************!*\
  !*** ./node_modules/startupjs/server.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startupjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/server */ "@startupjs/server");
/* harmony import */ var _startupjs_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_startupjs_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _startupjs_server__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/index.js */ "./server/index.js");
Object(_server_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./server/api/index.js":
/*!*****************************!*\
  !*** ./server/api/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testThing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testThing */ "./server/api/testThing.js");
const router=express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();router.get('/test-thing',_testThing__WEBPACK_IMPORTED_MODULE_1__["default"]);/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/api/testThing.js":
/*!*********************************!*\
  !*** ./server/api/testThing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async(req,res)=>{const{model}=req;const $testThing=model.at('testThings.first');await $testThing.subscribe();res.json({name:'Test API',testThing:$testThing.get()});});

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return run; });
/* harmony import */ var startupjs_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/init */ "./node_modules/startupjs/init.js");
/* harmony import */ var startupjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! startupjs/server */ "./node_modules/startupjs/server.js");
/* harmony import */ var startupjs_app_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! startupjs/app/server */ "./node_modules/startupjs/app/server.js");
/* harmony import */ var startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! startupjs/i18n/server */ "./node_modules/startupjs/i18n/server.js");
/* harmony import */ var _startupjs_ui_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @startupjs/ui/server */ "./node_modules/@startupjs/ui/server/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model */ "./model/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./server/api/index.js");
/* harmony import */ var _main_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main/routes */ "./main/routes.js");
Object(startupjs_init__WEBPACK_IMPORTED_MODULE_0__["default"])({orm: _model__WEBPACK_IMPORTED_MODULE_5__["default"]});Object(startupjs_server__WEBPACK_IMPORTED_MODULE_1__["default"])({secure:false,getHead,appRoutes:[...Object(_main_routes__WEBPACK_IMPORTED_MODULE_7__["default"])(),...Object(startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_3__["getI18nRoutes"])()]},(ee,options)=>{Object(startupjs_app_server__WEBPACK_IMPORTED_MODULE_2__["initApp"])(ee);Object(_startupjs_ui_server__WEBPACK_IMPORTED_MODULE_4__["initUi"])(ee,options);Object(startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_3__["initI18n"])(ee);ee.on('routes',expressApp=>{expressApp.use('/api',_api__WEBPACK_IMPORTED_MODULE_6__["default"]);});});function getHead(appName){return`
    ${Object(_startupjs_ui_server__WEBPACK_IMPORTED_MODULE_4__["getUiHead"])()}
    <title>HelloWorld</title>
    <!-- Put vendor JS and CSS here -->
  `;}function run(){}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./server.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./server.js */"./server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@startupjs/server":
/*!************************************!*\
  !*** external "@startupjs/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@startupjs/server");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "pluralize":
/*!****************************!*\
  !*** external "pluralize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pluralize");

/***/ }),

/***/ "racer":
/*!************************!*\
  !*** external "racer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("racer");

/***/ }),

/***/ "racer/lib/Model/Query":
/*!****************************************!*\
  !*** external "racer/lib/Model/Query" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("racer/lib/Model/Query");

/***/ }),

/***/ "racer/lib/Model/RemoteDoc":
/*!********************************************!*\
  !*** external "racer/lib/Model/RemoteDoc" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("racer/lib/Model/RemoteDoc");

/***/ }),

/***/ "resolve":
/*!**************************!*\
  !*** external "resolve" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("resolve");

/***/ }),

/***/ "rich-text":
/*!****************************!*\
  !*** external "rich-text" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rich-text");

/***/ }),

/***/ "sharedb":
/*!**************************!*\
  !*** external "sharedb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sharedb");

/***/ })

/******/ });