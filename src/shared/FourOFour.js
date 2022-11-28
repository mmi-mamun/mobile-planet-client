import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../src/images/others/404_page_cover.jpg'
const FourOFour = () => {
    return (
        <Link to='/'>
            <div>
                <img className='mx-auto w-full h-96 rounded-xl' src={image} alt="" />
            </div>
        </Link>
    );
};

export default FourOFour;