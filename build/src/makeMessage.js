"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeMessage(valid, message, type, ...params) {
    if (valid) {
        return { _valid: true };
    }
    const msg = message ? message(type, ...params) : type;
    return { _valid: false, _messages: [msg] };
}
exports.makeMessage = makeMessage;
//# sourceMappingURL=makeMessage.js.map