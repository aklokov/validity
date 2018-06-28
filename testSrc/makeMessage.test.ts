import { expect } from "chai";
import { makeMessage } from "../src";


describe("makeMessage", function (): void {
  it("should return undefined if valid", function (): void {
    // arrange

    // act
    const result = makeMessage(true, i => i, "message");

    // assert
    expect(result).equals(undefined);
  });

  it("should return message if invalid", function (): void {
    // arrange

    // act
    const result = makeMessage(false, i => "message2", "message1");

    // assert
    expect(result).deep.equals(["message2"]);
  });

  it("should return message type if creation function is null", function (): void {
    // arrange

    // act
    const result = makeMessage(false, null, "message");

    // assert
    expect(result).deep.equals(["message"]);
  });
});

