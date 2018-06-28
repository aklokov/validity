import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { makeValidation } from "../makeMessage";

export function required<T>(obj: T, message?: createMessage): BasicValidation {
  const _valid = obj !== null && obj !== undefined && <any>obj !== "" && <any>obj !== [];
  return {
    ...makeValidation(_valid, message, "validation.required"),
    _required: true
  };
}
