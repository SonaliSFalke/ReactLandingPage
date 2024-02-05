import './style.css';
import AboutImage from './Images/about.jpg'

import React from 'react';
const AboutPart = () =>{
    return (
        <div className='about'>
            <div className='about-part container'>
                <div className='image'>
                    <img src={AboutImage}  alt='aboutImage'/>
                </div>
                <div className='text'>
                    <h2>About Us</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                    </p>
                    <button type='button'>Read More</button>
                </div>
            </div>
        </div>
    );
}
export default AboutPart;