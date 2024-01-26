import React from 'react';
import '../css/ContactMe.css';
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>

                <ContactInfoCard
                    iconUrl="./assets/icons/email.png"
                    text="ashutoshpa4367@gmail.com"
                />

                <ContactInfoCard
                    iconUrl="./assets/icons/github.png"
                    text="https://github.com/Patil-Ashutosh-Anandrao"
                />
            </div>


            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    
    </section>
  )
};


export default ContactMe
