import "./App.css";
import List from "./components/List/Index";
import Homepage from "./layout/Homepage/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="create" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
