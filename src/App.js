import "./App.css";
import LeftPanel from "./components/left-panel/left-panel";
import RightDashboard from "./components/right-dashboard/right-dashboard";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <RightDashboard />
    </div>
  );
}

export default App;
