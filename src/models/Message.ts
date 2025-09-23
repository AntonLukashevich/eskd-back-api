import mongoose from "mongoose";
import { IMessageDocument } from "./Messager.interface";

const Schema = mongoose.Schema;

export const MessageSchema = new Schema<IMessageDocument>({
  name: String,
  phone: String,
  message: String,
  created: Date,
  modified: Date
})

const Message = mongoose.model<IMessageDocument>("Messagers", MessageSchema)
export default Message;
module.exports = Message
