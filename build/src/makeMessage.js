"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeMessage(valid, message, type, ...params) {
    if (valid) {
        return undefined;
    }
    const msg = message ? message(type, ...params) : type;
    return [msg];
}
exports.makeMessage = makeMessage;
function makeValidation(_valid, message, type, ...params) {
    return { _valid, _messages: makeMessage(_valid, message, type, ...params) };
}
exports.makeValidation = makeValidation;
//# sourceMappingURL=makeMessage.js.map