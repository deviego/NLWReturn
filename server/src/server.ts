// imports
import express from "express";
import { routes } from "./routs";

let app = express();
app.use(express.json());



// Rotas
app.use(routes)

app.listen(3000, () => console.log("server is running"));

// SQlite
//prisma