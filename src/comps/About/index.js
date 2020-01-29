import React from 'react';
import './about.scss';

function About(){
    return(
        <div className='about'>
            <div className='aboutText'>
                <div className='bio'>
                    <h2>BIO</h2>
                    <p className='bioDescr'>
                    My name is Kaan Darcey and I'm a Front-End Developer based in Vancouver. 

                    I’m about to graduate from my diploma of digital design and development at BCIT (with distinctions).
                    I love problem solving and helping people achieve their goals. I'm passionate about my work and have a strong desire to always be growing and learning.
                    I have made web applications using HTML, CSS, and JavaScript. I also have experience in making mobile applications using React Native for android and IOS.
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
                            <li>SEO Principles</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img className='image' src='' />
        </div>
    )
}

export default About;