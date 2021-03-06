"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
const makeMessage_1 = require("../makeMessage");
function moreThan(limit) {
    return function (value, message) {
        return makeMessage_1.makeValidation(object_tools_1.isNumber(value) && value > limit, message, "validation.moreThan", limit);
    };
}
exports.moreThan = moreThan;
function lessThan(limit) {
    return function (value, message) {
        return makeMessage_1.makeValidation(object_tools_1.isNumber(value) && value < limit, message, "validation.lessThan", limit);
    };
}
exports.lessThan = lessThan;
function equalOrMore(limit) {
    return function (value, message) {
        return makeMessage_1.makeValidation(object_tools_1.isNumber(value) && value >= limit, message, "validation.equalOrMore", limit);
    };
}
exports.equalOrMore = equalOrMore;
function equalOrLess(limit) {
    return function (value, message) {
        return makeMessage_1.makeValidation(object_tools_1.isNumber(value) && value <= limit, message, "validation.equalOrLess", limit);
    };
}
exports.equalOrLess = equalOrLess;
//# sourceMappingURL=numbers.js.map