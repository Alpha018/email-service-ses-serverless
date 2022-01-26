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

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet AppController = class AppController {\n    async check() {\n        return 'hello';\n    }\n};\n__decorate([\n    (0, common_1.Get)(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", typeof (_a = typeof Promise !== \"undefined\" && Promise) === \"function\" ? _a : Object)\n], AppController.prototype, \"check\", null);\nAppController = __decorate([\n    (0, common_1.Controller)('health')\n], AppController);\nexports.AppController = AppController;\n\n\n//# sourceURL=webpack://gac-email-service/./src/app.controller.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst helmet = __webpack_require__(/*! helmet */ \"helmet\");\nconst config_1 = __webpack_require__(/*! @nestjs/config */ \"@nestjs/config\");\nconst email_service_validate_config_1 = __webpack_require__(/*! ./config/email-service.validate.config */ \"./src/config/email-service.validate.config.ts\");\nconst email_service_config_1 = __webpack_require__(/*! ./config/email-service.config */ \"./src/config/email-service.config.ts\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst terminus_1 = __webpack_require__(/*! @nestjs/terminus */ \"@nestjs/terminus\");\nconst nest_winston_1 = __webpack_require__(/*! nest-winston */ \"nest-winston\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\");\nconst axios_1 = __webpack_require__(/*! @nestjs/axios */ \"@nestjs/axios\");\nconst email_config_module_1 = __webpack_require__(/*! ./config/email-config.module */ \"./src/config/email-config.module.ts\");\nlet AppModule = class AppModule {\n    configure(consumer) {\n        consumer\n            .apply(helmet())\n            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });\n    }\n};\nAppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            axios_1.HttpModule,\n            config_1.ConfigModule.forRoot({\n                isGlobal: true,\n                validate: email_service_validate_config_1.EmailServiceValidateConfig,\n            }),\n            terminus_1.TerminusModule,\n            nest_winston_1.WinstonModule.forRoot(logger_1.loggerOptions),\n            email_config_module_1.EmailConfigModule,\n        ],\n        providers: [email_service_config_1.EmailServiceConfig],\n        controllers: [app_controller_1.AppController],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack://gac-email-service/./src/app.module.ts?");

/***/ }),

/***/ "./src/common/argument-invalid.exception.ts":
/*!**************************************************!*\
  !*** ./src/common/argument-invalid.exception.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ArgumentInvalidException = void 0;\nconst exception_base_1 = __webpack_require__(/*! ./exception.base */ \"./src/common/exception.base.ts\");\nconst exception_types_1 = __webpack_require__(/*! ./exception.types */ \"./src/common/exception.types.ts\");\nclass ArgumentInvalidException extends exception_base_1.ExceptionBase {\n    constructor() {\n        super(...arguments);\n        this.statusCode = 400;\n        this.type = exception_types_1.ExceptionType.ArgumentInvalid;\n    }\n}\nexports.ArgumentInvalidException = ArgumentInvalidException;\n\n\n//# sourceURL=webpack://gac-email-service/./src/common/argument-invalid.exception.ts?");

/***/ }),

/***/ "./src/common/exception.base.ts":
/*!**************************************!*\
  !*** ./src/common/exception.base.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ExceptionBase = void 0;\nclass ExceptionBase extends Error {\n    constructor(message, metadata) {\n        super(message);\n        this.message = message;\n        this.metadata = metadata;\n        Error.captureStackTrace(this, this.constructor);\n    }\n    toJSON() {\n        return {\n            statusCode: this.statusCode,\n            message: this.message,\n            type: this.type,\n            stack: this.stack,\n            metadata: this.metadata,\n        };\n    }\n}\nexports.ExceptionBase = ExceptionBase;\n\n\n//# sourceURL=webpack://gac-email-service/./src/common/exception.base.ts?");

/***/ }),

/***/ "./src/common/exception.types.ts":
/*!***************************************!*\
  !*** ./src/common/exception.types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PrismaRequestErrors = exports.ExceptionType = void 0;\nvar ExceptionType;\n(function (ExceptionType) {\n    ExceptionType[\"ArgumentInvalid\"] = \"ArgumentInvalidException\";\n})(ExceptionType = exports.ExceptionType || (exports.ExceptionType = {}));\nvar PrismaRequestErrors;\n(function (PrismaRequestErrors) {\n    PrismaRequestErrors[\"InternalServerErrorException\"] = \"Something went wrong...\";\n})(PrismaRequestErrors = exports.PrismaRequestErrors || (exports.PrismaRequestErrors = {}));\n\n\n//# sourceURL=webpack://gac-email-service/./src/common/exception.types.ts?");

/***/ }),

/***/ "./src/config/email-config.module.ts":
/*!*******************************************!*\
  !*** ./src/config/email-config.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EmailConfigModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst email_service_config_1 = __webpack_require__(/*! ./email-service.config */ \"./src/config/email-service.config.ts\");\nconst config_1 = __webpack_require__(/*! @nestjs/config */ \"@nestjs/config\");\nlet EmailConfigModule = class EmailConfigModule {\n};\nEmailConfigModule = __decorate([\n    (0, common_1.Module)({\n        imports: [config_1.ConfigModule],\n        providers: [email_service_config_1.EmailServiceConfig, config_1.ConfigService],\n        exports: [email_service_config_1.EmailServiceConfig],\n    })\n], EmailConfigModule);\nexports.EmailConfigModule = EmailConfigModule;\n\n\n//# sourceURL=webpack://gac-email-service/./src/config/email-config.module.ts?");

/***/ }),

/***/ "./src/config/email-service.config.ts":
/*!********************************************!*\
  !*** ./src/config/email-service.config.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EmailServiceConfig = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst config_1 = __webpack_require__(/*! @nestjs/config */ \"@nestjs/config\");\nlet EmailServiceConfig = class EmailServiceConfig {\n    constructor(config) {\n        this.config = config;\n    }\n    get nodeConfig() {\n        return {\n            nodeEnv: this.config.get('NODE_ENV'),\n        };\n    }\n};\nEmailServiceConfig = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof config_1.ConfigService !== \"undefined\" && config_1.ConfigService) === \"function\" ? _a : Object])\n], EmailServiceConfig);\nexports.EmailServiceConfig = EmailServiceConfig;\n\n\n//# sourceURL=webpack://gac-email-service/./src/config/email-service.config.ts?");

/***/ }),

/***/ "./src/config/email-service.env.ts":
/*!*****************************************!*\
  !*** ./src/config/email-service.env.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EmailServiceEnv = void 0;\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nclass EmailServiceEnv {\n}\n__decorate([\n    (0, class_validator_1.IsString)(),\n    (0, class_validator_1.IsOptional)(),\n    __metadata(\"design:type\", String)\n], EmailServiceEnv.prototype, \"NODE_ENV\", void 0);\nexports.EmailServiceEnv = EmailServiceEnv;\n\n\n//# sourceURL=webpack://gac-email-service/./src/config/email-service.env.ts?");

/***/ }),

/***/ "./src/config/email-service.validate.config.ts":
/*!*****************************************************!*\
  !*** ./src/config/email-service.validate.config.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EmailServiceValidateConfig = void 0;\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nconst argument_invalid_exception_1 = __webpack_require__(/*! ../common/argument-invalid.exception */ \"./src/common/argument-invalid.exception.ts\");\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nconst email_service_env_1 = __webpack_require__(/*! ./email-service.env */ \"./src/config/email-service.env.ts\");\nfunction EmailServiceValidateConfig(config) {\n    const validatedConfig = (0, class_transformer_1.plainToClass)(email_service_env_1.EmailServiceEnv, config, {\n        enableImplicitConversion: true,\n    });\n    const errors = (0, class_validator_1.validateSync)(validatedConfig, {\n        skipMissingProperties: false,\n    });\n    if (errors.length > 0) {\n        throw new argument_invalid_exception_1.ArgumentInvalidException((0, utils_1.validationErrorsToString)(errors));\n    }\n    return validatedConfig;\n}\nexports.EmailServiceValidateConfig = EmailServiceValidateConfig;\n\n\n//# sourceURL=webpack://gac-email-service/./src/config/email-service.validate.config.ts?");

/***/ }),

/***/ "./src/lambda.ts":
/*!***********************!*\
  !*** ./src/lambda.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst aws_serverless_express_1 = __webpack_require__(/*! aws-serverless-express */ \"aws-serverless-express\");\nconst middleware_1 = __webpack_require__(/*! aws-serverless-express/middleware */ \"aws-serverless-express/middleware\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ \"@nestjs/platform-express\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst nest_winston_1 = __webpack_require__(/*! nest-winston */ \"nest-winston\");\nconst logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst binaryMimeTypes = [];\nlet cachedServer;\nasync function bootstrapServer() {\n    if (!cachedServer) {\n        const expressApp = express();\n        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp), {\n            logger: nest_winston_1.WinstonModule.createLogger(logger_1.loggerOptions),\n        });\n        nestApp.use((0, middleware_1.eventContext)());\n        await nestApp.init();\n        cachedServer = (0, aws_serverless_express_1.createServer)(expressApp, undefined, binaryMimeTypes);\n    }\n    return cachedServer;\n}\nconst handler = async (event, context) => {\n    cachedServer = await bootstrapServer();\n    return (0, aws_serverless_express_1.proxy)(cachedServer, event, context, 'PROMISE').promise;\n};\nexports.handler = handler;\n\n\n//# sourceURL=webpack://gac-email-service/./src/lambda.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./validation-errors-to-string */ \"./src/utils/validation-errors-to-string.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./object-literal */ \"./src/utils/object-literal.ts\"), exports);\n\n\n//# sourceURL=webpack://gac-email-service/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createContextWinston = exports.loggerOptions = void 0;\nconst winston = __webpack_require__(/*! winston */ \"winston\");\nconst winston_utilities_1 = __webpack_require__(/*! nest-winston/dist/winston.utilities */ \"nest-winston/dist/winston.utilities\");\nexports.loggerOptions = {\n    transports: [\n        new winston.transports.Console({\n            format: winston.format.combine(winston.format.timestamp(), winston_utilities_1.utilities.format.nestLike()),\n        }),\n    ],\n};\nfunction createContextWinston(constructorName, functionName) {\n    return {\n        context: constructorName,\n        function: functionName,\n    };\n}\nexports.createContextWinston = createContextWinston;\n\n\n//# sourceURL=webpack://gac-email-service/./src/utils/logger.ts?");

/***/ }),

/***/ "./src/utils/object-literal.ts":
/*!*************************************!*\
  !*** ./src/utils/object-literal.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\n\n//# sourceURL=webpack://gac-email-service/./src/utils/object-literal.ts?");

/***/ }),

/***/ "./src/utils/validation-errors-to-string.ts":
/*!**************************************************!*\
  !*** ./src/utils/validation-errors-to-string.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validationErrorsToString = void 0;\nfunction validationErrorsToString(errors) {\n    return errors\n        .reduce((result, error) => [\n        ...result,\n        Object.values(error.constraints),\n    ], [])\n        .join(', ');\n}\nexports.validationErrorsToString = validationErrorsToString;\n\n\n//# sourceURL=webpack://gac-email-service/./src/utils/validation-errors-to-string.ts?");

/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/terminus":
/*!***********************************!*\
  !*** external "@nestjs/terminus" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),

/***/ "aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express");

/***/ }),

/***/ "aws-serverless-express/middleware":
/*!****************************************************!*\
  !*** external "aws-serverless-express/middleware" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express/middleware");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "nest-winston":
/*!*******************************!*\
  !*** external "nest-winston" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("nest-winston");

/***/ }),

/***/ "nest-winston/dist/winston.utilities":
/*!******************************************************!*\
  !*** external "nest-winston/dist/winston.utilities" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("nest-winston/dist/winston.utilities");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;