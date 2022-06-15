import React, { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import mind from '../../../images/A.png'
import './index.scss'


const Logo = () => {
    const bgRef = useRef();
    const outLineLogoRef = useRef();
    const solidLogoRef = useRef();
  

    useEffect(()=>{
    
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline().to(bgRef.current, {
            duration: 1,
            opacity: 1,
        }).from( outLineLogoRef.current,{
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(
            solidLogoRef.current,{
                opacity:0,
            },{
                opacity:1,
                delay:4,
                duration:4,
            }
        )
    
    },[])
  return (
    <div className='logo-container' ref={bgRef}>
        <img  className='solid-logo' ref={solidLogoRef} src={mind} alt="mylogo" />
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="508.000000pt" height="640.000000pt" viewBox="0 0 508.000000 640.000000"
 preserveAspectRatio="xMidYMid meet">

<g className='svg-container' transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
fill="none" stroke="red">
<path ref={outLineLogoRef} d="M2481 6378 c-5 -13 -298 -756 -651 -1653 -353 -896 -754 -1913 -890
-2260 -136 -346 -404 -1025 -594 -1509 -245 -621 -346 -890 -346 -917 l0 -39
530 0 c419 0 528 3 525 13 -2 6 -26 87 -54 179 l-49 167 287 740 286 741 934
-3 933 -2 284 -738 283 -737 -50 -168 c-27 -92 -51 -173 -54 -180 -3 -9 123
-12 610 -12 l615 0 0 39 c0 27 -169 467 -591 1537 -325 825 -823 2086 -1106
2804 -283 718 -578 1466 -655 1663 l-141 357 -49 0 c-41 0 -50 -3 -57 -22z
m1244 -3228 c648 -1642 1180 -2993 1182 -3002 5 -17 -20 -18 -429 -18 -239 0
-437 2 -440 5 -3 3 10 56 28 117 l34 111 -307 804 -308 803 -1026 0 c-969 0
-1027 -1 -1033 -17 -4 -10 -144 -371 -311 -803 l-304 -786 34 -114 c19 -63 35
-116 35 -117 0 -2 -160 -3 -355 -3 -195 0 -355 3 -355 7 0 21 2366 6011 2371
6005 4 -4 537 -1350 1184 -2992z"/>
<path d="M2037 3557 c-229 -602 -417 -1096 -417 -1100 0 -4 376 -7 836 -7 792
0 836 1 832 18 -6 22 -818 2153 -827 2169 -3 7 -194 -479 -424 -1080z m743
-127 c172 -454 315 -831 318 -837 3 -10 -130 -13 -643 -13 -514 0 -646 3 -642
13 485 1273 642 1676 647 1670 4 -4 148 -379 320 -833z"/>
</g>
</svg>

    </div>
  )
}

export default Logo