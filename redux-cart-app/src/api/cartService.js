import api from "./interceptor";

const cartService = {
  getCart: async () => {
    try {
      const response = await api.get("/cart/getAll");
      return response.data;
    } catch (error) {
      console.error("Get cart error:", error.response?.data || error.message);
      throw error;
    }
  },

  addToCart: async (item) => {
    try {
      const response = await api.post("/cart/addToCart", item);
      return response.data;
    } catch (error) {
      console.error("Add cart error:", error.response?.data || error.message);
      throw error;
    }
  },

  removeFromCart: async (id) => {
    try {
      const response = await api.delete(`/cart/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Remove cart error:", error.response?.data || error.message);
      throw error;
    }
  },
};

export default cartService;