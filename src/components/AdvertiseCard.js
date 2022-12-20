import React from 'react';

const AdvertiseCard = ({ phone }) => {
    return (
        // <div className="card w-64 glass">
        //     {/* <div className="card-body">
        //         <h2 className="card-title">{phone.deviceName}</h2>
        //         <p>{phone.sellerName}</p>
        //     </div> */}
        //     <figure><img className='w-full' src={phone.img} alt="car!" /></figure>
        // </div>
        <div>
            <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                    <img src={phone.img} alt='' />
                </div>
            </div>
            <div>
                <h2 className="card-title">{phone.deviceName}</h2>
                <p className='my-3'>by <strong>{phone.sellerName}</strong></p>
            </div>
        </div>
    );
};

export default AdvertiseCard;