import Form from "next/form";

import { API_URL } from "@/lib/config";
import type { Recipe } from "@/app/types";
import { updateRecipe } from "../../create/action";
import AddIngredientsList from "@/app/components/AddIngredientsList";

export default async function UpdatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe: Recipe = await fetch(`${API_URL}/recipes/${id}`).then((res) =>
    res.json(),
  );
  return (
    <main className="container mx-auto">
      <h1>Edit recipe</h1>
      <Form action={updateRecipe} classID="grid gap-4">
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
          <button type="submit">Save</button>
        </div>
      </Form>
    </main>
  );
}
