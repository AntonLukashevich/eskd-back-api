import { Router, Request, Response, NextFunction } from "express";
import messageController from "./controllers/MessageController";

export const catchErrors = (fn: CallableFunction) => {
  return function (req: Request, res: Response, next: NextFunction) {
    return fn(req, res, next).catch(next);
  };
};

const app = Router();

app.get('/test', (req, res) => {res.status(200).send('Test route works')})

app.post("/messages/create", catchErrors(messageController.createMessage));
app.get("/messages", catchErrors(messageController.getMessageList));

export default app;
