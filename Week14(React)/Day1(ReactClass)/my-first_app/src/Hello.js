const Hello = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hello {props.name}</h1>
      <p>{props.text}</p>
      {props.abc}
      <h4>{props.email}</h4>
    </>
  );
};
export default Hello;
