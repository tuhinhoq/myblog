import express from "express";
const router=express.Router();
import * as blog_controller from "./blog_controller.js";
    


router.post("/createBlog", blog_controller.createBlog);
router.get("/readBlog", blog_controller.readBlog);
router.put("/updateBlog", blog_controller.updateBlog);
router.delete("/deleteBlog", blog_controller.deleteBlog);

export default router;