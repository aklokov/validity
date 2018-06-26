import { expect } from "chai";
import { required } from "../src/validators";
import { testMessage } from "./testMessage";

describe("required", function (): void {
  it("should return valid for constant", function (): void {
    // arrange

    // act
    const result = required(1);

    // assert
    expect(result._valid).equals(true);
    expect(result._required).equals(true);
  });

  it("should return invalid for null", function (): void {
    // arrange

    // act
    const result = required(null);

    // assert
    expect(result._valid).equals(false);
    expect(result._required).equals(true);
  });

  it("should return message for empty string", function (): void {
    // arrange

    // act
    const result = required("", testMessage);

    // assert
    expect(result._valid).equals(false);
    expect(result._required).equals(true);
    expect(result._messages).deep.equals(["validation.required"]);
  });
});
