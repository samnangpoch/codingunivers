import React from 'react'
import './About.css'
import my_profile from '../Assets/profile.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { PiFolders } from 'react-icons/pi'
import me from '../Assets/me.jpg'

const About = () => {
  return (
    <section className='about'>
        <section id="about">
            <h6>About Me</h6>
            
            <div className="about_container">
                <div className="about_me">
                    <div className="about_img">
                        <img src={me} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ Experience</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>0 WorldWide</small>
                        </article>

                        <article className="about_card">
                            <PiFolders className='about_icon'/>
                            <h5>Prjects</h5>
                            <small>5 Projects</small>
                        </article>
                    </div>
                    <p>
                    &emsp;&emsp;Hi, I'm <strong> Heang Samnang,</strong> an experienced React JS developer passionate about building engaging web applications and solving complex problems with code. 
                    I hold a Bachelor's degree in Computer Science from the University of Information Technology. Over the past 4 years, I've gained valuable experience in frontend development, 
                    working on projects ranging from e-commerce websites to interactive dashboards. Outside of coding, I enjoy traveling to new places, capturing moments through photography, 
                    and playing guitar. I'm also an avid reader and love exploring new cuisines.
                    </p>
                    <p>
                    &emsp;&emsp;I'm proficient in a variety of technologies including React.js, JavaScript, HTML, CSS, and Node.js. I'm also experienced in using version control systems like Git 
                    and working with RESTful APIs. In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects 
                    that make a positive impact on people's lives.
                    </p>

                    <button className='contact_me'>Let's Talk</button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default About