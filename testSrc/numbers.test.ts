import { expect } from "chai";
import { moreThan, equalOrMore, lessThan, equalOrLess } from "../src/validators/numbers";

describe("moreThan", function (): void {
  it("should return valid for higher number", function (): void {
    // arrange

    // act
    const result = moreThan(5)(6);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return invalid for equal number", function (): void {
    // arrange

    // act
    const result = moreThan(5)(5);

    // assert
    expect(result._valid).equals(false);
  });

  it("should return invalid for lower number", function (): void {
    // arrange

    // act
    const result = moreThan(5)(4);

    // assert
    expect(result._valid).equals(false);
  });
});



describe("lessThan", function (): void {
  it("should return invalid for higher number", function (): void {
    // arrange

    // act
    const result = lessThan(5)(6);

    // assert
    expect(result._valid).equals(false);
  });

  it("should return invalid for equal number", function (): void {
    // arrange

    // act
    const result = lessThan(5)(5);

    // assert
    expect(result._valid).equals(false);
  });

  it("should return valid for lower number", function (): void {
    // arrange

    // act
    const result = lessThan(5)(4);

    // assert
    expect(result._valid).equals(true);
  });
});



describe("equalOrMore", function (): void {
  it("should return valid for higher number", function (): void {
    // arrange

    // act
    const result = equalOrMore(5)(6);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return valid for equal number", function (): void {
    // arrange

    // act
    const result = equalOrMore(5)(5);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return invalid for lower number", function (): void {
    // arrange

    // act
    const result = equalOrMore(5)(4);

    // assert
    expect(result._valid).equals(false);
  });
});

describe("equalOrLess", function (): void {
  it("should return invalid for higher number", function (): void {
    // arrange

    // act
    const result = equalOrLess(5)(6);

    // assert
    expect(result._valid).equals(false);
  });

  it("should return valid for equal number", function (): void {
    // arrange

    // act
    const result = equalOrLess(5)(5);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return valid for lower number", function (): void {
    // arrange

    // act
    const result = equalOrLess(5)(4);

    // assert
    expect(result._valid).equals(true);
  });
});
