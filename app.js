import express from "express";
import cors from 'cors';
import authRoutes from "./src/routes/auth.route.js";

const app = express()
app.use(cors(
   { origin: process.env.ORIGIN}
))
app.use(express.json())

app.use("/api/v1/auth", authRoutes);


export {app}
