import React from 'react';
import './nav.scss';
import animateScrollTo from 'animated-scroll-to';

function Nav({title1, title2, title3}){
    return(
    <div className='navbar'>
        <div  
            className='navItem'
            onClick={()=>{animateScrollTo(document.querySelector('.project'));}}
        >
            {title1}
            <div className='actionBar'></div>
        </div>
        <div 
            className='navItem'
            onClick={()=>{animateScrollTo(document.querySelector('.about'));}}
        >
            {title2}
            <div className='actionBar'></div>
        </div>
        <div 
            className='navItem'
            onClick={()=>{animateScrollTo(document.querySelector('.contact'));}}
        >
            {title3}
            <div className='actionBar'></div>
        </div>
    </div>
    )
}

Nav.defaultProps = {
    title1: 'PROJECTS',
    title2: 'ABOUT',
    title3: 'CONTACT'
};

export default Nav;