

export type createMessage = {
  (message: messageType, ...params: any[]): string;
};

export type messageType = "validation.required"
  | "validation.invalid"
  | "validation.maxLength"
  | "validation.minLength"
  | "validation.exactLength"
  | "validation.numeric"
  | "validation.alpha"
  | "validation.alphanumeric"
  | "validation.moreThan"
  | "validation.lessThan"
  | "validation.equalOrMore"
  | "validation.equalOrLess"
  | "validation.regex";
