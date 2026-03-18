import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "../../api/cart";

export const fetchCart       = createAsyncThunk("cart/fetchCart", async () => {
  return await cartService.getCart();
});

export const addToCart       = createAsyncThunk("cart/addToCart", async (item) => {
  return await cartService.addToCart(item);
});

export const removeFromCart  = createAsyncThunk("cart/removeFromCart", async (id) => {
  return await cartService.removeFromCart(id);
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:   [],
    loading: false,
    error:   null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCart
      .addCase(fetchCart.pending,          (state) => { state.loading = true; })
      .addCase(fetchCart.fulfilled,        (state, action) => {
        state.loading = false;
        state.items   = action.payload;
      })
      .addCase(fetchCart.rejected,         (state, action) => {
        state.loading = false;
        state.error   = action.error.message;
      })
      // addToCart
      .addCase(addToCart.fulfilled,        (state, action) => {
        state.items.push(action.payload);
      })
      // removeFromCart
      .addCase(removeFromCart.fulfilled,   (state, action) => {
        state.items = state.items.filter(item => item._id !== action.meta.arg);
      });
  },
});

export default cartSlice.reducer;
