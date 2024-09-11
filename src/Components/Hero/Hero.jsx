import React from 'react'
import './Hero.css'
import java_icon from '../Assets/java.png'
import css_icon from '../Assets/css.png'
import reactjs_icon from '../Assets/reactjs.png'
import html_icon from '../Assets/html.png'
import hero_img from '../Assets/hero.jpg'
import csharp_icon from '../Assets/c-sharp.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>Passionate Frontend Developer | Transforming Ideas Into Seamless and Visually Stunning Web Solutions</p>
        </div>
        <div className='hero-img'>
            <div>
                <div className="tech-icon">
                    <img src={java_icon} alt="" />
                </div>
                <img src={hero_img} alt="" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src={css_icon} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={reactjs_icon} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={html_icon} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={csharp_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero