import { useDeleteRecipeMutation } from "@/redux/slices/recipeSlice";
import { Recipe } from "@/redux/types";

interface DeleteRecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const DeleteRecipeModal: React.FC<DeleteRecipeModalProps> = ({ recipe, onClose }) => {
  const [deleteRecipe] = useDeleteRecipeMutation();

  const handleDelete = async () => {
    await deleteRecipe(recipe._id);
    onClose(); // Close modal after delete
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Are you sure?</h2>
        <p className="mb-6">Do you really want to delete <strong>{recipe.title}</strong>?</p>
        <button
          onClick={handleDelete}
          className="w-full bg-red-500 text-white py-2 rounded-2xl hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2 bg-gray-300 text-black py-2 rounded-2xl hover:bg-gray-400 transition duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteRecipeModal;
