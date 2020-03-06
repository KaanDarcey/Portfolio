import React from 'react';
import './hero.scss';
import animateScrollTo from 'animated-scroll-to';

function Hero({title1, title2, title3}){
    return(
        <div className='hero'>
            <div className='heroText'>
                {/* <h1 className='heroTitle' >{title1},</h1> */}
                <h1 className='heroTitle'>{title2}</h1>
                <h3 className='heroSubTitle'>{title3}</h3>
                <button 
                    className='btn'
                    onClick={()=>{animateScrollTo(document.querySelector('.project'));}}
                >
                        View Projects
                </button>
                <button 
                    className='btn'
                    onClick={()=>{animateScrollTo(document.querySelector('.contact'));}}
                >
                    Contact Me
                </button>
            </div>
            <img className='heroImg' src={require('../../imgs/Hero.png')} alt='heroImg'/>
        </div>
    )
}

Hero.defaultProps = {
    title1: 'Hello',
    title2: "Kaan Darcey",
    title3: 'Front-End Developer'
};


export default Hero;