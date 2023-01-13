import "./App.css";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import SearchHistory from "./Components/SearchHistory";
import Login from "./Components/Login";
import Register from "./Components/Register";




function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/searchhistory" element={<SearchHistory />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
  
      </Routes>
    </Router>
    <Footer/>

    </div>
    
  );
}
export default App;
