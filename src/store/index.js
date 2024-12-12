import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice.js";
import cartUISlice from "./ui-slice.js";

const store = configureStore({
  reducer: { cartUI: cartUISlice.reducer, cart: cartSlice.reducer },
});

export default store;
