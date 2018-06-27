import { Validators, Validator } from "../types/validator";
import { createMessage, Validation } from "../types";
import { validate, makeMessage } from "..";

export function or<T>(val1: Validators<T>, val2: Validators<T>, msg: string = "validation.invalid"): Validator<T> {
  return function (obj: T, message?: createMessage): Validation<T> {
    const validation1 = validate(val1, obj, message);
    const validation2 = validate(val2, obj, message);
    const val = makeMessage(validation1._valid || validation2._valid, message, msg);
    return Object.assign(validation2, val);
  };
}
