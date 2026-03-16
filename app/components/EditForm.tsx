import Form from "next/form";
import AddIngredientsList from "@/app/components/AddIngredientsList";
import type { Recipe } from "@/app/types";
import { updateRecipe } from "../recipes/create/action";

export default function RecipeEditForm({ recipe }: { recipe: Recipe }) {
  return (
    <Form action={updateRecipe} className="grid gap-4 p-4 bg-white">
      <input type="hidden" name="id" value={recipe.id} />
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">
        <label className="font-semibold" htmlFor="title">
          Title
        </label>
        <input
          className="border bg-white p-2"
          type="text"
          id="title"
          name="title"
          defaultValue={recipe.title}
          required
        />
        <label className="font-semibold" htmlFor="description">
          Description
        </label>
        <textarea
          className="border bg-white p-2"
          id="description"
          name="description"
          defaultValue={recipe.description}
          required
        />
        <AddIngredientsList initialIngredients={recipe.recipeIngredients} />
        <label className="font-semibold" htmlFor="instruction">
          Instructions
        </label>
        <textarea
          className="border bg-white p-2"
          id="instructions"
          name="instructions"
          defaultValue={recipe.instructions}
          required
        />
        <label className="font-semibold" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="border bg-white p-2"
          type="text"
          id="cookTime"
          name="cookTime"
          defaultValue={recipe.cookTime}
          required
        />
        <label className="font-semibold" htmlFor="prepTime">
          Prep Time
        </label>
        <input
          className="border bg-white p-2"
          type="text"
          id="prepTime"
          name="prepTime"
          defaultValue={recipe.prepTime}
          required
        />
        <label className="font-semibold" htmlFor="cuisine">
          Cuisine
        </label>
        <input
          className="border bg-white p-2"
          type="text"
          id="cuisine"
          name="cuisine"
          defaultValue={recipe.cuisine}
          required
        />
        <label className="font-semibold" htmlFor="course">
          Course
        </label>
        <input
          className="border bg-white p-2"
          type="text"
          id="course"
          name="course"
          defaultValue={recipe.course}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Save
        </button>
      </div>
    </Form>
  );
}
