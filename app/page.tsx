import AddRecipeButton from "./components/AddRecipeButton";
import RecipeCard from "./components/RecipeCard";
import type { Recipe, RecipesResponse } from "./types";

export default async function Home() {
  const API_URL = "http://localhost:4000";
  const defaultLimit = 20;

  const { recipes, total, page, pages, limit }: RecipesResponse = await fetch(
    `${API_URL}/recipes/?_limit=${defaultLimit}&_sort=id&_order=asce`,
  ).then((res) => res.json());

  console.log("hello");

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {recipes.map((recipe: Recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
      <div className="mb-8 flex items-center justify-center">
        <AddRecipeButton />
      </div>
    </div>
  );
}
