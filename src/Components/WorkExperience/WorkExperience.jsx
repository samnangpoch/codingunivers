import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../Util/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'
import arrow_right from '../Assets/arrow_right.png'
import arrow_left from '../Assets/arrow_left.png'


const WorkExperience = () => {

    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slideToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },
            },
        ],
    };
    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }
  return (
    <div className='workexperience'>
        <section id="work-experience">
            <h5>Work Experience</h5>
        

            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <img src={arrow_right} alt="" />
                </div>

                <div className="arrow-left" onClick={slideLeft}>
                    <img src={arrow_left} alt="" />
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item}/>
                    ))}
                </Slider>
            </div>
        </section>
    </div>
  )
}

export default WorkExperience