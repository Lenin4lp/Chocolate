import { Router } from "express";
import {
  getCacao,
  getCacaos,
  createCacao,
  updateCacao,
  deleteCacao,
} from "../controllers/cacao.controller";

const router = Router();

router.get("/cacaos", getCacaos);
router.get("/cacao/:id", getCacao);
router.post("/cacao", createCacao);
router.put("/cacao/:id", updateCacao);
router.delete("/cacao/:id", deleteCacao);

export default router;
