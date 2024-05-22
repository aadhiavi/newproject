import React from 'react'
import resume from '../../../Assets/resumeimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Resume = () => {
    return (
        <>
            <div className="resume">
                <div className="resume-section">
                    <div className="image-section">
                        <a href="https://drive.google.com/file/d/1lWKU9wE1N10edYgZnV0yC6VI0XPdoyZV/view?usp=drivesdk"><img src={resume} alt="" /></a>
                        <div className="port-resume">
                            <h3>Open pdf</h3>
                            <Link to='https://drive.google.com/file/d/1lWKU9wE1N10edYgZnV0yC6VI0XPdoyZV/view?usp=drivesdk'><FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

                        </div>
                    </div>
                    <div className="port-veiw">
                        <h1>My Resume</h1>
                        <p>View here my resume to know indetailed information about me click on  the image to download my resume or click on the below button </p>
                        <Link  to ="https://drive.google.com/file/d/1lWKU9wE1N10edYgZnV0yC6VI0XPdoyZV/view?usp=drivesdk">Resume</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume