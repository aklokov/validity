"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validity_1 = require("../validity");
const array_tools_1 = require("@vlr/array-tools");
function arrayValidator(validator) {
    return function (obj, message) {
        if (!Array.isArray(obj)) {
            return { _valid: true };
        }
        const validation = obj.map(item => validity_1.validate(validator, item, message));
        validation._valid = array_tools_1.all(validation, (item) => item._valid);
        return validation;
    };
}
exports.arrayValidator = arrayValidator;
//# sourceMappingURL=arrayValidator.js.map