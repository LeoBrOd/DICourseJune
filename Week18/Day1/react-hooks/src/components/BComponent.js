import { useContext } from "react";
import { APPContext } from "../App";

const BComponent = (props) => {
  const { text } = useContext(APPContext);
  return (
    <>
      <h3>BComponent</h3>
      {text}
    </>
  );
};
export default BComponent;
