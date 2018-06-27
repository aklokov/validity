import { Validators, Validator } from "../types/validator";
export declare function or<T>(val1: Validators<T>, val2: Validators<T>, msg?: string): Validator<T>;
