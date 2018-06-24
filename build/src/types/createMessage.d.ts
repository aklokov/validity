export declare type createMessage = {
    (message: messageType, ...params: any[]): string;
};
export declare type messageType = "validation.required" | "validation.maxLength" | "validation.minLength" | "validation.exactLength" | "validation.numeric" | "validation.alphanumeric" | "validation.moreThan" | "validation.lessThan" | "validation.equalOrMore" | "validation.equalOrLess" | "validation.regex";
