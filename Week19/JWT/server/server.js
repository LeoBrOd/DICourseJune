import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
import db from "./config/database.js/";
import router from "./routes/Users.js";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
  })
);
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `run on ${process.env.PORT || 8080}`
  );
});

// app.get("/sign-jwt", (req, res) => {
//   const token = jwt.sign(
//     {
//       username: "gooduser",
//       email: "gooduser@gmail.com",
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     { expiresIn: "60s" }
//   );
//   console.log(token);
//   res.cookie("token", token, {
//     httpOnly: true,
//     maxAge: 60 * 1000,
//   });
//   res.json({ mytoken: token });
// });

// app.get("/verify-jwt", (req, res) => {
//   const mytoken =
//     req.cookies.token ||
//     req.headers.authorization ||
//     req.headers.mytoken;

//   if (mytoken == null)
//     res.json({ msg: "Unauthorized" });
//   jwt.verify(
//     mytoken,
//     process.env.ACCESS_TOKEN_SECRET,
//     (err, decoded) => {
//       if (err) {
//         console.log(err);
//         res.json({ msg: "Unauthorized Error" });
//       }
//       const email = decoded.email;
//       const user = decoded.username;
//       res.json({ email, user });
//     }
//   );
//   //   console.log("mytoken", mytoken);
//   //   res.json({ msg: "ok", mytoken: mytoken });
// });

try {
  await db.authenticate();
  console.log("Database connected");
} catch (e) {
  console.log(e);
}
