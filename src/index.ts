import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./api/routes";

dotenv.config();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:4200",
  "http://localhost:3001",
];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

const app = express();

app.use(helmet());
app.use(cors(options));
app.use(express.json());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
//   next();
// });
app.use("/", routes);
module.exports = app;
