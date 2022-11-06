const initState = {
  txt: "bla bla bla",
};

export const reducer = (
  state = initState,
  action = {}
) => {
  switch (action.type) {
    case "CHANGE_TXT":
      return { ...state, txt: action.payload };
    default:
      return { ...state };
  }
};
