import "./App.css";
// import { Form } from "./components/form";
import { Inventory } from "./components/Inventory";

function App() {
  const start = 10;
  const end = 15
  return (
    <div className="App">
      Start time : {start}<br></br>
      End time : {end}
      <Inventory numb={start} end={end}/>
    </div>
  );
}

export default App;
