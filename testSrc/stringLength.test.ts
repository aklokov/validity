import { expect } from "chai";
import { maxLength, minLength, exactLength } from "../src/validators/stringLength";

describe("maxLength", function (): void {
  it("should return valid for shorter string", function (): void {
    // arrange

    // act
    const result = maxLength(5)("abhy");

    // assert
    expect(result._valid).equals(true);
    expect(result._maxLength).equals(5);
  });

  it("should return invalid for longer string", function (): void {
    // arrange

    // act
    const result = maxLength(5)("asdf2213");

    // assert
    expect(result._valid).equals(false);
  });
});


describe("minLength", function (): void {
  it("should return invalid for shorter string", function (): void {
    // arrange

    // act
    const result = minLength(5)("abhy");

    // assert
    expect(result._valid).equals(false);
  });

  it("should return valid for longer string", function (): void {
    // arrange

    // act
    const result = minLength(5)("asdf2213");

    // assert
    expect(result._valid).equals(true);
  });
});


describe("exactLength", function (): void {
  it("should return invalid for shorter string", function (): void {
    // arrange

    // act
    const result = exactLength(5)("abhy");

    // assert
    expect(result._valid).equals(false);
  });

  it("should return invalid for longer string", function (): void {
    // arrange

    // act
    const result = exactLength(5)("abhy123");

    // assert
    expect(result._valid).equals(false);
  });

  it("should return valid for string of length", function (): void {
    // arrange

    // act
    const result = exactLength(5)("asdf2");

    // assert
    expect(result._valid).equals(true);
  });
});
