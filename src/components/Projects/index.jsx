import './index.scss'
import Loader from 'react-loaders'
import React, { useState } from 'react'
import AnimatedLetters from '../AnimateLetters'
import portfolioData from '../../data/portfolio.json' 


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData)


const renderPortfolio = (portfolio) => {
    return(
        <div className="images-container">
            {
                portfolio.map((port, idx) =>{
                    return (
                        <div className="image-box" key={idx}>
                            <img src={port.cover} alt="portfolio" className='portfolio-image' />
                            <div className='content'>
                                <p className='title'>{port.title}</p>
                                <h4 className='description'>{port.description}</h4>
                                <button className='btn'
                                onClick={()=> window.open(port.url)}>
                                    View
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    
    )
}

  return (
    <>
    <div className='container projects-page'>
        <h1 className='page-title'>
            <AnimatedLetters
            idx={15}
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
    </div>
    <Loader  type="pacman" />
    </>
  )
}

export default Projects