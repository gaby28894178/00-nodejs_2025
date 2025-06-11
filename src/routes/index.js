import { Router } from "express";
import userRouter from "./users.routes.js";

const routerManager = Router();

routerManager.use('/users', userRouter);

export default routerManager;
