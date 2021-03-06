import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { Validator } from "../types/validator";
import { makeValidation } from "../makeMessage";
import { isString } from "@vlr/object-tools";

export function maxLength(length: number): Validator<string> {
  return function (value: string, message?: createMessage): BasicValidation {
    const _valid = !isString(value) || value.length <= length;
    return {
      ...makeValidation(_valid, message, "validation.maxLength", length),
      _maxLength: length
    };
  };
}

export function minLength(length: number): Validator<string> {
  return function (value: string, message?: createMessage): BasicValidation {
    const _valid = isString(value) && value.length >= length;
    return makeValidation(_valid, message, "validation.minLength", length);
  };
}

export function exactLength(length: number): Validator<string> {
  return function (value: string, message?: createMessage): BasicValidation {
    const _valid = isString(value) && value.length === length;
    return {
      ...makeValidation(_valid, message, "validation.exactLength", length),
      _maxLength: length
    };
  };
}

