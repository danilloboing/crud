import express from "express"
import cors from "cors"
import { userRoutes } from "./routes/users.mjs";
import { carRouter } from "./routes/cars.mjs";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/login", userRoutes)

app.use("/", carRouter)

app.listen(8000);