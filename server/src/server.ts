// imports
import express from "express";
import { routes } from "./routes";
import cors from 'cors'

let app = express();

app.use(express.json());

app.use(cors())

// Rotas
app.use(routes)

app.listen(3000, () => console.log("server is running"));

// SQlite
//prisma