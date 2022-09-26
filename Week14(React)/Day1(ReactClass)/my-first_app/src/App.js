import logo from "./logo.svg";
// import Hello from "./Hello";
// import HelloClass from "./HelloClass";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Mary", email: "m@gmail.com" },
    {
      id: 2,
      name: "Blisker",
      email: "b@gmail.com",
    },
    {
      id: 3,
      name: "Takumi",
      email: "t@gmail.com",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {
          users.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <h4>{item.email}</h4>
              </div>
            );
          })
          /* <HelloClass
          name="John"
          text="Welcome Johny"
          email="j@gmail.com"
          abc="abcdefg"
        />
        <HelloClass
          name="Dany"
          text="Welcome DanDan"
          email="d@gmail.com"
          abc="jklmnop"
        /> */
        }
      </header>
    </div>
  );
}

export default App;
