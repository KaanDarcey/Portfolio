import React from 'react';
import './nav.scss';

function Nav({title1, title2, title3}){
    return(
    <div className='navbar'>
        <div className='navItem'>{title1}
            <div className='actionBar'></div>
        </div>
        <div className='navItem'>{title2}
            <div className='actionBar'></div>
        </div>
        <div className='navItem'>{title3}
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