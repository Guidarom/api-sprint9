
// normalmente no te dejará importar json lo solucionas con una configuracion de resolvejasonmodule:true
import recipeData from './recipes.json'
import { newRecipeEntry, RecipeEntry } from '../types'
// Aquí le ordenas que le haga caso a tu config de tipado (Asercion de tipos)
const recipes: RecipeEntry[] = recipeData as RecipeEntry[]
// Aquí tenemos un método que va a devolver todos los entries de recetas
// exportamos los métodos para poder usarlos fuera
export const getEntries = (): RecipeEntry[] => recipes
export const findById = (id: Number): RecipeEntry | undefined => {
  const entry = recipes.find(d => d.id === id)
  return entry
}
export const addRecipe = (newRecipeEntry: newRecipeEntry): RecipeEntry => {
  const newRecipe = {
    id: Math.max(...recipes.map(d => d.id)) + 1,
    ...newRecipeEntry
  }
  recipes.push(newRecipe)
  return newRecipe
}
