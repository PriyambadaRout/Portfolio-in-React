import React from 'react'
import Button from 'react-bootstrap/Button'

const Projects = () => {
  return (
    <div className='container'>
      <div>
        <h1 style={{ textAlign: 'center', padding: '20px 0 40px 0', fontWeight:'700' }}>My Projects <hr style={{ marginLeft: 'auto', marginRight: 'auto', width: '5%', textAlign: 'center', height: '3px', color: 'red' }} /></h1>

      </div>
      <div class="row">
        <div class="col-6 col-md-4">
          <img src='project1.jpg' width='100%' height='100%' className='image' />
          <div className='middle'>
            <div className='text'>
              <h4>Project Name</h4>
              <p>Web Design</p><span style={{ fontSize: '18px', fontWeight: '700', width: '130px' }}>Technology used: </span><span>HTML, CSS, Javascript, Bootstrap, Wordpress</span>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4">
          <img src='project2.jpg' width='100%' height='100%' className='image' />
          <div className='middle1'>
            <div className='text1'>
              <h4>Project Name</h4>
              <p>Web Development</p><span style={{ fontSize: '18px', fontWeight: '700', width: '130px' }}>Technology used: </span><span>HTML, CSS, Javascript, Bootstrap, Wordpress, MySQL</span>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4">
          <img src='project3.jpg' width='100%' height='100%' className='image' />
          <div className='middle'>
            <div className='text'>
              <h4>Project Name</h4>
              <p>Frontend Developer</p><span style={{ fontSize: '18px', fontWeight: '700', width: '130px' }}>Technology used: </span><span>HTML, CSS, Javascript ES6, React Js, MySQL, Node</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', paddingTop:'30px'}}>
        <Button style={{ background: '#FFBE6A', color: 'black', border: 'none', fontSize: '14px' }}>See More</Button>
      </div>
    </div>
  )
}

export default Projects