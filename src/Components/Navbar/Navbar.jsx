import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link, Outlet } from 'react-router-dom'
import Hero from '../Hero/Hero'
import { IoMenu } from 'react-icons/io5'

const Navbar = ({handleScroll}) => {
  return (
    <div className="nav-wrapper">

        <div className='navbar'>
            <div className="nav-logo">
                <p>SAMNANG</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleScroll('home')}>Home</li>
                <li onClick={() => handleScroll('about')}>About</li>
                <li onClick={() => handleScroll('skills')}>Skills</li>
                <li onClick={() => handleScroll('work-experience')}>Experience</li>
                <li onClick={() => handleScroll('projects')}>Projects</li>
                <li onClick={() => handleScroll('contact')}>Contact</li>

                <button className='contact-btn' onClick={() => {}}>
                    Hire Me
                </button>
            </ul>
            <button class="menu-btn" onClick={() =>{}}>
                <span style={{fontSize: "1.8rem"}}>
                    <IoMenu />
                </span>
            </button>
        </div>
        <Outlet/>
        
    </div>
  )
}

export default Navbar