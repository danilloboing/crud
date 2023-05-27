import express from "express"
import cors from "cors"
/* import { userRouter } from "./routes/users.mjs"; */
import carRoutes from "./routes/cars.mjs";

const app = express();

app.use(express.json());
app.use(cors());

/* app.post("/", userRouter) */

app.use("/", carRoutes)

app.listen(3001, () => {
  console.log("Servidor rodando")
});