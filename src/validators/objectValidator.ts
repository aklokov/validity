import { Validator, Validators } from "../types/validator";
import { Validation } from "../types/validation";
import { createMessage } from "../types/createMessage";
import { keys, values, get } from "@vlr/map-tools/objectMap";
import { validate } from "../validity";
import { all } from "@vlr/array-tools";

export type ValidatorConfig<T> = {
  [P in keyof T]?: Validators<T[P]>
};

export function objectValidator<T>(config: ValidatorConfig<T>): Validator<T> {
  const configKeys = keys(config);
  return function (obj: T, message: createMessage): Validation<T> {
    if (!obj) { return <any>{ _valid: true }; }
    const result: any = {};
    configKeys.forEach((key: string) => {
      const validator: any = get(config, key);
      const field: any = get(obj, key);
      result[key] = validate(validator, field, message);
    });
    result._valid = all(values(result), r => r._valid);
    return result;
  };
}
