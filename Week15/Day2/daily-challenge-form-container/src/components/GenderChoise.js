const GenderChoise = (props) => {
  return (
    <>
      <div>
        <input
          onChange={props.handleChange}
          type="radio"
          name="gender"
          value="Male"
        />
        <p>Male</p>
        <input
          onChange={props.handleChange}
          type="radio"
          name="gender"
          value="Female"
        />{" "}
        <p>Female</p>
        <input
          onChange={props.handleChange}
          type="radio"
          name="gender"
          value="Other"
        />
        <p>Other</p>
      </div>
    </>
  );
};
export default GenderChoise;
