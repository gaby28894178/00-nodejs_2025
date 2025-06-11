// src/app.js
import express from 'express'
const app = express()

app.use(express.json())

// tus rutas:
import routerManager from './routes/index.js'
app.use('/api/v1/users', routerManager)

export default app
