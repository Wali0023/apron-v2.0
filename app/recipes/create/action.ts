"use server";

import { API_URL } from "@/lib/config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addRecipe(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const instructions = formData.get("instructions") as string;
  const cookTime = formData.get("cookTime") as string;
  const prepTime = formData.get("prepTime") as string;
  const cuisine = formData.get("cuisine") as string;
  const course = formData.get("course") as string;

  const titles = formData.getAll("ingredientTitle") as string[];
  const amounts = formData.getAll("ingredientAmount") as string[];
  const units = formData.getAll("ingredientUnit") as string[];

  const recipeIngredients = titles.map((ingredientTitle, index) => ({
    id: index + 1,
    title: ingredientTitle,
    amount: parseFloat(amounts[index]) || 0,
    unit: units[index],
  }));

  const newRecipe = {
    title,
    description,
    instructions,
    cookTime,
    prepTime,
    cuisine,
    course,
    recipeIngredients,
  };
  const res = await fetch(`${API_URL}/recipes/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRecipe),
  });
  const data = await res.json();
  revalidatePath("/");
  redirect("/");
}
