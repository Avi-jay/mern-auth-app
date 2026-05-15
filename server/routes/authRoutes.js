import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login" , loginUser)

//test
router.get("/test", (req,res)=>{
    res.send("Auth Route working");
})

router.get("/profile", protect, (req,res)=>{
    res.json(req.user);
});

export default router;