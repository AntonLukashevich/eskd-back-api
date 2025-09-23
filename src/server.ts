import mongoose from "mongoose";

require("dotenv").config();

mongoose.connect(process.env.DATABASE!, {})

mongoose.connection.on("error", (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 →-> ${err.message}`);
});

const app = require("./index");
app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), async () => {
  console.log(`Server Express running → PORT ${server.address().port}`);
});
