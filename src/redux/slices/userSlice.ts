import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { TUser } from "../types";

interface UserState {
  currentUser: TUser | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.currentUser = action.payload;
    },
    updateUser: (state, action: PayloadAction<TUser>) => {
      if (state.currentUser?._id === action.payload._id) {
        state.currentUser = action.payload;
      }
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

// API Queries for User Profile Management
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUserProfile: builder.query<TUser, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    blockUser: builder.mutation({
      query: (id: string) => ({
        url: `/users/${id}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/users/${id}/role`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useFetchUserProfileQuery,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useBlockUserMutation,
} = usersApiSlice;
