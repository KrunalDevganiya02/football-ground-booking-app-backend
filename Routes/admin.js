import Router from "express";
import { addNewGround } from "../Controllers/addNewGround.js";
import { addNewCollege } from "../Controllers/addNewCollege.js";
import upload from "../Middleware/multer.js";
const router = Router();

router.post("/addNewGround", upload.array("img", 1), addNewGround);
router.post("/addNewCollege", addNewCollege);

export default router;
