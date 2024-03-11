import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "../server/routes/authRoute.js";
import messageRoutes from "../server/routes/messageRoute.js";
import userRoutes from "../server/routes/userRoute.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT | 5000;


dotenv.config();

const __dirname = path.resolve();
console.log("dir name" , __dirname)
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Adjust the static file serving path for the frontend
app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  // Adjust the path for serving the index.html file
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
