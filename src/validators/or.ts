import { Validators, Validator } from "../types/validator";
import { createMessage, Validation, messageType } from "../types";
import { validate } from "..";
import { makeMessage } from "./makeMessage";

export function or<T>(val1: Validators<T>, val2: Validators<T>, type: messageType): Validator<T> {
  return function (obj: T, message: createMessage): Validation<T> {
    const validation1 = validate(val1, obj, message);
    const validation2 = validate(val2, obj, message);
    validation2._valid = validation1._valid || validation2._valid;
    validation2._messages = makeMessage(validation2._valid, message, type);
    validation2._maxLength = validation1._maxLength > 0 && validation2._maxLength > 0
      ? Math.max(validation1._maxLength, validation2._maxLength)
      : 0;
    validation2._required = validation1._required && validation2._required;
    return validation2;
  };
}
