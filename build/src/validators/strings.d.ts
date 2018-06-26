import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { Validator } from "../types/validator";
export declare function numeric(value: string, message: createMessage): BasicValidation;
export declare function alpha(value: string, message: createMessage): BasicValidation;
export declare function alphanumeric(value: string, message: createMessage): BasicValidation;
export declare function regex(reg: RegExp, customMessage?: string): Validator<string>;
