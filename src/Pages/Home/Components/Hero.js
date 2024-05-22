import React, { useEffect } from 'react'
import "../HomeStyles.css"
import my from '../../../Assets/my image1.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    })


    return (
        <div className='hero-section'>
            <div className="info">
                <h2 data-aos="fade-up">Hi, there!</h2>
                <h1 data-aos="fade-right">I'm Kurapati Avinash</h1>
                <span><h2 data-aos="fade-left">A passionate Frontend Developer</h2></span>
                <div className="para">
                <p data-aos="fade-left">An enthusiastic  fresher with highly motivated,
                    I thrive on crafting responsive and user-friendly
                    web interfaces. Turning design concepts into
                    pixel-perfect,interactive experiences that captivate users.
                    My expertise lies in HTML,CSS,Javascript and various
                    frontend frameworks like React and many more...</p>
                    <Link to="/about" data-aos="fade-down">More about me</Link>
                </div>
            </div>
            <div className="my-image">
                <img src={my} alt="" data-aos="flip-right"/>
            </div>
        </div>
    )
}

export default Hero