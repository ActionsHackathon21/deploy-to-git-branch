"use strict";
(() => {
var exports = {};
exports.id = 514;
exports.ids = [514,340];
exports.modules = {

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });

function handler(req, res) {
    res.status(200).json({
        name: 'Dev.to world'
    });
};


/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "node-mocks-http"
const external_node_mocks_http_namespaceObject = require("node-mocks-http");
// EXTERNAL MODULE: ./pages/api/name.js
var api_name = __webpack_require__(154);
;// CONCATENATED MODULE: ./pages/api/name.test.js


describe('/api/name', ()=>{
    test('returns a message with the specified animal', async ()=>{
        const { req , res  } = (0,external_node_mocks_http_namespaceObject.createMocks)({
            method: 'GET',
            query: {
            }
        });
        await (0,api_name["default"])(req, res);
        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(expect.objectContaining({
            name: 'Dev.to world'
        }));
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(422));
module.exports = __webpack_exports__;

})();