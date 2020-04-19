import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <Route exact path="/about" component={About} />
      </Router>
    </div>

  );
}

export default App;
