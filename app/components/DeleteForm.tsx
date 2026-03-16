import Form from "next/form";
import { deleteRecipe } from "../recipes/create/action";

export function DeleteForm({ id }: { id: string }) {
  return (
    <Form action={deleteRecipe}>
      <input hidden readOnly name="id" value={id} />
      <button type="submit">Delete</button>
    </Form>
  );
}
