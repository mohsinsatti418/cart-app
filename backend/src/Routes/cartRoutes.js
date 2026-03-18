const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../Controllers/cartController");

router.get("/cart", getCart);
router.post("/cart", addToCart);
router.delete("/cart/:id", removeFromCart);

module.exports = router;