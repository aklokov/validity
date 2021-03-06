"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeMessage_1 = require("../makeMessage");
const object_tools_1 = require("@vlr/object-tools");
function maxLength(length) {
    return function (value, message) {
        const _valid = !object_tools_1.isString(value) || value.length <= length;
        return Object.assign({}, makeMessage_1.makeValidation(_valid, message, "validation.maxLength", length), { _maxLength: length });
    };
}
exports.maxLength = maxLength;
function minLength(length) {
    return function (value, message) {
        const _valid = object_tools_1.isString(value) && value.length >= length;
        return makeMessage_1.makeValidation(_valid, message, "validation.minLength", length);
    };
}
exports.minLength = minLength;
function exactLength(length) {
    return function (value, message) {
        const _valid = object_tools_1.isString(value) && value.length === length;
        return Object.assign({}, makeMessage_1.makeValidation(_valid, message, "validation.exactLength", length), { _maxLength: length });
    };
}
exports.exactLength = exactLength;
//# sourceMappingURL=stringLength.js.map