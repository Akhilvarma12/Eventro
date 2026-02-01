import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import requirementRoutes from "./routes/requirementRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use("/api/requirements", requirementRoutes);

app.get("/", (req, res) => {
  res.send("GoPratle API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
