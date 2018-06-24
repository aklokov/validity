import { Validator, Validators } from "../types/validator";
export declare type ValidatorConfig<T> = {
    [P in keyof T]?: Validators<T[P]>;
};
export declare function objectValidator<T>(config: ValidatorConfig<T>): Validator<T>;
