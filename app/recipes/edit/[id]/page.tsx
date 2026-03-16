import Form from "next/form";

import { API_URL } from "@/lib/config";
import type { Recipe } from "@/app/types";
import { updateRecipe } from "../../create/action";
import AddIngredientsList from "@/app/components/AddIngredientsList";
import RecipeEditForm from "@/app/components/EditForm";

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
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Recipe</h1>
      <div className="max-w-2xl border rounded-lg p-6 bg-gray-50">
        {/* We pass the fetched data into the shared Form component */}
        <RecipeEditForm recipe={recipe} />
      </div>
    </main>
  );
}
