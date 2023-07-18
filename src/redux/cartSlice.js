import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        const itemSizeMatch = state.cart.find(
          (item) => item.size === action.payload.size
        );

        if (itemSizeMatch) {
          itemInCart.quantity++;
          toast.info(
            `${action.payload.name}, ${action.payload.size}, quantity incremented in the cart`,
            {
              position: toast.POSITION.BOTTOM_LEFT,
            }
          );
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(
          `${action.payload.name}, ${action.payload.size}, was added`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 15) {
        return;
      } else {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  getTotal,
} = cartSlice.actions;
