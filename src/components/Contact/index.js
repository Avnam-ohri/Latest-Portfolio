import './index.scss'
import myimage from './../../images/myimage.png'
import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimateLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
   const refForm = useRef()

    useEffect(()=>{
      setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },2000)
    },[])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm(
            'service_mtuh34i',
            'template_ghq4w7k',
            refForm.current,
            'wh7-SEWzcVIIwkzad'
        ).then(
            ()=>{
                alert("Message sent sucessfully")
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    } 
  return (
    <>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}
                letterClass={letterClass}/>
            </h1>
            <p>
                I am interested in a junior position primarily in the field of 
                web development. However I am open to other software engineering positions.
                If you just want to connect please don't hesitate to contact me using this form either.
            </p>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type="email"name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='circular'><img className='myimage' src={myimage} alt="myImage"  /></div>
    </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact