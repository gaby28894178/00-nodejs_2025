// test/users.routes.test.js
import { describe, it, expect } from "vitest"
import request from "supertest"
import app from "../src/app.js" // tu app real de Express

const BASE_URL = "/api/v1/users"

let createdUserId = null

const newUser = {
  name: "Gabriel",
  email: "gabriel@mail.com",
  password: "clave1234"
}

describe("Test de rutas disponibles: GET y POST", () => {
  
  // 1️⃣ GET /users
  it("1️⃣ GET /users → debería retornar 200 y un array", async () => {
    const res = await request(app).get(BASE_URL)
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  // 2️⃣ POST /users
  it("2️⃣ POST /users → debería crear un usuario", async () => {
    const res = await request(app).post(BASE_URL).send(newUser)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty("name", newUser.name)
    createdUserId = res.body.id // para pruebas futuras
  })

  // 3️⃣ GET /users/:id
  it("3️⃣ GET /users/:id → debería retornar el usuario creado", async () => {
    const res = await request(app).get(`${BASE_URL}/${createdUserId}`)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty("id", createdUserId)
    expect(res.body).toHaveProperty("name", newUser.name)
  })
})
