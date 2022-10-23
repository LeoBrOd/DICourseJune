import { connect } from "react-redux";

const Child = (props) => {
  return (
    <div>
      <h1>Child Redux Store Example</h1>
      <div>Property One: {props.childOne}</div>
      <div>Property Two: {props.childTwo}</div>
      <div>Property Three: {props.childTxt}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    childOne: state.prop_one,
    childTwo: state.prop_two,
    childTxt: state.text,
  };
};

export default connect(mapStateToProps)(Child);
