import { Validators, Validator } from "../types/validator";
import { messageType } from "../types";
export declare function or<T>(val1: Validators<T>, val2: Validators<T>, type: messageType): Validator<T>;
