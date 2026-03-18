let cartItems = [];

const cartService = {
  getCart: () => {
    return cartItems;
  },

  addItem: (item) => {
    cartItems.push(item);
    return cartItems;
  },

  removeItem: (id) => {
    cartItems = cartItems.filter((item) => item.id !== id);
    return cartItems;
  },
};

module.exports = cartService;