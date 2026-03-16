import Link from "next/link";
import { Recipe } from "../types";
import { DeleteForm } from "./DeleteForm";
import { SquarePen, Trash2 } from "lucide-react";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="group relative h-64 w-64 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white  shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="h-32">
        <img
          className="h-full w-full rounded-xl object-cover"
          src={recipe.imageUrl}
        />
      </div>
      <div className="h-32 p-4">
        <span className="mt-1 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
          {recipe.cuisine}
        </span>
        <h2 className="mb-2 text-xl font-bold text-slate-800">
          {recipe.title}
        </h2>
        <div
          className="flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-2 right-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href={`/recipes/edit/${recipe.id}`}
            className="p-1 hover:bg-blue-50 rounded-full transition-colors"
          >
            <SquarePen className="w-5 h-5 text-blue-600" />
          </Link>

          <div className="p-1 hover:bg-red-50 rounded-full transition-colors">
            <DeleteForm id={recipe.id.toString()} />
          </div>
        </div>
      </div>
    </div>
  );
}
