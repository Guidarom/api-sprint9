import { newRecipeEntry } from './types'
const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('falta el campo nombre o su formato es incorrecto')
  }
  return nameFromRequest
}
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const toNewRecipeEntry = (object: any): newRecipeEntry => {
  const newEntry: newRecipeEntry = {
    nombre: parseName(object.nombre),
    imagen: '',
    descripcion: '',
    tiempoPreparacion: 0,
    ingredientes: [],
    pasos: [],
    porciones: 0,
    tipoComida: 'comida'
  }
  return newEntry
}
export default toNewRecipeEntry
