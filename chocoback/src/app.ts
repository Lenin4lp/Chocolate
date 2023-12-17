import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import { connectionDB } from "./connection/connection";

const app = express();

app.use(morgan("dev"));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(urlencoded({ extended: false }));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

connectionDB();

export default app;
