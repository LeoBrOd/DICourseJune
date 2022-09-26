import React from "react";
import "./HelloClass.css";
import Card from "react-bootstrap/Card";

class HelloClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      //   <div
      //     style={{
      //       color: "red",
      //       backgroundColor: "#ccc",
      //     }}
      //   >
      //     <h2>{this.props.name}</h2>
      //     {this.props.email}
      //   </div>
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {this.props.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default HelloClass;
