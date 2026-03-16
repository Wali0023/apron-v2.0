"use server";

import { API_URL } from "@/app/lib/config";
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

  const newRecipe = {
    title,
    description,
    instructions,
    cookTime,
    prepTime,
    cuisine,
    course,
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
