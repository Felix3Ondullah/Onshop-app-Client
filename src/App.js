
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/login" component={Login} /> */}
      </Routes>
    </Router>
  );
}
export default App;