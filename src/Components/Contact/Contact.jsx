import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import e_mail from '../Assets/mail.png'
import github from '../Assets/github.png'
import ContactForm from './ContactForm/ContactForm'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'

const Contact = () => {
  return (
    <div className='contact'>
        <section id="contact">
            <h5>My Contact</h5>
            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard 
                        iconUrl = {e_mail}
                        text = "samnangheang6@gmail.com"
                    />
                    <ContactInfoCard 
                        iconUrl = {github}
                        text = "https://github.com"
                    />
                </div>
                <div style={{flex: 1}}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact