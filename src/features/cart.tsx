import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "mcrAvailabilityFilters",
  initialState,
  reducers: {
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { updateCartItems } = cartSlice.actions;

export default cartSlice.reducer;
