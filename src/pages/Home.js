import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='left_data'>
            <hr style={{ width: '10%', marginLeft: '0', height: '3px', color: 'red' }}></hr>
            <span style={{fontSize:'35px', fontWeight:'500'}}>Hello,</span>
            <h2 style={{paddingTop:'10px', fontWeight:'700'}}>I am Priya</h2>
            <h5 style={{color:'red'}}>Freelance Web Graphics Designer and Frontend Developer</h5>
            <p>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor <br/> incididunt ulabore et dolore magna aliqua.</p>
            <div>
              <Button style={{ background: '#FFBE6A', color: 'black', border: 'none', fontSize: '14px' }}>Hire Me</Button>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='right_data'>
            <img src='dummy.jpg' width='50%' height='100%' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home