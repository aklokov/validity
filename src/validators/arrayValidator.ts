import { createMessage } from "../types/createMessage";
import { ArrayValidation } from "../types/validation";
import { Validator, Validators } from "../types/validator";
import { validate } from "../validity";
import { all } from "@vlr/array-tools";

export function arrayValidator<T>(validator: Validators<T>): Validator<T[]> {
  return function (obj: T[], message?: createMessage): ArrayValidation<T> {
    if (!Array.isArray) { return <any>{ _valid: true }; }
    const validation: any = obj.map(item => validate(validator, item, message));
    validation._valid = all(validation, (item: any) => item._valid);
    return validation;
  };
}
