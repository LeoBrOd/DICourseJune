const initState = {
  prop_one: "One From Store",
  prop_two: "Two From Store",
  text: "Bla bla bla",
};

export const reducer_a = (
  state = initState,
  action = {}
) => {
  switch (action.type) {
    case "CHANGE_PROP_ONE":
      return {
        ...state,
        prop_one: action.payload,
      };
    default:
      return { ...state };
  }
};
