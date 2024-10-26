import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { TUser } from "../types";

const initialState: TUser[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addUser: (state, action: PayloadAction<TUser>) => {
    //   state.push(action.payload);
    // },
    updateUser: (state, action: PayloadAction<TUser>) => {
      const index = state.findIndex((user) => user._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload; // Update user in the array
      }
    },
    blockUser: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((user) => user._id === action.payload);
      if (index !== -1) {
        state[index].isBlocked = true; // Assuming you have an isBlocked property in TUser
      }
    },
  },
});

export const { updateUser, blockUser } = userSlice.actions;
export default userSlice.reducer;

// API Queries for users
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUserProfile: builder.query<TUser, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    getAllUsers: builder.query<TUser[], void>({
      query: () => "/users",
      providesTags: ["User"],
    }),
    blockUser: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/users/${id}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),
    updateUserRole: builder.mutation<void, { id: string; role: string }>({
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
