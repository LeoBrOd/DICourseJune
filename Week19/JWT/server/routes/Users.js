import express from "express";
import {
  register,
  login,
  getUsers,
  logout,
} from "../controlers/User.js";
import { VerifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", VerifyToken, getUsers);
router.delete("/logout", logout);
router.get("/token", VerifyToken, (req, res) => {
  res.status(200).json({ msg: "OK" });
});

export default router;
