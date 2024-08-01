import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Stylists from './Components/Stylists';
import Appointment from './Components/Appointment';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stylists" element={<Stylists />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
