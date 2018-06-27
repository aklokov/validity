import { createMessage } from "./types/createMessage";
import { BasicValidation } from "./types";

export function makeMessage(valid: boolean, message: createMessage, type: string, ...params: any[]): BasicValidation {
  if (valid) { return { _valid: true }; }
  const msg = message ? message(<any>type, ...params) : type;
  return { _valid: false, _messages: [msg] };
}
