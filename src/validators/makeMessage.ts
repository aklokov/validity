import { createMessage, messageType } from "../types";

export function makeMessage(valid: boolean, message: createMessage, type: messageType): string[] {
  if (valid) { return null; }
  if (!message) { return null; }
  return [message(type)];
}
