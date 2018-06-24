import { Validation } from "./validation";
import { createMessage } from "./createMessage";
export declare type Validator<T> = {
    (obj: T, message?: createMessage): Validation<T>;
};
export declare type Validators<T> = Validator<T> | Validator<T>[];
