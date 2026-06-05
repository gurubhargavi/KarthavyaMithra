import { BrowserRouter, Routes, Route } from "react-router-dom";
import Communities from "./pages/Communities";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ActivitiesPage from "./pages/ActivitiesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/activities" element={<ActivitiesPage />} />

        <Route path="/communities" element={<Communities />} />

        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;