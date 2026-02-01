import express from "express";
import { createRequirement } from "../controllers/requirementController.js";

const router = express.Router();

router.post("/", createRequirement);

export default router;
