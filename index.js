import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./db/connect.js";


dotenv.config();

connect();

const app = express();
const PORT = process.env.PORT || 4080;

app.use ()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {            
    res.send("Welcome to my API");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})