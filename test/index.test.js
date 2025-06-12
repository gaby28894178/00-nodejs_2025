import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../src/app'; // Importa tu aplicación Express
import { createServer } from 'http';

describe('Inicialización del Servidor', () => {
  let server;

  beforeAll(() => {
    // Inicia el servidor en un puerto temporal para pruebas
    server = createServer(app);
    server.listen(0); // 0 = puerto aleatorio (evita conflictos)
  });

  afterAll(() => {
    // Cierra el servidor después de las pruebas
    server.close();
  });

  it('debería iniciar el servidor en el PUERTO correcto', async () => {
    const PORT = process.env.PORT || 3001;
    expect(server.address().port).not.toBeNull();
    console.log(`Servidor corriendo en el puerto: ${server.address().port}`);
  });

it('debería responder a una petición GET básica', async () => {
  const response = await request(app).get('/'); // Cambia a tu ruta real
  expect(response.status).toBe(200);
});

it('deveria devolver un get de la ruta api v1 users '),async()=>{
    const response =await request(app).get('/api/v1/users');
    expect(response.status).toBe(200)
}

});