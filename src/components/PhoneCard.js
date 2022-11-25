import React from 'react';

const PhoneCard = ({ filPhn }) => {
    const { deviceName, sellerName, img, resalePrice, originalPrice, yearsOfUse, postedDate } = filPhn;
    return (
        <div className="card card-side bg-base-100 shadow-xl mx-auto">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{deviceName}</h2>
                <p>Seller Name: {sellerName}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Use Duration: {yearsOfUse}</p>
                <p>Posted Date: {postedDate}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-ghost">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;