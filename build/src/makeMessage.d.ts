import { createMessage } from "./types/createMessage";
import { BasicValidation } from "./types";
export declare function makeMessage(valid: boolean, message: createMessage, type: string, ...params: any[]): string[];
export declare function makeValidation(_valid: boolean, message: createMessage, type: string, ...params: any[]): BasicValidation;
