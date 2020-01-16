"use strict";
exports.__esModule = true;
var facade_1 = require("./facade");
var alg = facade_1.facade;
var throwE = function () { throw new Error(); };
console.log(facade_1.facade);
typeof facade_1.facade === "function" || throwE();
var r = facade_1.facade(["subsys0", "subsys1"], { bob: "" });
// console.log(r);
r.private.subsys0 === "new subsys0" || throwE();
r.private.subsys1 === "new subsys1" || throwE();
r.private.bob === "" || throwE();
