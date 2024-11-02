import express from "express";
import router from "./api.js";
const app=express();


app.use("/api", router);


app.listen(5050,()=>{
    console.log("Server Run Success")
});