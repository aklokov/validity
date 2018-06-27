"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
function or(val1, val2, msg = "validation.invalid") {
    return function (obj, message) {
        const validation1 = __1.validate(val1, obj, message);
        const validation2 = __1.validate(val2, obj, message);
        const val = __1.makeMessage(validation1._valid || validation2._valid, message, msg);
        return Object.assign(validation2, val);
    };
}
exports.or = or;
//# sourceMappingURL=or.js.map