import React from 'react';

const AdvertiseCard = ({ phone }) => {
    return (
        <div className="card w-96 glass">
            <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{phone.deviceName}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;