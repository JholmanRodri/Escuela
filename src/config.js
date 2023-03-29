import { config } from "dotenv";

config();

export const MONGOBD_URI = process.env.MONGOBD_URI || "mongodb://127.0.0.1:27017/Escuela"

export const PORT = process.env.PORT || 5000   