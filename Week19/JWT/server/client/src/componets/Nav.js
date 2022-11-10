import {
  useNavigate,
  Link,
} from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../App";
import { Auth } from "../auth/Auth";

const Nav = (props) => {
  const { setAccessToken } =
    useContext(AppContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.delete(
        "/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("logout=>", response);
      if (
        response.status == 204 ||
        response.status == 200
      ) {
        setAccessToken(null);
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button component={Link} to="/">
          Home
        </Button>
        <Auth>
          <Button component={Link} to="/users">
            Users
          </Button>
        </Auth>
        <Button component={Link} to="/login">
          Login
        </Button>
        <Button component={Link} to="/register">
          Register
        </Button>
        <Button onClick={logout}>Logout</Button>
      </Stack>
    </div>
  );
};

export default Nav;
