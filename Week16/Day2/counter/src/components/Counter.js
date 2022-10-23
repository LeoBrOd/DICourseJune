import { connect } from "react-redux";
import {
  add,
  minus,
  PLUS,
  MINUS,
} from "../actions";
const Counter = (props) => {
  return (
    <div>
      {/* <button onClick={props.handleMinus}>
        {" "}
        -{" "}
      </button> */}
      <button
        onClick={() =>
          props.dispatch({ type: MINUS })
        }
      >
        {" "}
        -{" "}
      </button>
      {props.c}
      {/* <button onClick={props.handleIncrement}>
        {" "}
        +{" "}
      </button> */}
      <button
        onClick={() =>
          props.dispatch({ type: PLUS })
        }
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    c: state.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleIncrement: () => dispatch(add()),
//     handleMinus: () => dispatch(minus()),
//   };
// };

export default connect(
  mapStateToProps
  //   mapDispatchToProps
)(Counter);
