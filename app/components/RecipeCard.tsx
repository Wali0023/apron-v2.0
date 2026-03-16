import Link from "next/link";
import { Recipe } from "../types";
import { DeleteForm } from "./DeleteForm";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="h-64 w-64 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="h-32">
        <img
          className="h-full w-full rounded-xl object-cover"
          src={recipe.imageUrl}
        />
      </div>
      <div className="h-32">
        <span className="mt-1 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
          {recipe.cuisine}
        </span>
        <h2 className="mb-2 text-xl font-bold text-slate-800">
          {recipe.title}
        </h2>
        <Link href={`/recipes/edit/${recipe.id}`}>Edit</Link>
        <DeleteForm id={recipe.id.toString()} />
      </div>
    </div>
  );
}
