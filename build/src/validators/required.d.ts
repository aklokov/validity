import { createMessage } from "../types/createMessage";
import { BasicValidation } from "../types/validation";
export declare function required<T>(obj: T, message?: createMessage): BasicValidation;
