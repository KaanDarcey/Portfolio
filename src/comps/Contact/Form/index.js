import React from 'react';
import './form.scss';

function Form(){
    return(
        <form>
            <h3>Name</h3>
            <input className='form-input' type='text' placeholder='Name' required='required'/>
            <h3>Email</h3>
            <input className='form-input' type='text' placeholder='Email' required='required'/>
            <h3>Message</h3>
            <textarea className='form-input form-input-msg' type='text' placeholder='Message' required='required'/>
            <button className='form-btn'>Submit</button>
        </form>
    )
}

export default Form;