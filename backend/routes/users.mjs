import express from "express";
import { addUser, logUsers} from "../controllers/user.mjs";

export const userRoutes = express.Router()

router.post("/login", logUsers)

router.post("/", addUser)

export default userRoutes