const Parent = (props) => {
  console.log(props.children);
  //   return <h1>Parent</h1>;
  if (props.value === "Yes") return <h1>Yes</h1>;
  return props.children;
};

export default Parent;
