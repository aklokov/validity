import { Validation } from "./validation";

export type Validate<T> = (obj: T) => Validation<T>;
