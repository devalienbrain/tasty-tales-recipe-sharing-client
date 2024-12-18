import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { TUser } from "../types";

// Initial state is an empty array of TUser[]
const initialState: TUser[] = [];

// Redux slice for user management
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Optionally add user functionality
    // addUser: (state, action: PayloadAction<TUser>) => {
    //   state.push(action.payload);
    // },

    // Action to update a user in the state by matching the user ID
    updateUser: (state, action: PayloadAction<TUser>) => {
      const index = state.findIndex((user) => user._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload; // Update the user object
      }
    },

    // Action to block a user by setting `isBlocked` to true
    blockUser: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((user) => user._id === action.payload);
      if (index !== -1) {
        state[index].isBlocked = true; // Set isBlocked property to true
      }
    },
  },
});

export const { updateUser, blockUser } = userSlice.actions;
export default userSlice.reducer;

// API Queries for user management (fetch, block, update role)
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch user profile by ID
    fetchUserProfile: builder.query<TUser, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    // Fetch all users (returns array of TUser)
    getAllUsers: builder.query<TUser[], void>({
      query: () => "/users",
      providesTags: ["User"],
    }),

    // Block a user by ID (PATCH request)
    blockUser: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/users/${id}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"], // Invalidates User-related cache
    }),

    // Update user role (e.g., admin, user)
    updateUserRole: builder.mutation<void, { id: string; role: string }>({
      query: ({ id, role }) => ({
        url: `/users/${id}/role`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["User"], // Invalidates User-related cache
    }),
  }),
});

export const {
  useFetchUserProfileQuery,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useBlockUserMutation,
} = usersApiSlice;
