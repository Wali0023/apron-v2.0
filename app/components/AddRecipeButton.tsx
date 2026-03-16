import Link from "next/link";

export default function AddRecipeButton() {
  return (
    <Link
      className="rounded-lg bg-orange-500 px-6 py-2 font-bold text-white transition-colors hover:bg-orange-600"
      href="/recipes/create"
    >
      + Add recipe
    </Link>
  );
}
