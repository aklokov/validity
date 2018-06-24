"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectMap_1 = require("@vlr/map-tools/objectMap");
const validity_1 = require("../validity");
const array_tools_1 = require("@vlr/array-tools");
function objectValidator(config) {
    const configKeys = objectMap_1.keys(config);
    return function (obj, message) {
        if (!obj) {
            return { _valid: true };
        }
        const result = {};
        configKeys.forEach((key) => {
            const validator = objectMap_1.get(config, key);
            const field = objectMap_1.get(obj, key);
            result[key] = validity_1.validate(validator, field, message);
        });
        result._valid = array_tools_1.all(objectMap_1.values(result), r => r._valid);
        return result;
    };
}
exports.objectValidator = objectValidator;
//# sourceMappingURL=objectValidator.js.map