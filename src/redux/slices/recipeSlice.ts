import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { Recipe } from "../types";

const initialState: Recipe[] = [];

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.push(action.payload);
    },
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      const index = state.findIndex(
        (recipe) => recipe._id === action.payload._id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeRecipe: (state, action: PayloadAction<string>) => {
      return state.filter((recipe) => recipe._id !== action.payload);
    },
  },
});

export const { addRecipe, updateRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

// API Queries for recipes
export const recipesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query<Recipe[], void>({
      query: () => "/recipes",
      providesTags: ["Recipe"],
    }),
    getRecipeById: builder.query<Recipe, string>({
      query: (id) => `/recipes/${id}`,
      providesTags: (result, error, id) => [{ type: "Recipe", id }],
    }),
    createRecipe: builder.mutation<Recipe, Partial<Recipe>>({
      query: (newRecipe) => ({
        url: "/recipes",
        method: "POST",
        body: newRecipe,
      }),
      invalidatesTags: ["Recipe"],
    }),

    updateRecipe: builder.mutation<
      Recipe,
      { id: string; updatedRecipe: Partial<Recipe> }
    >({
      query: ({ id, updatedRecipe }) => {
        console.log("Updated recipe data:", updatedRecipe); // Log the updated data here
        return {
          url: `/recipes/${id}`, // The API endpoint for updating a recipe
          method: "PUT", // Use the PATCH method to update the resource
          body: updatedRecipe, // Send the updated recipe data in the request body
        };
      },
      invalidatesTags: ["Recipe"], // Invalidate the cache for the "Recipe" tag to refetch updated data
    }),

    deleteRecipe: builder.mutation<void, string>({
      query: (id) => ({
        url: `/recipes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recipe"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeByIdQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApiSlice;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { apiSlice } from "../api/apiSlice";
// import { Recipe } from "../types";

// const initialState: Recipe[] = [];

// export const recipeSlice = createSlice({
//   name: "recipe",
//   initialState,
//   reducers: {
//     addRecipe: (state, action: PayloadAction<Recipe>) => {
//       state.push(action.payload);
//     },
//     updateRecipe: (state, action: PayloadAction<Recipe>) => {
//       const index = state.findIndex(
//         (recipe) => recipe._id === action.payload._id
//       );
//       if (index !== -1) {
//         state[index] = action.payload;
//       }
//     },
//     removeRecipe: (state, action: PayloadAction<string>) => {
//       const index = state.findIndex((recipe) => recipe._id === action.payload);
//       if (index !== -1) {
//         state[index].isDeleted = true; // Mark as deleted without removing from array
//       }
//     },
//   },
// });

// export const { addRecipe, updateRecipe, removeRecipe } = recipeSlice.actions;
// export default recipeSlice.reducer;

// // API Queries for recipes
// export const recipesApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getRecipes: builder.query<Recipe[], void>({
//       query: () => "/recipes",
//       providesTags: ["Recipe"],
//     }),
//     getRecipeById: builder.query<Recipe, string>({
//       query: (id) => `/recipes/${id}`,
//       providesTags: (result, error, id) => [{ type: "Recipe", id }],
//     }),
//     createRecipe: builder.mutation<Recipe, Partial<Recipe>>({
//       query: (newRecipe) => ({
//         url: "/recipes",
//         method: "POST",
//         body: newRecipe,
//       }),
//       invalidatesTags: ["Recipe"],
//     }),
//     updateRecipe: builder.mutation<Recipe, Partial<Recipe>>({
//       query: (updatedRecipe) => ({
//         url: `/recipes/${updatedRecipe._id}`,
//         method: "PUT",
//         body: updatedRecipe,
//       }),
//       invalidatesTags: ["Recipe"],
//     }),
//     deleteRecipe: builder.mutation<void, string>({
//       query: (id) => ({
//         url: `/recipes/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Recipe"],
//     }),
//   }),
// });

// export const {
//   useGetRecipesQuery,
//   useGetRecipeByIdQuery,
//   useCreateRecipeMutation,
//   useUpdateRecipeMutation,
//   useDeleteRecipeMutation,
// } = recipesApiSlice;
