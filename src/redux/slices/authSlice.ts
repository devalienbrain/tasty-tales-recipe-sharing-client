import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../types";
import { apiSlice } from "../api/apiSlice";

type TAuthState = {
  token: string | null;
  currentUser: TUser | null;
};

const initialState: TAuthState = {
  currentUser: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<{ currentUser: TUser; token: string }>) => {
      console.log(action.payload);
      state.currentUser = action.payload.currentUser;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.currentUser = null;
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCurrentUser, logout } = authSlice.actions;
export default authSlice.reducer;

// API Queries for Authentication
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    registerUser: builder.mutation<
      { token: string },
      { name: string; email: string; password: string }
    >({
      query: (userDetails) => ({
        url: "/auth/register",
        method: "POST",
        body: userDetails,
      }),
      invalidatesTags: ["Auth"],
    }),
    refreshToken: builder.query<{ token: string }, void>({
      query: () => "/auth/refresh",
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRefreshTokenQuery,
} = authApiSlice;
