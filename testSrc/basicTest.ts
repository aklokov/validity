
// import { expect } from "chai";
// import { Validator, objectValidator, required, maxLength, minLength, validity } from "../src";
// import { equalOrMore, lessThan } from "../src/validators/numbers";

// describe("basic validation", function (): void {
//   it("should return valid", function (): void {
//     // arrange
//     interface Person {
//       name: string;
//       address: string;
//       age: number;
//       foodTaste?: string;
//     }

//     const validator: Validator<Person> = objectValidator<Person>({
//       name: [required, maxLength(20), minLength(3)],
//       address: required,
//       age: [equalOrMore(0), lessThan(100)]
//     });

//     // act
//     const result = validity(validator).validate({
//       name: "Alex",
//       address: "123123",
//       age: 99
//     });

//     // assert
//     expect(result._valid).equals(true);
//     expect(result.address._valid).equals(true);
//     expect(result.age._valid).equals(true);
//     expect(result.foodTaste).equals(undefined);
//   });
// });
