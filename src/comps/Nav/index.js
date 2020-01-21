import React from 'react';
import './nav.scss';

function Nav({title1, title2, title3}){
    return(
    <div className='navbar'>
        <div className='navItem'>{title1}</div>
        <div className='navItem'>{title2}</div>
        <div className='navItem'>{title3}</div>
    </div>
    )
}

Nav.defaultProps = {
    title1: 'Projects',
    title2: 'About',
    title3: 'Contact'
};

export default Nav;