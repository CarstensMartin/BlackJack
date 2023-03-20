import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Index from "./components/game/Index";
import Rules from "./components/rules/Rules";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
