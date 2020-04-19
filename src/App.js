import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    </div>

  );
}

export default App;
