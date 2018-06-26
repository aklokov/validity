import { createMessage } from "./types/createMessage";
import { BasicValidation } from "./types";

export function makeMessage(valid: boolean, message: createMessage, type: string, ...params: any[]): BasicValidation {
  if (valid) { return { _valid: true }; }
  if (!message) { return { _valid: false }; }
  return { _valid: false, _messages: [message(<any>type, ...params)] };
}
