const Diet = (props) => {
  return (
    <>
      <p>Dietary restrictions:</p>
      <input
        type="checkbox"
        name="nutsFree"
        onChange={props.handleChange}
      />
      <p>Nuts free</p>

      <input
        type="checkbox"
        name="lactoseFree"
        onChange={props.handleChange}
      />
      <p>Lactose free</p>

      <input
        type="checkbox"
        name="vegan"
        onChange={props.handleChange}
      />
      <p>Vegan</p>
    </>
  );
};
export default Diet;
