import BharatClock from "./components/BharatClock";
import SloganLine from "./components/slogan";
import TimeShow from "./components/TimeShow";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <BharatClock></BharatClock>
      <SloganLine></SloganLine>
      <TimeShow></TimeShow>
    </div>
  );
}

export default App;
