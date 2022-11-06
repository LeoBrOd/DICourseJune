const SecondName = (props) => {
  return (
    <>
      <input type='text' placeholder='Second Name' name='sname' onChange={props.handleChange}/>
    </>
  )
}
export default SecondName
