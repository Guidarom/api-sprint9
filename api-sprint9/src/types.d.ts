// configuramos el tipado de los datos

export type TipoComida = 'desayuno' | 'comida' | 'cena'
export interface RecipeEntry {
  id: number
  nombre: string
  imagen: string
  descripcion: string
  tiempoPreparacion: number
  ingredientes: string[]
  pasos: string[]
  porciones: number
  tipoComida: TipoComida
}
export type newRecipeEntry = Omit<RecipeEntry, 'id'>
