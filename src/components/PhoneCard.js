import React, { useState } from 'react';
import BookingModal from './BookingModal';

const PhoneCard = ({ filPhn }) => {
    const { deviceName, sellerName, img, resalePrice, originalPrice, yearsOfUse, postedDate } = filPhn;
    const [bookPhone, setBookPhone] = useState({})
    // console.log(bookPhone)
    return (
        <div className="card card-side bg-base-100 shadow-xl mx-auto">
            <figure><img className='rounded-lg' src={img} alt="Mobile" /></figure>
            <div className="card-body">
                <h2 className="card-title">{deviceName}</h2>
                <p>Seller Name: {sellerName}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Use Duration: {yearsOfUse}</p>
                <p>Posted Date: {postedDate}</p>

                <div className="card-actions justify-end">
                    {/* <button className="btn btn-ghost">Book Now</button> */}
                    {/* The button to open modal */}
                    <label onClick={() => setBookPhone(filPhn)} htmlFor="booking-modal" className="btn btn-ghost">Book Now</label>
                </div>
                {bookPhone && <BookingModal setBookPhone={setBookPhone} bookPhone={bookPhone}></BookingModal>}
            </div>
        </div>
    );
};

export default PhoneCard;