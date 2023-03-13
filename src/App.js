import "./Styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TOGGLER SWITCH</h1>
      </header>
      <div className="toggleBtn">
        <label className="toggle">
          <input type="checkbox" />
          <span className="slider"></span>
          <span
            className="labels"
            data-on="ABSOLUTE"
            data-off="ABSOLUTE"
          ></span>
        </label>
      </div>
    </div>
  );
}

export default App;
