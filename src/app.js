// src/app.js
// tus rutas:
import routerManager from './routes/index.js'
import express from 'express'
const app = express()

app.use(express.json())


// Agrega esto antes de tus otras rutas
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API en funcionamiento' });
});

app.use('/api/v1/', routerManager)

export default app
