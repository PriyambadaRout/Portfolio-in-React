import React from 'react'
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { ImBehance2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'

function Navbar() {
    return (
        <div>
            <div className='sidebar'>
                <div className='top_section' style={{ color: 'white', margin: 'auto', padding: '20px' }}>
                    <h4>Priyambada Rout</h4>
                </div>
                <div>
                    <ul className='nav-menu'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} style={{ listStyle: 'none' }}>
                                    <Link to={item.path} style={{ textDecoration: 'none' }}>
                                        {item.icon}
                                        <span style={{ marginLeft: '16px' }}>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        <div style={{position: 'absolute', bottom:'150px'}}>
                            <span style={{color:'red', fontSize:'15px'}}>View Profile on </span>
                            <div className='d-flex social'>
                                <a href='https://www.facebook.com/'><li><BsFacebook style={{ color: 'white' }} /></li></a>
                                <a href='https://www.linkedin.com/'><li><BsLinkedin style={{ color: 'white' }} /></li></a>
                                <a href='https://www.behance.net/'><li><ImBehance2 style={{ color: 'white' }} /></li></a>
                                <a href='https://www.instagram.com/'><li><BsInstagram style={{ color: 'white' }} /></li></a>
                            </div>
                        </div>
                    </ul>

                </div>
            </div>

        </div >
    )
}

export default Navbar