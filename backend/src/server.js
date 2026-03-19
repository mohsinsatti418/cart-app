import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from '../src/Config/db.js';
import cartRoutes from "../src/routes/cartRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/cart", cartRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});