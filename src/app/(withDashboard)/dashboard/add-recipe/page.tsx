// "use client";

// import React, { useState } from "react";
// import { useAppSelector } from "@/redux/hook";
// import { useCreateRecipeMutation } from "@/redux/slices/recipeSlice";
// import { useRouter } from "next/navigation";

// const AddRecipe: React.FC = () => {
//   const currentUser = useAppSelector((state) => state.user?.currentUser?.user);
//   const [createRecipe] = useCreateRecipeMutation();
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [ingredients, setIngredients] = useState<string[]>([""]);
//   const [error, setError] = useState<string>("");

//   const handleAddIngredient = () => {
//     setIngredients([...ingredients, ""]); // Add a new ingredient input
//   };

//   const handleIngredientChange = (index: number, value: string) => {
//     const newIngredients = [...ingredients];
//     newIngredients[index] = value;
//     setIngredients(newIngredients);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate form inputs
//     if (!title || !description || ingredients.some((ing) => !ing.trim())) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     const recipeData = {
//       title,
//       description,
//       ingredients,
//       user: currentUser?._id, // Reference to the user who created the recipe
//     };

//     try {
//       await createRecipe(recipeData).unwrap(); // Call the mutation to create the recipe
//       router.push("/recipes"); // Redirect to the recipes page after successful creation
//     } catch (error) {
//       console.error("Failed to create the recipe:", error);
//       setError("Failed to create the recipe.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block font-semibold">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description" className="block font-semibold">
//             Description
//           </label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="textarea textarea-bordered w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold">Ingredients</label>
//           {ingredients.map((ingredient, index) => (
//             <div key={index} className="flex space-x-2 items-center">
//               <input
//                 type="text"
//                 value={ingredient}
//                 onChange={(e) => handleIngredientChange(index, e.target.value)}
//                 className="input input-bordered w-full"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={handleAddIngredient}
//                 className="btn btn-outline"
//               >
//                 Add
//               </button>
//             </div>
//           ))}
//         </div>
//         <button type="submit" className="btn btn-primary mt-4">
//           Add Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipe;

// "use client";

// import React, { useState } from "react";
// import { useAppSelector } from "@/redux/hook";
// import { useCreateRecipeMutation } from "@/redux/slices/recipeSlice";
// import { useRouter } from "next/navigation";

// const AddRecipe: React.FC = () => {
//   const currentUser = useAppSelector((state) => state.user?.currentUser?.user);
//   const [createRecipe] = useCreateRecipeMutation();
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
//   const [error, setError] = useState<string>("");

//   const handleAddIngredient = () => {
//     setIngredients([...ingredients, { name: "", quantity: "" }]); // Add a new ingredient input
//   };

//   const handleIngredientChange = (
//     index: number,
//     field: string,
//     value: string
//   ) => {
//     const newIngredients = [...ingredients];
//     newIngredients[index][field] = value;
//     setIngredients(newIngredients);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate form inputs
//     if (
//       !title ||
//       !description ||
//       ingredients.some((ing) => !ing.name.trim() || !ing.quantity.trim())
//     ) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     const recipeData = {
//       title,
//       description,
//       ingredients,
//       user: currentUser._id, // Reference to the user who created the recipe
//     };

//     try {
//       await createRecipe(recipeData).unwrap(); // Call the mutation to create the recipe
//       router.push("/recipes"); // Redirect to the recipes page after successful creation
//     } catch (error) {
//       console.error("Failed to create the recipe:", error);
//       setError("Failed to create the recipe.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block font-semibold">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description" className="block font-semibold">
//             Description
//           </label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="textarea textarea-bordered w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold">Ingredients</label>
//           {ingredients.map((ingredient, index) => (
//             <div key={index} className="flex space-x-4 mb-2">
//               <input
//                 type="text"
//                 placeholder="Ingredient Name"
//                 value={ingredient.name}
//                 onChange={(e) =>
//                   handleIngredientChange(index, "name", e.target.value)
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Quantity"
//                 value={ingredient.quantity}
//                 onChange={(e) =>
//                   handleIngredientChange(index, "quantity", e.target.value)
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={handleAddIngredient}
//                 className="btn btn-outline"
//               >
//                 Add
//               </button>
//             </div>
//           ))}
//         </div>
//         <button type="submit" className="btn btn-primary mt-4">
//           Add Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipe;

"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { useCreateRecipeMutation } from "@/redux/slices/recipeSlice";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const AddRecipe: React.FC = () => {
  const currentUser = useAppSelector((state) => state.user?.currentUser?.user);
  const [createRecipe] = useCreateRecipeMutation();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [error, setError] = useState<string>("");

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleIngredientChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !title ||
      !description ||
      !cookingTime ||
      !image ||
      ingredients.some((ing) => !ing.name.trim() || !ing.quantity.trim())
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const recipeData = new FormData();
    recipeData.append("title", title);
    recipeData.append("description", description);
    recipeData.append("cookingTime", cookingTime);
    recipeData.append("image", image);
    recipeData.append("user", currentUser?._id); // Reference to the user who created the recipe
    ingredients.forEach((ingredient) => {
      recipeData.append("ingredients", JSON.stringify(ingredient));
    });

    try {
      await createRecipe(recipeData).unwrap(); // Call the mutation to create the recipe
      router.push("/recipes"); // Redirect to the recipes page after successful creation
    } catch (error) {
      console.error("Failed to create the recipe:", error);
      setError("Failed to create the recipe.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Add a New Recipe</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="cookingTime" className="block font-semibold">
            Cooking Time (in minutes)
          </label>
          <input
            type="number"
            id="cookingTime"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block font-semibold">
            Image Upload
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex space-x-4 mb-2 items-center">
              <input
                type="text"
                placeholder="Ingredient Name"
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, "name", e.target.value)
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                onClick={handleAddIngredient}
                className="btn btn-outline text-center"
              >
                <FaPlus /> {/* React Icon for adding ingredients */}
              </button>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary mt-4 w-full">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
