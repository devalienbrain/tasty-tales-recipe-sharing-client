import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import recipeReducer from "../slices/recipeSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    recipe: recipeReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
