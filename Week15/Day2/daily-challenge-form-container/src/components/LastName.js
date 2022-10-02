const LastName = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Last Name"
        name="lname"
        onChange={props.handleChange}
      />
    </>
  );
};
export default LastName;
