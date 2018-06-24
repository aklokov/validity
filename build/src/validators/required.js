"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeMessage_1 = require("./makeMessage");
function required(obj, message) {
    const _valid = obj !== null && obj !== undefined && obj !== "";
    return {
        _valid,
        _messages: makeMessage_1.makeMessage(_valid, message, "validation.required"),
        _required: true
    };
}
exports.required = required;
//# sourceMappingURL=required.js.map