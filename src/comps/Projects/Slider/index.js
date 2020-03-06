import React, { useState } from 'react';
import '../Slider/slider.scss';

function Slider({title1, title2, setChangeProjects={setChangeProjects}}){

    const[changeSlide, setChangeSlide] = useState(false);

    var slide1 = null,
        slide2 = null;

    if(changeSlide == false){
        slide1 = 'sliderOption1';
        slide2 = 'sliderOption2';
        setChangeProjects(false);
    } else {
        slide1 = 'sliderOption2';
        slide2 = 'sliderOption1';
        setChangeProjects(true);
    }

    return(
        <div className='slider'>
            <div className={slide1} onClick={()=>{setChangeSlide(false)}} >
                <h3 className='sliderTitle'>{title1}</h3>
            </div>
            <div className={slide2} onClick={()=>{setChangeSlide(true)}}>
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