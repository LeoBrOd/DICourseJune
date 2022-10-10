import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          'Click on the numbers to increase the
          counters. The counter is programmed to
          throw error when it reaches 5. This
          simulates a JavaScript error in a
          component.'
        </div>
        <div>
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <div>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <div>
          <BuggyCounter />
        </div>
      </header>
    </div>
  );
}

export default App;
