import React from "react";
import "./App.css";
import {
  addReminder,
  deleteReminder,
  clearReminders,
} from "../src/actions";
import { connect } from "react-redux";
import moment from "moment";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: "",
  //     dueDate: "",
  //   };
  //   this.addReminder =
  //     this.addReminder.bind(this);
  // }

  addReminder = () => {
    let { text, dueDate } = this.state;
    let { addReminder } = this.props;
    addReminder(text, dueDate);
    // this.setState({
    //   text: "",
    //   dueDate: "",
    // });
    document.getElementById("myform").reset();
  };

  deleteReminder = (id) => {
    this.props.deleteReminder(id);
    // console.log(id);
    // console.log(this.props);
  };

  clearReminders = () => {
    this.props.clearReminders();
  };

  getFromNowDate = (dueDate) => {
    return moment(new Date(dueDate)).fromNow();
  };

  handleTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => {
      return { text };
    });
  };

  handleDateChange = (e) => {
    const dueDate = e.target.value;
    this.setState(() => {
      return { dueDate };
    });
  };

  renderReminders = () => {
    const { reminders } = this.props;
    console.log(reminders);
    return (
      <div className="d-grid gap-2 col-8 mx-auto">
        <ul className="list-group ">
          {reminders.map((reminder) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={reminder.id}
              >
                <div>
                  {reminder.text}
                  <br />
                  <em>
                    {this.getFromNowDate(
                      reminder.dueDate
                    )}
                  </em>
                </div>
                <button
                  type="button"
                  className="btn-outline-dark"
                  onClick={() =>
                    this.deleteReminder(
                      reminder.id
                    )
                  }
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.clearReminders}
        >
          Clear Reminders
        </button>
      </div>
    );
  };

  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Reminder App</h1>
          <form id="myform">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="I have to ..."
                // value={this.state.text}
                value={this.props.text}
                onChange={this.handleTextChange}
              />
              <input
                type="datetime-local"
                className="form-control"
                placeholder="I have to ..."
                // value={this.state.dueDate}
                value={this.props.dueDate}
                onChange={this.handleDateChange}
              />
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
                onClick={this.addReminder}
              >
                Add Reminder
              </button>
            </div>
          </form>

          {this.renderReminders()}
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { reminders: state };
}

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  clearReminders,
})(App);
