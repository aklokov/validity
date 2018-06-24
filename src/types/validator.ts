import { Validation } from "./validation";
import { createMessage } from "./createMessage";

export type Validator<T> = {
  (obj: T, message?: createMessage): Validation<T>;
};

export type Validators<T> = Validator<T> | Validator<T>[];
