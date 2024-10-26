// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import recipeReducer from "../slices/recipeSlice";
import userReducer from "../slices/userSlice";
import authReducer from "../slices/authSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configure persistence for the user slice
const userPersistConfig = {
  key: "user",
  storage,
};

const persistedAuthReducer = persistReducer(userPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    recipe: recipeReducer,
    user: userReducer,
    auth: persistedAuthReducer, // Persisted user reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
