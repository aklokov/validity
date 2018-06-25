import { makeMessage as ext } from "../makeMessage";
import { createMessage, messageType } from "../types";
export const makeMessage: (_valid: boolean, message: createMessage, type: messageType, ...params: any[]) => string[] = ext;
