import './style.css';



import React from 'react';
const ArticalPart = (props) => {
    return (
        <div className='container'>

            {props.detail.map((value, index) => (
                <div class="card-group ">
                    <div class="card" key={index}>
                        <img src={value.img} alt='food' />
                        <div class="card-body">
                            <h4 class="card-title">{value.title}</h4>
                            <p class="card-text">{value.discription}.</p>
                            <button type='button'>Read More</button>
                        </div>
                    </div>
                </div>
            ))}
            ;


        </div>
    );
}
export default ArticalPart;