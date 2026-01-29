import express from "express";
import { UserUpdate, UserChangePhoto } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const Uploads = multer();// multer can read diffrent types of files.

router.put("/update", Protect, UserUpdate);
router.patch("/changePhoto", Protect, Uploads.single("image"), UserChangePhoto);

export default router;