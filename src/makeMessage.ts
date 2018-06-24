import { createMessage } from "./types/createMessage";

export function makeMessage(valid: boolean, message: createMessage, type: string): string[] {
  if (valid) { return null; }
  if (!message) { return null; }
  return [message(<any>type)];
}
