import React, { useState, useEffect } from 'react'
import {faDocker,faCss3,faGitAlt,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimateLetters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
  },2000)
  },[])


  return (
    <>
    <div className='container about-page'>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['A','b','o','u','t',' ','m','e']}
          idx ={15}
          />
        </h1>
        <p>Hello, I’m Avnam, and I’m passionate about building things for the web. I started my journey as a Bioinformatician when I was in my post graduation.
        I found a tutorial on how to add a script to generate multiple webGl images from pdf files on my computer screen, and once that happened,
        I was completely hooked to the world of Programming.</p>

        <p> In the years, I’ve cultivated my passion for coding by studying the IT field, but most of all, by building websites using JavaScript, so that I could learn more and more about this field.
        Lately, I’ve discovered my passion for the world of web development and the beauty behind building useful websites like the one you will find in this portfolio.</p>
        <p> I’m now looking for a junior dev position to finally kick start my career and learn among professionals.</p>
      </div>
      <div className='stage-cube-cont'>
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faDocker} color="blue" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="red" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About