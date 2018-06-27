import { expect } from "chai";
import { testMessage } from "./testSupport";
import { numeric, alphanumeric, alpha, regex } from "../src/validators/strings";

describe("numeric", function (): void {
  it("should return valid for number", function (): void {
    // arrange

    // act
    const result = numeric(1);

    // assert
    expect(result._valid).equals(true);
  });

  it("should return valid for digits", function (): void {
    // arrange

    // act
    const result = numeric("234");

    // assert
    expect(result._valid).equals(true);
  });

  it("should return invalid for letters", function (): void {
    // arrange

    // act
    const result = numeric("asdf2213", testMessage);

    // assert
    expect(result._valid).equals(false);
    expect(result._messages).deep.equals(["validation.numeric"]);
  });
});

describe("alpha", function (): void {
  it("should return valid for letters", function (): void {
    // arrange

    // act
    const result = alpha("abhy");

    // assert
    expect(result._valid).equals(true);
  });

  it("should return invalid for digits", function (): void {
    // arrange

    // act
    const result = alpha("asdf2213", testMessage);

    // assert
    expect(result._valid).equals(false);
    expect(result._messages).deep.equals(["validation.alpha"]);
  });
});

describe("alphanumeric", function (): void {
  it("should return valid for letters and digits", function (): void {
    // arrange

    // act
    const result = alphanumeric("abhy123");

    // assert
    expect(result._valid).equals(true);
  });

  it("should return invalid for symbols", function (): void {
    // arrange

    // act
    const result = alphanumeric("asd&f22$13", testMessage);

    // assert
    expect(result._valid).equals(false);
    expect(result._messages).deep.equals(["validation.alphanumeric"]);
  });
});

describe("regex", function (): void {
  it("should return valid for match", function (): void {
    // arrange

    // act
    const result = regex(/^[a-c]*$/)("abc");

    // assert
    expect(result._valid).equals(true);
  });

  it("should return invalid for non-match", function (): void {
    // arrange

    // act
    const result = regex(/^[a-c]*$/)("cde");

    // assert
    expect(result._valid).equals(false);
  });
});
