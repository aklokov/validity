import { expect } from "chai";
import { or } from "../src";

const valid = () => ({ _valid: true });
const invalid = () => ({ _valid: false });

describe("or", function (): void {
  it("should return valid if one is valid", function (): void {
    // arrange

    // act
    const result1 = or(invalid, valid)(1);
    const result2 = or(valid, valid)(1);

    // assert
    expect(result1._valid).equals(true);
    expect(result2._valid).equals(true);
  });

  it("should return invalid if both are invalid", function (): void {
    // arrange

    // act
    const result = or(invalid, invalid)(1);

    // assert
    expect(result._valid).equals(false);
  });

  it("should return second object as a result", function (): void {
    // arrange
    const val = {
      _valid: false,
      _someFlag: true
    };
    // act
    const result = or(valid, () => val)(1);

    // assert
    expect(result === val).equals(true);
  });
});
