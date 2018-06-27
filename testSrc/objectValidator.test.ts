import { expect } from "chai";
import { valid, invalid } from "./testSupport";
import { objectValidator } from "../src/validators/objectValidator";

interface TP {
  bool: boolean;
  num: number;
}

describe("objectValidator", function (): void {
  it("should return valid if obj is null", function (): void {
    // arrange

    // act
    const result = objectValidator<TP>({})(null);

    // assert
    expect(result._valid).equals(true);

  });
  it("should return objectValidation", function (): void {
    // arrange

    // act
    const result = objectValidator<TP>({
      bool: valid,
      num: invalid
    })(<any>{});

    // assert
    expect(result.bool._valid).equals(true);
    expect(result.num._valid).equals(false);
    expect(result._valid).equals(false);
  });

  it("should return valid if all fields are valid", function (): void {
    // arrange

    // act
    const result = objectValidator<TP>({
      bool: valid,
      num: valid
    })(<any>{});

    // assert
    expect(result._valid).equals(true);
  });
});
