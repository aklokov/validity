"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeMessage_1 = require("../makeMessage");
const validity_1 = require("../validity");
function or(val1, val2, msg = "validation.invalid") {
    return function (obj, message) {
        const validation1 = validity_1.validate(val1, obj, message);
        const validation2 = validity_1.validate(val2, obj, message);
        const val = makeMessage_1.makeValidation(validation1._valid || validation2._valid, message, msg);
        return Object.assign(validation2, val);
    };
}
exports.or = or;
//# sourceMappingURL=or.js.map