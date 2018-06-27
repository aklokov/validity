import { Validators } from "./types/validator";
import { createMessage } from "./types/createMessage";
import { Validation } from "./types/validation";
import { Validate } from "./types/validate";
export declare function validate<T>(validators: Validators<T>, obj: T, message?: createMessage): Validation<T>;
export declare function validity<T>(validators: Validators<T>, message?: createMessage): {
    validate: Validate<T>;
};
