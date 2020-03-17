import React from 'react';
import './about.scss';

function About(){
    return(
        <div className='about'>
            <div className='aboutText'>
                <div className='bio'>
                    <h2>BIO</h2>
                    <p className='bioDescr'>
                    My name is Kaan Darcey and I'm a Front-End Developer & UI/UX Designer based in Vancouver. <br/><br/>

I’m about to graduate from my diploma of digital design and development at BCIT (with distinctions).
I love problem solving and helping people achieve their goals. I'm passionate about my work and have a strong desire to always be growing and learning.<br/><br/>

I have made web applications using HTML, CSS, and JavaScript. I also have experience in making mobile applications using React Native, PHP, and MySQL for android and IOS. Additionally I am currently working on a project using React.js and SASS.<br/><br/>

I have also worked through the design process which involved User Research (including user surveys, identifying target demographics, user personas, and task models), creating Low-Fidelity Prototypes/Wireframes (using InVision and Balsamiq), creating Mock Ups (using Sketch and Figma), creating High-Fidelity Prototypes (with InVision), and User Testing.
                    </p>
                </div>
                <div className='skills'>
                    <h2>SKILLS</h2>
                    <div className='skillLists'>
                        <ul className='skillItems'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React/React Native</li>
                            <li>Wordpress</li>
                        </ul>
                        <ul className='skillItems'>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>After Effects</li>
                            <li>InDesign</li>
                            <li>Sketch</li>
                        </ul>
                        <ul className='skillItems'>
                            <li>Invision</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>Github</li>
                            <li>SEO </li>
                        </ul>
                    </div>
                </div>
            </div>
            <img className='vector'  src={require('../../imgs/vector.png')} alt='vector'/>
        </div>
    )
}

export default About;