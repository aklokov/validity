"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
function validate(validators, obj, message) {
    if (!Array.isArray(validators)) {
        return validators(obj, message);
    }
    if (!validators.length) {
        return { _valid: true };
    }
    const validations = validators.map(v => v(obj, message));
    const result = array_tools_1.last(validations);
    const lengthSpecified = validations.map(v => v._maxLength).filter(l => l > 0);
    result._valid = array_tools_1.all(validations, v => v._valid);
    result._messages = array_tools_1.flatMap(validations, v => v._messages);
    result._required = validations.some(v => v._required);
    result._maxLength = Math.min(...lengthSpecified) || 0;
    return result;
}
exports.validate = validate;
function validity(validators, message) {
    return {
        validate: (obj) => validate(validators, obj, message)
    };
}
exports.validity = validity;
//# sourceMappingURL=validity.js.map