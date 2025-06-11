import { Router } from "express";
import usersControllers from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.get("/", usersControllers.getAll);
userRouter.get("/:id", usersControllers.getOne);
userRouter.post("/", usersControllers.create);

export default userRouter;
