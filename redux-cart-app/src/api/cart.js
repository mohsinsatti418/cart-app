import api from "./interceptor"; // your axios instance

const cartService = {
  // Get all items
  getCart: async () => {
    try {
      const response = await api.get("/cart");
      return response.data;
    } catch (error) {
      console.error("Get cart error:", error.response?.data || error.message);
      throw error;
    }
  },

  // Add item
  addToCart: async (item) => {
    try {
      const response = await api.post("/cart", item);
      return response.data;
    } catch (error) {
      console.error("Add cart error:", error.response?.data || error.message);
      throw error;
    }
  },

  // Remove item
  removeFromCart: async (id) => {
    try {
      const response = await api.delete(`/cart/${id}`);
      return response.data;
    } catch (error) {
      console.error("Delete cart error:", error.response?.data || error.message);
      throw error;
    }
  },
};

export default cartService;