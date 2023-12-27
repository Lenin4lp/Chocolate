import { Router } from "express";
import {
  getFlavor,
  getFlavors,
  createFlavor,
  updateFlavor,
  deleteFlavor,
} from "../controllers/flavor.controller";

const router = Router();

router.get("/flavors", getFlavors);
router.get("/flavor/:id", getFlavor);
router.post("/flavor", createFlavor);
router.put("/flavor/:id", updateFlavor);
router.delete("/flavor/:id", deleteFlavor);

export default router;
