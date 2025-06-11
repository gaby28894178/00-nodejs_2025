// src/index.js
import app from './app.js'

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})




// import express from 'express';
// import routerManager from './routes/index.js'; // Tu archivo barril de rutas

// const app = express();

// app.use(express.json());

// app.use('/api/v1', routerManager);

// const PORT =3001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en el puerto ${PORT}`);
// });
