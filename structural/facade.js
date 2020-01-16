"use strict";
exports.__esModule = true;
exports.facade = function (subsystems, privatE) {
    if (!subsystems) {
        throw new Error();
    }
    Array.isArray(subsystems) || (function () { throw new Error(); })();
    for (var k in subsystems) {
        !privatE.hasOwnProperty(subsystems[k]) || (function () { throw new Error(); })();
        privatE[subsystems[k]] = "new " + subsystems[k];
    }
    return ({ private: privatE });
};
