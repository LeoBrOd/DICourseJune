import { useContext } from "react";
import { APPContext } from "../App";
import BComponent from "./BComponent";

const AComponent = (props) => {
  const { text, setText } =
    useContext(APPContext);
  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <div>Text input: {text}</div>
      <BComponent />
    </>
  );
};

export default AComponent;
