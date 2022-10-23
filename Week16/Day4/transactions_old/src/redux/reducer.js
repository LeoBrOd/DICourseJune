import { INSERT } from "../actions/transactionActions";
const initialState = {
  currentIndex: -1,
  // list: JSON.parse(localStorage.getItem('transactions'))
  list: [],
};

export const reducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case INSERT:
      state.list.push(action.payload);
      return { ...state, list: [...state.list] };
    // case "UPDATE":
    // case "UPDATE_INDEX":
    // case "DELETE":
    default:
      return state;
  }
};
