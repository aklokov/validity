import { Validator, Validators } from "../types/validator";
import { Validation } from "../types/validation";
import { createMessage } from "../types/createMessage";
import { messageType } from "../types/messageType";

export type ValidatorConfig<T> = {
  [P in keyof T]?: Validators<T[P]>
};


export function objectValidator<T>(config: ValidatorConfig<T>): Validator<T> {

}

interface Vehicle {
  driver: Person;
  passengers: Person[];
}

interface Person {
  age: number;
  name: string;
}

function required(n: any, message?: createMessage): Validation<any> {
    const _valid = n !== null && n !== undefined && n !== "";
    return {
      _valid,
      _messages: _valid ? null : message && [message("validation.required")]
    };
}

function makeMessage(message: createMessage, type: messageType, ...params: any[]): string[] {
  return message && [message(type, ...params)];
}



let b = objectValidator<Person>({
  age: required
});
let a = objectValidator<Vehicle>({

});


b.passengers[0].age;
