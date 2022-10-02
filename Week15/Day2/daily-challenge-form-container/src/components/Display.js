const Display = (props) => {
  if (props) {
    return (
      <>
        Entered information:
        <p>
          Your name: {props.result.fname}{" "}
          {props.result.lname}
        </p>
        <p>Your age: {props.result.age}</p>
        <p>Your gender: {props.result.gender}</p>
        <p>
          Your destination:{" "}
          {props.result.selectedcountry}
        </p>
        <p>
          **Nuts free:{" "}
          {props.result.nutsFree ? "Yes" : "No"}{" "}
        </p>
        <p>
          **Lactose free:{" "}
          {props.result.lactoseFree
            ? "Yes"
            : "No"}{" "}
        </p>
        <p>
          **Vegan meal:{" "}
          {props.result.vegan ? "Yes" : "No"}{" "}
        </p>
      </>
    );
  }
  <h1>You didn't fill info...</h1>;
};
export default Display;
