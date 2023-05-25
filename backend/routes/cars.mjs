import express from "express";
import { getCar, addCar, updateCar, deleteCar } from "../controllers/car.mjs";

export const carRouter = express.Router();

// Traz do banco de dados um dado
router.get("/", getCar)
router.post("/", addCar)
router.put("/:idcarros", updateCar)
router.delete("/:idcarros", deleteCar)

export default carRouter;