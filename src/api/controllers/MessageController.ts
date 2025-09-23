import { Request, Response } from "express";
import Message from "../../models/Message";


export const getMessageList = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Failed to retrieve message lis' });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { name, phone, message: text } = req.body;

    if (!name || !phone || !text) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (name.length < 2 || name.length > 30) {
      return res.status(400).json({ error: "The name must be between 2 and 30 characters." });
    }

    const newMessage = new Message({
      name,
      phone,
      message: text,
      created: new Date(),
      modified: new Date(),
    });

    const savedMessage = await newMessage.save();

    res.status(201).json(savedMessage);
  } catch (error: any) {
    console.error("Error creating message:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: Object.values(error.errors).map((err: any) => err.message),
      });
    }
    res.status(500).json({
      success: false,
      message: "Не удалось создать сообщение",
    });
  }
};

export default {
  getMessageList,
  createMessage,
};
