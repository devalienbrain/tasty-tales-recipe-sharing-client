import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { TUser } from '../types';

type TAuthState = {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: TAuthState = {
  token: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthToken, logout } = authSlice.actions;
export default authSlice.reducer;

// API Queries for Authentication
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerUser: builder.mutation<{ token: string }, { name: string; email: string; password: string }>({
      query: (userDetails) => ({
        url: '/auth/register',
        method: 'POST',
        body: userDetails,
      }),
      invalidatesTags: ['Auth'],
    }),
    refreshToken: builder.query<{ token: string }, void>({
      query: () => '/auth/refresh',
      providesTags: ['Auth'],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRefreshTokenQuery,
} = authApiSlice;
