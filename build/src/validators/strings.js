"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeMessage_1 = require("../makeMessage");
const object_tools_1 = require("@vlr/object-tools");
const object_tools_2 = require("@vlr/object-tools");
function numeric(value, message) {
    if (object_tools_2.isNumber(value)) {
        return { _valid: true };
    }
    return regex(/^[0-9]*$/, "validation.numeric")(value, message);
}
exports.numeric = numeric;
function alpha(value, message) {
    return regex(/^[a-zA-Z]*$/, "validation.alpha")(value, message);
}
exports.alpha = alpha;
function alphanumeric(value, message) {
    return regex(/^[a-zA-Z0-9]*$/, "validation.alphanumeric")(value, message);
}
exports.alphanumeric = alphanumeric;
function regex(reg, customMessage) {
    return function (value, message) {
        return makeMessage_1.makeMessage(!object_tools_1.isString(value) || value.search(reg) > -1, message, customMessage || "validation.regex");
    };
}
exports.regex = regex;
//# sourceMappingURL=strings.js.map