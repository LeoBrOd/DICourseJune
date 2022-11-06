const FirstName = (props) => {
  return (
    <>
      <input type='text' placeholder='First Name' name='fname' onChange={props.handleChange}/>
    </>
  )
}
export default FirstName
