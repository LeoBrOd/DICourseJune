const Store = (props) => {
  const {store} = props;
  const {name,address,city,language:{description}} = store;
  // language":{"description"
  return(
    <div className="tc grow bg-light-pink br3 pa3 ma2 dib shadow-5 w5">
      <h4>{name}</h4>
      <div>{address}</div>
      <div>{city}</div>
      <div>{description}</div>
    </div>
  )
}
export default Store
