import React from 'react';
import './Contact.scss';
import Form from './Form';
import {FaGithubAlt,FaLinkedin, FaBehanceSquare} from 'react-icons/fa';

function Contact(){
    return(
        <div className='contact'>
            <h2 className='contact-title'>CONTACT</h2>
            <div className='contact-section'>
                <Form />
                <div className='contact-icons'>
                    <a href='https://github.com/KaanDarcey'>
                        <div className='contact-icon'>
                            <FaGithubAlt size={60}/>
                            <h4 className='icon-text'>View My Github</h4>
                        </div>
                    </a>
                    <a href='https://www.behance.net/kaandarcey'>
                        <div className='contact-icon'>
                            <FaBehanceSquare size={60}/>
                            <h4 className='icon-text'>View My Behance</h4>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/kaan-darcey/'>
                        <div className='contact-icon'>
                            <FaLinkedin size={60}/>
                            <h4 className='icon-text'>View My LinkedIn</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;