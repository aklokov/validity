import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { Validator } from "../types/validator";
import { makeMessage } from "./makeMessage";
import { isNumber } from "@vlr/object-tools";

export function moreThan(limit: number): Validator<number> {
  return function (value: number, message?: createMessage): BasicValidation {
    return makeMessage(isNumber(value) && value > limit, message, "validation.moreThan", limit);
  };
}

export function lessThan(limit: number): Validator<number> {
  return function (value: number, message?: createMessage): BasicValidation {
    return makeMessage(isNumber(value) && value < limit, message, "validation.lessThan", limit);
  };
}

export function equalOrMore(limit: number): Validator<number> {
  return function (value: number, message?: createMessage): BasicValidation {
    return makeMessage(isNumber(value) && value >= limit, message, "validation.equalOrMore", limit);
  };
}

export function equalOrLess(limit: number): Validator<number> {
  return function (value: number, message?: createMessage): BasicValidation {
    return makeMessage(isNumber(value) && value <= limit, message, "validation.equalOrLess", limit);
  };
}
