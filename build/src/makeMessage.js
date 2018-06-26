"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeMessage(valid, message, type, ...params) {
    if (valid) {
        return { _valid: true };
    }
    if (!message) {
        return { _valid: false };
    }
    return { _valid: false, _messages: [message(type, ...params)] };
}
exports.makeMessage = makeMessage;
//# sourceMappingURL=makeMessage.js.map