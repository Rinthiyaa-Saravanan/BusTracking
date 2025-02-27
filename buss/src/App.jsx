import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Bus from "./bus";
import Remainder from "./remainder";
import Login from "./login";
import SignUp from "./signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/remainder" element={<Remainder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
