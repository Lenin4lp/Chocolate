import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import { connectionDB } from "./connection/connection";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";
import cacaoRoutes from "./routes/cacao.routes";
import flavorRoutes from "./routes/flavor.routes";

const app = express();

app.use(morgan("dev"));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(urlencoded({ extended: false }));

app.use(express.json());
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", cacaoRoutes);
app.use("/api", flavorRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

connectionDB();

export default app;
