import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./components/Partials/AllRoutes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
