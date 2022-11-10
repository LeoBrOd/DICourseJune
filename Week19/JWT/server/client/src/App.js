import {
  UseState,
  createContext,
  useState,
} from "react";
import LoginRegisterForm from "./componets/LoginRegisterForm";
import Nav from "./componets/Nav";
import Home from "./componets/Home";
import Users from "./componets/Users";
import { Auth } from "./auth/Auth";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";

export const AppContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] =
    useState("");
  return (
    <AppContext.Provider
      value={{ accessToken, setAccessToken }}
    >
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <LoginRegisterForm title="Login" />
            }
          />
          <Route
            path="/register"
            element={
              <LoginRegisterForm title="Register" />
            }
          />
          <Route
            path="/users"
            element={
              <Auth>
                <Users />
              </Auth>
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
