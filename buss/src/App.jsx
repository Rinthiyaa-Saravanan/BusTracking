import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Bus from "./bus";
import Remainder from "./remainder";
import Login from "./login";
import SignUp from "./signUp";
import Profile from "./Profile";
import Tourism from "./Tourism"; 
import Nearby from "./nearby";
import Shopping from "./shopping";
import Entertainment from "./entertainment";
import Religious from "./religious";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/remainder" element={<Remainder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

        {/* Tourism Section Routes */}
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/religious" element={<Religious />} />
      </Routes>
    </Router>
  );
}

export default App;
