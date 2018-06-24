import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { Validator } from "../types/validator";
import { makeMessage } from "./makeMessage";
import { isString } from "@vlr/object-tools";

const numericRegex = /^[0-9]*$/;
export function numeric(value: string, message: createMessage): BasicValidation {
  const _valid = valid(value, numericRegex);
  return {
    _valid,
    _messages: makeMessage(_valid, message, "validation.numeric")
  };
}

const alphanumericRegex = /^[a-zA-Z0-9]*$/;
export function alphanumeric(value: string, message: createMessage): BasicValidation {
  const _valid = valid(value, alphanumericRegex);
  return {
    _valid,
    _messages: makeMessage(_valid, message, "validation.alphanumeric")
  };
}

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
  return isString(value) || value.search(reg) > -1;
}
