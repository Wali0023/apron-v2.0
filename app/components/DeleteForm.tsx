import Form from "next/form";
import { deleteRecipe } from "../recipes/create/action";
import { SquarePen, Trash2 } from "lucide-react";

export function DeleteForm({ id }: { id: string }) {
  return (
    <Form action={deleteRecipe}>
      <input hidden readOnly name="id" value={id} />
      <button type="submit" className="cursor-pointer">
        <Trash2 className="w-4 h-4 text-red-600" />
      </button>
    </Form>
  );
}
