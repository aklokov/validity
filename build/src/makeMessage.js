"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeMessage(valid, message, type, ...params) {
    if (valid) {
        return null;
    }
    if (!message) {
        return null;
    }
    return [message(type, params)];
}
exports.makeMessage = makeMessage;
//# sourceMappingURL=makeMessage.js.map