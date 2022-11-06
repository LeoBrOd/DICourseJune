import AComponent from "./components/AComponent";
import Calculator from "./components/Calculator";
import {
  connect,
  useSelector,
  useDispatch,
} from "react-redux";
import { useState, createContext } from "react";
import "./App.css";

export const APPContext = createContext();

function App() {
  const [text, setText] = useState("");
  const mytxt = useSelector((state) => state.txt);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        {/* <APPContext.Provider
          value={{ text, setText }}
        >
          <AComponent />
        </APPContext.Provider>
        <div></div>
        <Calculator /> */}
        <input
          type="text"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_TXT",
              payload: e.target.value,
            })
          }
        />
        {mytxt}
      </header>
    </div>
  );
}

export default connect()(App);
