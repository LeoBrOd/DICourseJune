import React from "react";
import TransactionForm from "./TransactionForm";
import actions from "../actions/transactionActions";
import { connect } from "react-redux";

class TransactionList extends React.Component {
  handleEdit = () => {};

  HandleDelete = () => {};

  render() {
    return (
      <>
        <TransactionForm />
        <table>
          {this.props.list.map((item, index) => {
            return (
              <tr>
                <td>{item.accountNumber}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <button>Edit</button>
                <button>Delete</button>
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToTprops = (dispatch) => {
  return {
    updateIndex: actions.updateIndex,
    deleteElement: actions.deleteElement,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToTprops
)(TransactionList);
