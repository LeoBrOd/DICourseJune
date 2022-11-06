import Users from "../model/UsersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const passwordToString = password.toString();
  const hashPassword = await bcrypt.hash(
    passwordToString,
    salt
  );
  try {
    await Users.create({
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "REgister Succesfull" });
  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({ msg: "Email already exist" });
  }
};
