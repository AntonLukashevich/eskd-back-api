import { Document } from "mongoose";


interface IMessage {
  name: string;
  phone: string;
  message: string;
  created: Date;
  modified: Date;
}

export interface IMessageDocument extends IMessage, Document { }
