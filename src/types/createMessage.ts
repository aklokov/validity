import { messageType } from "./messageType";

export type createMessage = {
  (message: messageType, ...params: any[]): string;
}
