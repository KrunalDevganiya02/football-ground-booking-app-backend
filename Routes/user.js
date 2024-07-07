import Router from "express";
const router = Router();
import { fetchAllGround } from "../Controllers/fetchAllGround.js";

router.get("/fetchAllGround", fetchAllGround);

export default router;
