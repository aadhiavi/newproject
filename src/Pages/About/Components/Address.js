import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


const Address = () => {
  return (
    <>
    <div className="block"></div>
    <div className='address'>
        <h1>Address</h1>
        <div className="boxes">
            <div className="box1">
                <div className='home-address'>
                    <h3>Home address</h3>
                </div>
                <div className="detailes">
                    <p>1-16, Chintalanarva Village,</p>
                    <p>Gampalagudem Mandal,</p>
                    <p>Krishna District,</p>
                    <p>Andhra Pradesh State</p>
                    <p>Zip-Code : 521403</p>
                </div>
            </div>
            <div className="box2">
                <div className="number">
                    <h3>Mobile Number</h3>
                    <div className="num">
                        <FontAwesomeIcon icon={faPhone}/><span>+91 8790336560</span>
                    </div>
                </div>
                <div className="email">
                    <h3>Email</h3>
                    <div className="mail">
                        <FontAwesomeIcon icon={faEnvelope}/><span>aadhiavi57@gmail.com</span>
                    </div>
                </div>
                <div className="dob">
                    <h3>Date of birth</h3>
                    <div className="date">
                        <FontAwesomeIcon icon={faCalendar}/><span>17th July, 1997</span>
                    </div>
                </div>
            </div>
            {/* <div className="box"></div> */}
        </div>
    </div>
    </>
  )
}

export default Address