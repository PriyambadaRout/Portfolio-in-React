import React from 'react'
import '../App.css'
import { HiOutlineMailOpen } from 'react-icons/hi';
import { GiSmartphone } from 'react-icons/gi';
import { SiSkypeforbusiness } from 'react-icons/si'
import Button from 'react-bootstrap/Button'

const Contacts = () => {
  return (
    <div className='container'>
      <div>
        <h1 style={{ textAlign: 'center', padding: '20px 0 40px 0', fontWeight: '700' }}>Contact Me <hr style={{ marginLeft: 'auto', marginRight: 'auto', width: '5%', textAlign: 'center', height: '3px', color: 'red' }} /></h1>
      </div>
      <div className='row'>
        <div className='col-4 col-md-4'>
          <div className='left-data'>
            <ul className='contact-info mt-4' style={{ listStyle: 'none' }}>
              <li><span><HiOutlineMailOpen /> </span><span style={{ marginTop: '10px' }}>routpriyambada009@gmailcom</span></li>
              <li><span><GiSmartphone /> </span><span style={{ marginTop: '10px' }}>9876543210</span></li>
              <li><span><SiSkypeforbusiness /> </span><span style={{ marginTop: '10px' }}>Your Skype Address</span></li>
            </ul>
          </div>
        </div>


        <div className='col-8 col-md-4'>
          <form id="contact-form" class="row contact-form" action="#" method="POST">
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter your name"></input>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Your email address"></input>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <input type="text" class="form-control" name="subject" placeholder="Enter the discussion title"></input>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12"><div class="form-group">
              <textarea name="message" id="message" class="form-control" placeholder="Write your message">
              </textarea>
            </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="button-field">
                <Button type="submit" class="btn radius-btn">Send Message now</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts