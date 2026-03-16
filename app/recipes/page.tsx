import AddRecipeButton from "../components/AddRecipeButton";
import RecipeCard from "../components/RecipeCard";
import RecipeCardGrid from "../components/RecipeCardGrid";
import { Recipe, RecipesResponse } from "../types";

export default async function Recipes() {
  const API_URL = "http://localhost:4000";
  const defaultLimit = 20;

  const { recipes, total, page, pages, limit }: RecipesResponse = await fetch(
    `${API_URL}/recipes/?_limit=${defaultLimit}&_sort=id&_order=asce`,
  ).then((res) => res.json());

  console.log("hello");
  return (
    <div>
      <RecipeCardGrid Recipes={recipes} />
      <div className="mb-8 flex items-center justify-center">
        <AddRecipeButton />
      </div>
    </div>
  );
}
