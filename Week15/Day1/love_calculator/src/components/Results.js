const Results = (props) => {
  console.log(props);
  if(props.result.result){
    return(
      <>
        Results:
        <p>{props.result.fname} and {props.result.sname}</p>
        <p>{props.result.percentage}</p>
        <p>{props.result.result}</p>
      </>
    )

  }
  return null
}
export default Results
