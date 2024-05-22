import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'
import linkedin from "../../Assets/icon4.png"
import Git from "../../Assets/icons8.png"
import insta from "../../Assets/icon2.png"
import { useState } from 'react'






const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <nav>
            <div className="logo">
                <h1>Portfolio</h1>
            </div>
            <div className={click ? "menu active" : "menu"}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/education">Education</Link>
                <Link to="/projects">Projects</Link>
                <div className="social">
                    <a href="https://www.linkedin.com/in/kurapati-avinash-1549bb125"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/aadhiavi"><img src={Git} alt="" /></a>
                    <a href="https://www.instagram.com/avin_ash_57"><img src={insta} alt="" /></a>
                </div>
            </div>

            <div className="hamburger" onClick={handleClick}>
                {
                    click ? <FaTimes style={{ color: "white" }} size={25} /> : <FaBars style={{ color: "white" }} size={25} />
                }

            </div>
        </nav>
    )
}

export default Navbar