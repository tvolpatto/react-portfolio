import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Portfolio from './pages/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <About/>
        <Resume/>
        <Route exact path="/portfolio" component={Portfolio} />
        <Contact/>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
