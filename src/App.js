import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Components/Footer";
import Search from "./Components/Search";



function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/history" element={<SearchHistory />} /> */}
        {/* <Route path="/login" component={Login} /> */}
      </Routes>
    </Router>
    <Footer/>

    </div>
    
  );
}
export default App;
