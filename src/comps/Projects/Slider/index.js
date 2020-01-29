import React from 'react';
import './slider.scss';

function Slider({title1, title2}){
    return(
        <div className='slider'>
            <div className='sliderOption'>
                <h3 className='sliderTitle'>{title1}</h3>
            </div>
            <div className='sliderOption'>
                <h3 className='sliderTitle'>{title2}</h3>
            </div>
        </div>
    )
}

Slider.defaultProps= {
    title1:'Development',
    title2:'Design'
}

export default Slider;