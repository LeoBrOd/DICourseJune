import React from "react";
import actions from "../actions/transactionActions";
import { connect } from "react-redux";
class TransactionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      accountNumber: "",
      FSC: "",
      name: "",
      amount: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          name="accountNumber"
          placeholder="Account Number"
          onChange={this.handleInputChange}
          value={this.state.accountNumber}
        />
        <input
          type="number"
          name="FSC"
          placeholder="FSC"
          onChange={this.handleInputChange}
          value={this.state.FSC}
        />
        <input
          type="text"
          name="name"
          placeholder="A/C Holder Name"
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={this.handleInputChange}
          value={this.state.amount}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: state.currentIndex,
  };
};

const mapDispatchToTprops = (dispatch) => {
  return {
    insertElement: actions.insertElement,
    deleteElement: actions.deleteElement,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToTprops
)(TransactionForm);
