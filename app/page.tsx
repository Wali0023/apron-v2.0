import type { Recipe, RecipesResponse } from "./types";
import Link from "next/link";

export default async function Home() {
  const API_URL = "http://localhost:4000";
  const defaultLimit = 20;

  const { recipes, total, page, pages, limit }: RecipesResponse = await fetch(
    `${API_URL}/recipes/?_limit=${defaultLimit}&_sort=id&_order=asce`,
  ).then((res) => res.json());

  console.log("hello");

  return (
    <div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {recipes.map((recipe: Recipe) => (
          <div key={recipe.id}>
            <div className="h-64 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
