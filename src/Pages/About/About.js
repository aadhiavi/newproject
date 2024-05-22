import React from 'react';
import './AboutStyles.css';
import Navbar from '../../Components/Navbar/Navbar';
import Address from './Components/Address';
import Interest from './Components/Interest';
import Contact from './Components/Contact';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Address/>
      <Interest/>
      <Contact/>
      

    </div>
  )
}

export default About