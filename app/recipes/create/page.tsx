import Form from "next/form";
import { addRecipe } from "./action";
import AddIngredientsList from "@/app/components/AddIngredientsList";

export default async function CreatePage() {
  return (
    <main className="container mx-auto">
      <h1>Create new recipe</h1>
      <Form action={addRecipe} classID="grid gap-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">
          <label className="font-semibold" htmlFor="title">
            Title
          </label>
          <input
            className="border bg-white p-2"
            type="text"
            id="title"
            name="title"
            required
          />
          <label className="font-semibold" htmlFor="description">
            Description
          </label>
          <textarea
            className="border bg-white p-2"
            id="description"
            name="description"
            required
          />
          <AddIngredientsList />
          <label className="font-semibold" htmlFor="instruction">
            Instructions
          </label>
          <textarea
            className="border bg-white p-2"
            id="instructions"
            name="instructions"
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
            required
          />
          <button type="submit">Save</button>
        </div>
      </Form>
    </main>
  );
}
