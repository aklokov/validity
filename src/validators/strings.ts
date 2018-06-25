import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { Validator } from "../types/validator";
import { makeMessage } from "./makeMessage";
import { isString } from "@vlr/object-tools";
import { or } from "./or";

const numericRegex = /^[0-9]*$/;
export function numeric(value: string, message: createMessage): BasicValidation {
  const _valid = valid(value, numericRegex);
  return {
    _valid,
    _messages: makeMessage(_valid, message, "validation.numeric")
  };
}

const alphaRegex = /^[a-zA-Z]*$/;
export function alpha(value: string, message: createMessage): BasicValidation {
  const _valid = valid(value, alphaRegex);
  return {
    _valid,
    _messages: makeMessage(_valid, message, "validation.alpha")
  };
}

export const alphanumeric = or<string>(alpha, numeric, "validation.alphanumeric");

export function regex(reg: RegExp, customMessage?: string): Validator<string> {
  return function (value: string, message: createMessage): BasicValidation {
    const _valid = valid(value, reg);
    return {
      _valid,
      _messages: makeMessage(_valid, message, <any>customMessage || "validation.regex")
    };
  };
}

function valid(value: string, reg: RegExp): boolean {
  return !isString(value) || value.search(reg) > -1;
}
