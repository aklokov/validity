import { expect } from "chai";
import { validity } from "../src/validity";
import { valid, invalid } from "./testSupport";

describe("validate", function (): void {
  it("should return result of a single validator", function (): void {
    // arrange
    const vresult = { _valid: true };

    // act
    const result = validity(() => vresult).validate(1);

    // assert
    expect(result === vresult).equals(true);
  });

  it("should return valid for empty array of validators", function (): void {
    // arrange

    // act
    const result = validity([]).validate(1);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return false if one is false", function (): void {
    // arrange

    // act
    const result = validity([valid, invalid, valid]).validate(1);

    // assert
    expect(result._valid).equals(false);
  });

  it("should return result of last validators", function (): void {
    // arrange
    const vresult = { _valid: true, someflag: false };

    // act
    const result = validity([valid, valid, () => vresult]).validate(1);

    // assert
    expect(result._valid).equals(true);
    expect(result === vresult).equals(true);
    expect(result._required).equals(false);
  });

  it("should return required if one is required", function (): void {
    // arrange
    const vresult = { _valid: true, _required: true };

    // act
    const result = validity([valid, () => vresult, valid]).validate(1);

    // assert
    expect(result._required).equals(true);
    expect(result._maxLength).equals(undefined);
  });

  it("should return minimum maxLength", function (): void {
    // arrange
    const vresult = { _valid: true, _maxLength: 10 };
    const vresult2 = { _valid: true, _maxLength: 20 };

    // act
    const result = validity([valid, () => vresult, () => vresult2]).validate(1);

    // assert
    expect(result._required).equals(false);
    expect(result._maxLength).equals(10);
  });

});
