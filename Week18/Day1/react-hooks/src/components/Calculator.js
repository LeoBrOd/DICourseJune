import {
  useReducer,
  useRef,
  useEffect,
} from "react";

const initState = {
  result: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        result: state.result + action.payload,
      };
    case "MINUS":
      return {
        ...state,
        result: state.result - action.payload,
      };
    case "DIVIDE":
      return {
        ...state,
        result: state.result / action.payload,
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * action.payload,
      };
    default:
      return { ...state };
  }
};

const Calculator = (props) => {
  const [state, dispatch] = useReducer(
    reducer,
    initState
  );
  const myInput = useRef();

  const id = useRef(10);

  useEffect(() => {
    console.log(myInput.current.name);
  }, []);

  return (
    <>
      {id.current}
      <input
        type="text"
        name="simple"
        ref={myInput}
      />
      <h2>Simple Calculator</h2>
      Result: {state.result}
      <button
        onClick={() =>
          dispatch({ type: "PLUS", payload: 5 })
        }
      >
        Plus 1
      </button>
      <button
        onClick={() =>
          dispatch({ type: "MINUS", payload: 5 })
        }
      >
        Minus 1
      </button>
      <button
        onClick={() =>
          dispatch({ type: "DIVIDE", payload: 5 })
        }
      >
        Divide by 2
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "MULTIPLY",
            payload: 5,
          })
        }
      >
        Multiply by 2
      </button>
    </>
  );
};

export default Calculator;
