import './style.css';
import FoodTruck from './Images/food-truck.png'
import React from 'react';
const FooterPart = () =>{
    return (
        <div className='footer-data '>
            <div className='container'>
            <div className='footer row'>
                <div className='Fimg col-md-3'>
                    <img src={FoodTruck} alt='food-truck'/>
                </div>
                <div className='contact col-md-3'>
                    <h4>Contact Us</h4>
                    <p>
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                    </p>
                    <p><a href="./HeaderPart.js">example2020@gmail.com</a></p>
                    <p>(904) 443-0343</p>
                </div>
                <div className='Fabout col-md-3 '>
                    <h4>More</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
                <div className='social col-md-3 '>
                    <h4>Social Links</h4>
                    <div className='text-center social-con'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <p >© 2022 Food Truck Example</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default FooterPart;