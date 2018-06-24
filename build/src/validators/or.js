"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const makeMessage_1 = require("./makeMessage");
function or(val1, val2, type) {
    return function (obj, message) {
        const validation1 = __1.validate(val1, obj, message);
        const validation2 = __1.validate(val2, obj, message);
        validation2._valid = validation1._valid || validation2._valid;
        validation2._messages = makeMessage_1.makeMessage(validation2._valid, message, type);
        validation2._maxLength = validation1._maxLength > 0 && validation2._maxLength > 0
            ? Math.max(validation1._maxLength, validation2._maxLength)
            : 0;
        validation2._required = validation1._required && validation2._required;
        return validation2;
    };
}
exports.or = or;
//# sourceMappingURL=or.js.map