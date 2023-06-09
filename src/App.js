import './App.scss';
import React from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes } from 'react-router-dom';
import About from '../src/pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
ReactGA.initialize('G-6EYDPQH5CN');
ReactGA.send("pageview");

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </>
  );
}

export default App;
