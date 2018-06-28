import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { Validator } from "../types/validator";
import { makeValidation } from "../makeMessage";
import { isString } from "@vlr/object-tools";
import { isNumber } from "@vlr/object-tools";

export function numeric(value: string | number, message?: createMessage): BasicValidation {
  if (isNumber(value)) { return { _valid: true }; }
  return regex(/^[0-9]*$/, "validation.numeric")(<string>value, message);
}

export function alpha(value: string, message?: createMessage): BasicValidation {
  return regex(/^[a-zA-Z]*$/, "validation.alpha")(value, message);
}

export function alphanumeric(value: string, message?: createMessage): BasicValidation {
  return regex(/^[a-zA-Z0-9]*$/, "validation.alphanumeric")(value, message);
}

export function regex(reg: RegExp, customMessage?: string): Validator<string> {
  return function (value: string, message?: createMessage): BasicValidation {
    return makeValidation(!isString(value) || value.search(reg) > -1, message, <any>customMessage || "validation.regex");
  };
}
