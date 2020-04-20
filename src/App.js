import React from 'react';
import projects from "./utils/projects.json"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  return (
      <div>
        <Navbar />
        <Hero />
        <About/>
        <Resume/>
        <Portfolio projects={projects}/>
        <Contact/>
        <Footer />
      </div>

  );
}

export default App;
