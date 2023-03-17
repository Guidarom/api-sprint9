import express from 'express' // importamos express

import * as recipeServices from '../services/recipeServices'

import toNewRecipeEntry from '../utils'

const router = express.Router()// creamos un router

// crearemos dos endpoints

router.get('/', (_req, res) => {
  res.send(recipeServices.getEntries())
})

// find puede devolver undefined, es necesario cubrir ese caso
router.get('/:id', (req, res) => {
  const recipe = recipeServices.findById(Number(req.params.id))

  return (recipe != null)
    ? res.send(recipe)
    : res.sendStatus(404)
})

// este nos permite añadir entradas
router.post('/', (req, res) => {
  try {
    const newRecipeEntry = toNewRecipeEntry(req.body)

    const addedRecipeEntry = recipeServices.addRecipe(newRecipeEntry)

    res.json(addedRecipeEntry)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router

// Aqui estamos usando ESmodules pero se compilan como commonjs
