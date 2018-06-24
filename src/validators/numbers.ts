import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { Validator } from "../types/validator";
import { makeMessage } from "./makeMessage";
import { isNumber } from "@vlr/object-tools";

export function moreThan(limit: number): Validator<number> {
  return function (value: number, message: createMessage): BasicValidation {
    const _valid = isNumber(value) && value > limit;
    return {
      _valid,
      _messages: makeMessage(_valid, message, "validation.moreThan")
    };
  };
}

export function lessThan(limit: number): Validator<number> {
  return function (value: number, message: createMessage): BasicValidation {
    const _valid = isNumber(value) && value < limit;
    return {
      _valid,
      _messages: makeMessage(_valid, message, "validation.lessThan")
    };
  };
}

export function equalOrMore(limit: number): Validator<number> {
  return function (value: number, message: createMessage): BasicValidation {
    const _valid = isNumber(value) && value >= limit;
    return {
      _valid,
      _messages: makeMessage(_valid, message, "validation.equalOrMore")
    };
  };
}

export function equalOrLess(limit: number): Validator<number> {
  return function (value: number, message: createMessage): BasicValidation {
    const _valid = isNumber(value) && value <= limit;
    return {
      _valid,
      _messages: makeMessage(_valid, message, "validation.equalOrLess")
    };
  };
}
