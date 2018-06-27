import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
import { makeMessage } from "../makeMessage";

export function required<T>(obj: T, message?: createMessage): BasicValidation {
  const _valid = obj !== null && obj !== undefined && <any>obj !== "";
  return {
    ...makeMessage(_valid, message, "validation.required"),
    _required: true
  };
}
