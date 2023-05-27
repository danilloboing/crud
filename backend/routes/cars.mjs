import express from "express";
import { getCar, addCar, updateCar, deleteCar } from "../controllers/car.mjs";

export const router = express.Router();

router.get("/", getCar)
router.post("/", addCar)
router.put("/:idcarros", updateCar)
router.delete("/:idcarros", deleteCar)

export default router;