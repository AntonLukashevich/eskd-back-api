"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
mongoose_1.default.connect(process.env.DATABASE, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useFindAndModify: false,
// useCreateIndex: true,
});
mongoose_1.default.connection.on("error", (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 →-> ${err.message}`);
});
const app = require("./index");
app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), async () => {
    console.log(`Server Express running → PORT ${server.address().port}`);
});
