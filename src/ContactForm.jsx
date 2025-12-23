import React, { useState, useRef } from 'react'; // Added useRef
import emailjs from '@emailjs/browser'; // Import EmailJS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactForm = () => {
  const formRef = useRef(); // Create a reference for the form
  const [isSending, setIsSending] = useState(false); // For button status
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS Credentials from your snippet
    const serviceID = 'default_service';
    const templateID = 'template_kubsvp8';
    const publicKey = '3cx53azpgqM0fdR1j';

    // Using sendForm to capture all fields including hidden ones or complex structures
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        setIsSending(false);
        alert('Message Sent Successfully! ✅'); // Alert box
        // Reset the form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        console.log("Message Sent Successfully!", result.text);
      }, (error) => {
        setIsSending(false);
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again. ❌');
      });
  };

  return (
    <section id="contact">
      <h1 className="heading">Contact US</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:7995976215" title="Give me a call">
                  +91-7995976215
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a href="mailto:kumaryesu2000@gmail.com" title="Send me an email">
                  kumaryesu2000@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a href="https://www.facebook.com/yesukumarkings" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yesukumarkings" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} aria-hidden="false" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yesukumarb/" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Yesukumar2000" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </a>
            </li>
            {/* <li>
              <a href="https://github.com/Yesukumar2000" target="_blank" rel="noreferrer"  className="contact-icon"><img src={github} alt=""  /></a>
              </li>
            <li>
               <a href="https://www.linkedin.com/in/yesukumarb/" target="_blank" rel="noreferrer"  className="contact-icon"><img src={linked_in} alt=""></img></a>
            </li> */}
          </ul>
          <hr />
        </div>

        {/* Added ref={formRef} to the form */}
        <form ref={formRef} id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control Name"
                id="name"
                placeholder="Name"
                name="name" // Matches EmailJS Template Variable
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control Mail"
                id="email"
                placeholder="E-Mail"
                name="email" // Matches EmailJS Template Variable
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <textarea
            className="form-control1"
            rows="10"
            placeholder="Message"
            name="message" // Matches EmailJS Template Variable
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <button 
            className="btn btn-primary send-button" 
            id="submit" 
            type="submit" 
            disabled={isSending}
          >
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} className='fa' />
              <span className="send-text">
                {isSending ? 'SENDING...' : 'SEND'}
              </span>
            </div>
          </button>
        </form>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;