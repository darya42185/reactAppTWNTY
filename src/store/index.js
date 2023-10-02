import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "../features/cart";
import { solarPanelApi } from "../services/solarPanel.js";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [solarPanelApi.reducerPath]: solarPanelApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
      },
    }).concat(solarPanelApi.middleware),
});

setupListeners(store.dispatch);
