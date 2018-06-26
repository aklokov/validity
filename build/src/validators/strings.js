"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeMessage_1 = require("./makeMessage");
const object_tools_1 = require("@vlr/object-tools");
function numeric(value, message) {
    return regex(/^[0-9]*$/, "validation.alphanumeric")(value, message);
}
exports.numeric = numeric;
function alpha(value, message) {
    return regex(/^[a-zA-Z]*$/, "validation.alphanumeric")(value, message);
}
exports.alpha = alpha;
function alphanumeric(value, message) {
    return regex(/^[a-zA-Z0-9]*$/, "validation.alphanumeric")(value, message);
}
exports.alphanumeric = alphanumeric;
function regex(reg, customMessage) {
    return function (value, message) {
        const _valid = valid(value, reg);
        return {
            _valid,
            _messages: makeMessage_1.makeMessage(_valid, message, customMessage || "validation.regex")
        };
    };
}
exports.regex = regex;
function valid(value, reg) {
    return !object_tools_1.isString(value) || value.search(reg) > -1;
}
//# sourceMappingURL=strings.js.map