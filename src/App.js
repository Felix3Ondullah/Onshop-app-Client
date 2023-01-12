import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Components/Footer";
import Search from "./Components/Search";
// import ForgotPassword from "./Components/ForgotPassword";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/forgotPassword" element={<ForgotPassword/>} /> */}
        <Route path="/landingPage" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
