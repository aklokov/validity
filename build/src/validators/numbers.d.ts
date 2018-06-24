import { Validator } from "../types/validator";
export declare function moreThan(limit: number): Validator<number>;
export declare function lessThan(limit: number): Validator<number>;
export declare function equalOrMore(limit: number): Validator<number>;
export declare function equalOrLess(limit: number): Validator<number>;
