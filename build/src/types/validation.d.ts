import { ValueType } from "./valueType";
export declare type BasicValidation = {
    _valid: boolean;
    _messages?: string[];
    _required?: boolean;
    _maxLength?: number;
};
export declare type ValidationType<TInput> = {
    [P in keyof TInput]?: Validation<TInput[P]>;
};
export declare type Validation<T> = T extends Array<any> ? ArrayValidation<T[0]> & BasicValidation : ItemValidation<T>;
export declare type ArrayValidation<T> = ItemValidation<T>[] & BasicValidation;
export declare type ItemValidation<T> = T extends ValueType ? BasicValidation : (ValidationType<T> & BasicValidation);
