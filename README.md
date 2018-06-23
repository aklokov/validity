# @vlr/validity
very simple validation library

# creating your own validator
lets say you have a typescript type
```
export interface Person {
  name: string;  
  address: string;  
  age: number;
  foodTaste?: string;
}
```
And you want to decide if object is valid or not, based on following rules:
a. Name is required and can't be longer than 20 characters
b. Address is required.
c. Age is not negative and less than 100.
c. Food taste is not constrainted to anything, not required.


To create such a validator:
```
import {Validator, ObjectValidator, requred, maxLength, equalOrMoreThan, lessThan} from '@vlr/validity'
connst validator: Validator<Person> = ObjectValidator<Person>({
  name: [required, maxLength(20)],
  address: required,
  age: [equalOrMoreThan(0), lessThan(100)]
});
```

# validating an object
To validate an object: 
import {validity} from '@vlr/validity';
```
function isMyPersonValid(somePerson: Person): bool {
  const validate: Validate<Person> = validity(validator).validate;
  const result: Validation<Person> = validate(somePerson);
  return result._valid;
}
```


# getting validation messages for fields
To get the messages, you need to provide a function to convert predefined constant into your localized messages.
```
import {message} from '@vlr/validity';
function createMessage(msg: message, ...params: string[]): string {
  switch(msg){
	case 'validation.required':
		return 'Value is required';
	case 'validation.equalOrMoreThan':
		return 'Value should not be equal to {0} or higher'.replace({0}, params[0];
	default:
	    return 'Value is just invalid'
  }
}

const result = validity(validator, createMessage).validate(person);
const addresValid = result.address._valid;
const messagesForAddress = result.address._messages; // can be null of ['Value is required']
```

# nesting objects
```
export interface Vehicle {
   licencePlate: string;
   driver: Person;
   passenger: Person;
}

const vehicleValidator = ObjectValidator<Vehicle>({
  licencePlate: // some complex validation here,
  driver: [required, personValidator]
  passenger: personValidator
});
```

If passenger is absent, then result.passenger._valid => true;
If passenger is present, then _valid flag is calculated by validation rules.

# nesting arrays
```
export interface Company {
  title: string;
  aliases: string[];  
  employees: Person[];
}
const companyValidator = objectValidator<Company>({
  title: required,
  aliases: [required, minElements(2)]
  employees: [maxElements(100), ArrayValidator<Person>(}]
});

const firstEmployeeValid = result.employees[0]._valid;

```
