export interface RecipeIngredient {
  id: number;
  title: string;
  amount: number;
  unit: string;
  inPantry?: boolean;
}
export interface Recipe {
  id: number;
  title: string;
  recipeIngredients: RecipeIngredient[];
  description: string;
  course: "Dessert" | "Lunch" | "Dinner" | "Breakfast";
  instructions: string;
  cookTime: string;
  prepTime: string;
  cuisine: string;
  imageUrl: string;
}
export interface RecipesResponse {
  recipes: Recipe[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
export interface ScheduledRecipe {
  recipeId: number;
  date: string;
  title: string;
}
