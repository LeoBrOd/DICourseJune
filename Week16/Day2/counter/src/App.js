import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import Counter from "./components/Counter";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
