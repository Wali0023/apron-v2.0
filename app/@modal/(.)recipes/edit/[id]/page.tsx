import { API_URL } from "@/lib/config";
import type { Recipe } from "@/app/types";
import RecipeEditForm from "@/app/components/EditForm";
import { Modal } from "@/app/components/Modal";

export default async function EditModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe: Recipe = await fetch(`${API_URL}/recipes/${id}`).then((res) =>
    res.json(),
  );

  return (
    <Modal>
      <h2 className="p-4 text-xl font-bold">Edit Recipe</h2>
      <RecipeEditForm recipe={recipe} />
    </Modal>
  );
}
