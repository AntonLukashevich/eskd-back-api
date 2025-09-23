"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.MessageSchema = new Schema({
    name: String,
    phone: String,
    message: String,
    created: Date,
    modified: Date
});
const Message = mongoose_1.default.model("Messagers", exports.MessageSchema);
exports.default = Message;
module.exports = Message;
