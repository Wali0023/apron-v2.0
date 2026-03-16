"use client";

import { useState } from "react";

interface IngredientRow {
  uuid: string;
  id?: number;
  title: string;
  amount: number | string;
  unit: string;
}

export default function AddIngredientsList({
  initialIngredients = [],
}: {
  initialIngredients?: any[];
}) {
  const [rows, setRows] = useState<IngredientRow[]>(() => {
    if (initialIngredients.length > 0) {
      return initialIngredients.map((ing) => ({
        uuid: crypto.randomUUID(),
        id: ing.id,
        title: ing.title || "",
        amount: ing.amount,
        unit: ing.unit,
      }));
    }
    // Default empty row
    return [{ uuid: crypto.randomUUID(), title: "", amount: "", unit: "" }];
  });

  const addRow = () => {
    const newRow: IngredientRow = {
      uuid: crypto.randomUUID(),
      title: "",
      amount: "",
      unit: "",
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (uuid: string) => {
    setRows(rows.filter((row) => row.uuid !== uuid));
  };

  return (
    <div className="col-span-2 grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-4">
      <label className="pt-2 font-semibold">Ingredients</label>

      <div className="flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.uuid} className="flex items-center gap-2">
            {row.id && (
              <input type="hidden" name="ingredientId" value={row.id} />
            )}

            <input
              name="ingredientTitle"
              defaultValue={row.title}
              placeholder="Name"
              className="flex-1 border bg-white p-2"
              required
            />
            <input
              name="ingredientAmount"
              type="number"
              step="any"
              defaultValue={row.amount}
              placeholder="Qty"
              className="w-20 border bg-white p-2"
              required
            />
            <input
              name="ingredientUnit"
              defaultValue={row.unit}
              placeholder="Unit"
              className="w-20 border bg-white p-2"
              required
            />
            <button
              type="button"
              onClick={() => removeRow(row.uuid)}
              className="rounded px-2 font-bold text-red-500 hover:bg-red-50"
              title="Remove ingredient"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addRow}
          className="w-max rounded border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-black transition-colors hover:bg-gray-200"
        >
          + Add Ingredient
        </button>
      </div>
    </div>
  );
}
