"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeMessage_1 = require("./makeMessage");
const object_tools_1 = require("@vlr/object-tools");
const or_1 = require("./or");
const numericRegex = /^[0-9]*$/;
function numeric(value, message) {
    const _valid = valid(value, numericRegex);
    return {
        _valid,
        _messages: makeMessage_1.makeMessage(_valid, message, "validation.numeric")
    };
}
exports.numeric = numeric;
const alphaRegex = /^[a-zA-Z]*$/;
function alpha(value, message) {
    const _valid = valid(value, alphaRegex);
    return {
        _valid,
        _messages: makeMessage_1.makeMessage(_valid, message, "validation.alpha")
    };
}
exports.alpha = alpha;
exports.alphanumeric = or_1.or(alpha, numeric, "validation.alphanumeric");
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
    return object_tools_1.isString(value) || value.search(reg) > -1;
}
//# sourceMappingURL=strings.js.map