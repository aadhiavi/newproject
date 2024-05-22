import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact <span>Me!</span></h1>
            <div className="contact-page">
                <input type="text" placeholder='Full name' />
                <input type="email" placeholder='Eamil address' />
                <input type="phone" placeholder='Phone number' />
                <input type="text" placeholder='Email headline' />

            </div>
            <textarea name="letter" id="text" placeholder='Enter message'></textarea>
            <button className='contact-send'>Send Message</button>
        </div>
    )
}

export default Contact