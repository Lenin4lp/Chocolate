import { Router } from "express";
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  addCacaoPercentage,
  addFlavorToProduct,
  addProductToCategory,
  deleteCacaoPercentage,
  deleteFlavorFromProduct,
  deleteProductFromCategory,
} from "../controllers/product.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

router.post("/product/:id/cacao", addCacaoPercentage);
router.delete("/product/:id/cacao", deleteCacaoPercentage);
router.post("/product/:id/flavor", addFlavorToProduct);
router.delete("/product/:id/flavor", deleteFlavorFromProduct);
router.post("/product/:id/category", addProductToCategory);
router.delete("/product/:id/category", deleteProductFromCategory);

export default router;
