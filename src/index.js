// require('dotenv').config()
import dotenv from "dotenv";


import connectDB from "./db/index.js";

dotenv.config();



connectDB()






/*

an Approach for connectinng mongo

import express from "express";
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Appp is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()


*/