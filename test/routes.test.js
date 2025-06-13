import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../src/app'; 
import  rutasall from '../src/routes/index'
import { createServer } from 'http';

describe('Inicialización del Servidor y con trol de rutas', () => {
  let server;

  beforeAll(() => {
    server = createServer(app);
    server.listen(0);
  });

  afterAll(() => {
    server.close();
  });

  it('debería iniciar el servidor en el PUERTO correcto', async () => {
    expect(server.address().port).not.toBeNull();
    console.log(`Servidor corriendo en el puerto: ${server.address().port}`);
  });

  it('debería responder a una petición GET básica', async () => {
    const response = await request(app).get('/'); // Cambia a tu ruta real
    expect(response.status).toBe(200);
  });

  it('deberia devolver un get de la ruta api v1 users', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.status).toBe(404);
  });

  

});

