import express from "express";
import cartController from "../controllers/cartController.js";

const router = express.Router();

router.get("/getAll",        cartController.getCart);
router.post("/addToCart",       cartController.addToCart);
router.delete("/delete/:id",  cartController.removeFromCart);

export default router;