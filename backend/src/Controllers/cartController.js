const cartService = require("../Services/cartService");

const getCart = (req, res) => {
  const data = cartService.getCart();
  res.json(data);
};

const addToCart = (req, res) => {
  const data = cartService.addItem(req.body);
  res.json(data);
};

const removeFromCart = (req, res) => {
  const { id } = req.params;
  const data = cartService.removeItem(Number(id));
  res.json(data);
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};