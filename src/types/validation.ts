import { ValueType } from "./valueType";

export type BasicValidation = {
  _valid?: boolean,
  _messages?: string[],
  _required?: boolean,
  _maxLength?: number
};

export type ValidationType<TInput> = {
  [P in keyof TInput]?: Validation<TInput[P]>;
};


export type Validation<T> = T extends Array<any>
  ? ArrayValidation<T[0]> & BasicValidation
  : ItemValidation<T>;



export type ArrayValidation<T> = ItemValidation<T>[] & BasicValidation;

export type ItemValidation<T> = T extends ValueType
  ? BasicValidation
  : (ValidationType<T> & BasicValidation);
