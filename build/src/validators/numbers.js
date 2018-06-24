"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeMessage_1 = require("./makeMessage");
const object_tools_1 = require("@vlr/object-tools");
function moreThan(limit) {
    return function (value, message) {
        const _valid = object_tools_1.isNumber(value) && value > limit;
        return {
            _valid,
            _messages: makeMessage_1.makeMessage(_valid, message, "validation.moreThan")
        };
    };
}
exports.moreThan = moreThan;
function lessThan(limit) {
    return function (value, message) {
        const _valid = object_tools_1.isNumber(value) && value < limit;
        return {
            _valid,
            _messages: makeMessage_1.makeMessage(_valid, message, "validation.lessThan")
        };
    };
}
exports.lessThan = lessThan;
function equalOrMore(limit) {
    return function (value, message) {
        const _valid = object_tools_1.isNumber(value) && value >= limit;
        return {
            _valid,
            _messages: makeMessage_1.makeMessage(_valid, message, "validation.equalOrMore")
        };
    };
}
exports.equalOrMore = equalOrMore;
function equalOrLess(limit) {
    return function (value, message) {
        const _valid = object_tools_1.isNumber(value) && value <= limit;
        return {
            _valid,
            _messages: makeMessage_1.makeMessage(_valid, message, "validation.equalOrLess")
        };
    };
}
exports.equalOrLess = equalOrLess;
//# sourceMappingURL=numbers.js.map