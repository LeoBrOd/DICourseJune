import {
  ADD_REMINDER,
  DELETE_REMINDER,
  CLEAR_REMINDERS,
} from "../constants";

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    // payload: text,
    text,
    dueDate,
  };
  console.log(action);
  return action;
};

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  console.log(action);
  return action;
};

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDERS,
  };
  return action;
};
