import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6' >
          <div className='section'>
            <div className='left_data1'>
              <img src='dummy.jpg' width='85%' height='100%' className='image' />
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='right_data1'>
            <h1 style={{ fontWeight: '700' }}>About Me</h1>
            <hr style={{ width: '10%', marginLeft: '0', height: '3px', color: 'red' }}></hr>
            <p>I’m a Front End Developer. I have a Passion for Creating Clean, Beautiful, Interactive, Minimalistic, Responsive and User Friendly UI, Developed by Modular, Scalable and Functional Code.</p>
            <ul className='about-info mt-4' style={{ listStyle: 'none' }}>
              <li><span>Name: </span><span>Priya</span></li>
              <li><span>Date of birth: </span><span>February 1, 1995</span></li>
              <li><span>Address: </span><span>Pimple Gurav, 411061</span></li>
              <li><span>Email: </span><span>routpriyambada009@gmailcom</span></li>
              <li><span>Phone: </span><span>9876543210</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About