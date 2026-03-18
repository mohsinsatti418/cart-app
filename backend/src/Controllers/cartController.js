import Cart from "../models/cartModel.js";

const cartController = {
  getCart: async (req, res) => {
    try {
      const items = await Cart.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addToCart: async (req, res) => {
    try {
      const item = await Cart.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  removeFromCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.json({ message: "Item removed" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default cartController;