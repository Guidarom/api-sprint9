
import express from 'express' // importamos express (hay casos en los que necesitarás instalar los tipos para typescript)

// importamos ruta

import recipeRouter from './routes/recipes'

const app = express() // creamos aplicación con express

app.use(express.json()) // la app va a usar xpress.json que es un middleware para transformar la req. body a json, evita hacer transformación a mano de lo que envias a los endpoints de la API

const PORT = 3000 // puerto en el que se levantará

//Este codigo de debajo lo puso Guido para poder solucionar el cors o el cruze de puertos
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/ping', (_req, res) => { // creamos endpoint que llamaremos "Ping", tenemos req, res (request y response)
// el guión bajo del _req es porque en el typescript tenemos "notUnusedParameters"
  console.log('Alguien ha pingued aqui el ' + new Date().toLocaleDateString())// para ver que alguien ha hecho "ping"
  res.send('pong')// respuesta de checkeo de la request (req)
})

app.use('/api/recipes', recipeRouter)

app.listen(PORT, () => { // inicializamos el servidor, indicamos que estará escuchando en el puerto 3000
  console.log(`Servidor corriendo en el puerto ${PORT}`) // mensajito para confirmar
})
