import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
