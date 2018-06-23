import { ValueType } from "./valueType";

export type BasicValidation = {
  _valid: boolean,
  _messages: string[]
};

export type ValidationType<TInput> = {
  [P in keyof TInput]: Validation<TInput[P]>;
};

export type Validation<T> = T extends ValueType
  ? BasicValidation
  : (ValidationType<T> & BasicValidation);
