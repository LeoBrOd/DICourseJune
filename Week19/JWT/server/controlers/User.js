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
    res.json({ msg: "Register Succesfull" });
  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({ msg: "Email already exist" });
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(
      req.body.password.toString(),
      user[0].password.toString()
    );
    if (!match)
      return res
        .status(400)
        .json({ msg: "Wrong password" });

    const userId = user[0].id;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userId, email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });

    res.json({ token: accessToken });
  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({ msg: "Email not found" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Not found" });
  }
};

export const logout = (req, res) => {
  const accessToken = req.cookies.accessToken;
  console.log("accessToken", accessToken);
  // if (!accessToken) return res.sendStatus(204);
  if (!accessToken)
    return res
      .status(204)
      .json({ msg: "cleared" });
  res.clearCookie("accessToken");
  console.log(
    "accessToken 2=>",
    req.cookies.accessToken
  );
  return res.sendStatus(200);
};
