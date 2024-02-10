import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SIgnup from "./pages/Signup";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SIgnup />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
