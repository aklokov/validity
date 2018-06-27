import { expect } from "chai";
import { valid, invalid } from "./testSupport";
import { arrayValidator } from "../src/validators/arrayValidator";

describe("arrayValidator", function (): void {
  it("should return valid if array is null", function (): void {
    // arrange

    // act
    const result = arrayValidator(invalid)(null);

    // assert
    expect(result._valid).equals(true);

  });
  it("should return valid for empty array", function (): void {
    // arrange

    // act
    const result = arrayValidator(invalid)([]);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return valid if all items are valid", function (): void {
    // arrange

    // act
    const result = arrayValidator(valid)([1, 2, 3]);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return array of validations", function (): void {
    // arrange
    const val = (input: number) => ({ _valid: input !== 2 });
    // act
    const result = arrayValidator<number>(val)([1, 2, 3]);

    // assert
    expect(result._valid).equals(false);
    expect(result.map(v => v._valid)).deep.equals([true, false, true]);
  });
});
