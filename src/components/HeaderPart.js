import './style.css';
import TruckImage from './Images/food-truck.png';
import Pizza from './Images/pizza.jpg';

import React from 'react';
const HeaderPart = () =>{
    return (
        <div  className='container'>
            <div className='header-part'>
                    <div className='text'>
                        <img src={TruckImage}  alt='food-truck'/>
                        <div className='text1'>
                            <h1>Discover the <span className='redtext'>Best</span> Food and Drinks</h1>
                            <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                            <button type='button'>Explore Now</button>
                        </div>
                    </div>
                    <div className='image'>
                        {/* <button type='button'>Get In Touch</button> */}
                        <img src={Pizza} alt='pizza' />
                    </div>
            </div>
        </div>
    );
}
export default HeaderPart;