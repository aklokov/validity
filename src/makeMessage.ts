import { createMessage } from "./types/createMessage";
import { BasicValidation } from "./types";

export function makeMessage(valid: boolean, message: createMessage, type: string, ...params: any[]): string[] {
  if (valid) { return undefined; }
  const msg = message ? message(<any>type, ...params) : type;
  return [msg];
}

export function makeValidation(_valid: boolean, message: createMessage, type: string, ...params: any[]): BasicValidation {
  return { _valid, _messages: makeMessage(_valid, message, type, ...params) };
}
