"use client";

import { useEffect, useRef } from "react";
import { Recipe } from "../types";

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (recipe) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [recipe]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="rounded-xl shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm p-0 max-w-2xl w-[90%] overflow-hidden animate-in zoom-in-95 duration-300 fixed inset-0 m-auto"
    >
      {recipe && (
        <div className="flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-amber-100 bg-amber-50">
            <h2 className="text-2xl font-bold text-amber-900">
              {recipe.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-amber-700 text-3xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div className="p-8 overflow-y-auto bg-white text-gray-800">
            <p className="italic text-gray-600 mb-6 border-l-4 border-amber-200 pl-4">
              {recipe.description}
            </p>

            <div className="flex gap-8 mb-8 text-sm font-medium">
              <div className="bg-amber-50 px-3 py-1 rounded">
                <span className="text-amber-700">Prep:</span> {recipe.prepTime}
              </div>
              <div className="bg-amber-50 px-3 py-1 rounded">
                <span className="text-amber-700">Cook:</span> {recipe.cookTime}
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="font-bold text-lg text-amber-900 mb-3 border-b border-amber-100">
                  Ingredients
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {recipe.recipeIngredients.map((ing) => (
                    <li key={ing.id} className="text-gray-700">
                      <span className="font-semibold">
                        {ing.amount} {ing.unit}
                      </span>{" "}
                      {ing.title}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="font-bold text-lg text-amber-900 mb-3 border-b border-amber-100">
                  Instructions
                </h3>
                <p className="whitespace-pre-line leading-relaxed text-gray-700">
                  {recipe.instructions}
                </p>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
