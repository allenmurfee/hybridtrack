import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import Header from "./components/Header";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <main className="p-4 flex items-center justify-center w-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
