import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimateLetters';
import name from '../../images/bg.png'
import Logo from'./Logo/'
import './index.scss'
import Loader from 'react-loaders';


const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
   useEffect(() => {
     setTimeout(() => {
       return setLetterClass('text-animate-hover')
     }, 4000);
   }, [])

  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <span className={`${letterClass} _11`}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m&ensp;</span>

        <img src={name} alt="developer" />
        <AnimatedLetters letterClass={letterClass} strArray={"VNAM".split("")} idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={"Web Developer".split("")} idx={22} />
        </h1>
        <h2>Frontend Developer/JavaScript Developer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
  </div>
  <Loader type='pacman' />
  </>
  )
}

export default Home;