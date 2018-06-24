import { Validators } from "./types/validator";
import { createMessage } from "./types/createMessage";
import { Validation } from "./types/validation";
import { all, flatMap, last } from "@vlr/array-tools";

export function validate<T>(validators: Validators<T>, obj: T, message?: createMessage): Validation<T> {
  if (!Array.isArray(validators)) {
    return validators(obj, message);
  }

  if (!validators.length) {
    return <any>{ _valid: true };
  }

  const validations = validators.map(v => v(obj, message));
  const result = last(validations);
  const lengthSpecified = validations.map(v => v._maxLength).filter(l => l > 0);

  result._valid = all(validations, v => v._valid);
  result._messages = flatMap(validations, v => v._messages);
  result._required = validations.some(v => v._required);
  result._maxLength = Math.min(...lengthSpecified) || 0;
  return result;
}

// tslint:disable-next-line:typedef
export function validity<T>(validators: Validators<T>, message?: createMessage) {
  return {
    validate: (obj: T) => validate(validators, obj, message)
  };
}
