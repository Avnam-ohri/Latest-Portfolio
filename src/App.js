import React from 'react';
import Background from './components/Background';
import Home from './components/Home';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import About from './components/About';
import 'animate.css/animate.css'
import Contact from './components/Contact';
import './App.scss'
import Projects from './components/Projects';
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Background />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='projects' element={<Projects />} />
    </Route>
    </Routes>
    
  )
}

export default App;