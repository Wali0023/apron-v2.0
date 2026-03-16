"use client";

import { useEffect, useRef, useState } from "react";
import { Recipe } from "../types";
import RecipeCard from "./RecipeCard";
import RecipeModal from "./RecipeModal";

export default function RecipeCardGrid({ Recipes }: { Recipes: Recipe[] }) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedRecipe) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [selectedRecipe]);
  return (
    <div className="">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {Recipes.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}
