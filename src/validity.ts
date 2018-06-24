import { Validators } from "./types/validator";
import { createMessage } from "./types/createMessage";
import { Validation } from "./types/validation";
import { Validate } from "./types/validate";

export function validate<T>(validators: Validators<T>, message: createMessage, obj: T): Validation<T> {
  if (!Array.isArray(validators)) {
    return validators(obj, message);
  }
}

export function validity<T>(validators: Validators<T>, message?: createMessage): Validate<T> {
  return (obj: T) => validate(validators, message, obj);
}
