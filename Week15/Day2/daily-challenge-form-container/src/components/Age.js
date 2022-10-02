const Age = (props) => {
  return (
    <>
      <input
        type="number"
        placeholder="Age"
        name="age"
        onChange={props.handleChange}
      />
    </>
  );
};
export default Age;
