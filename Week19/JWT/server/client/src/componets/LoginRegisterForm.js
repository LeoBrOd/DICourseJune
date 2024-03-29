import {
  UseState,
  useEffect,
  useContext,
  useState,
  createContext,
} from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { AppContext } from "../App";

const LoginRegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const { setAccessToken } =
    useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = async () => {
    if (props.title == "Register") {
      try {
        const response = await axios.post(
          "/register",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response=>", response);
        setMsg("");
        navigate("/login");
      } catch (e) {
        setMsg(e.response.data.msg);
      }
    } else {
      try {
        const response = await axios.post(
          "/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(
          "response=>",
          response.data.token
        );
        // if (response.status == 200) {
        setAccessToken(response.data.token);
        navigate("/");
        // }
      } catch (e) {
        setMsg(e.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div>
        <h3>{props.title}</h3>
      </div>
      <Box
        component={"form"}
        sx={{ m: 1 }}
        noValidate
        autoComplete={"Off"}
      >
        <TextField
          sx={{ m: 1 }}
          id="email"
          label="Enter Email"
          variant="outlined"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <TextField
          sx={{ m: 1 }}
          id="password"
          label="Enter Password"
          variant="outlined"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <div>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
