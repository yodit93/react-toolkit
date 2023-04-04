import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../../CartItems";

const initialState = {
  cartItems: CartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const {clearCart} = cartSlice.actions;

export default cartSlice.reducer;