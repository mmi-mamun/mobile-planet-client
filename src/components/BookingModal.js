import React from 'react';

const BookingModal = ({ filPhn }) => {
    const { deviceName, sellerName, img, resalePrice, originalPrice, yearsOfUse, postedDate } = filPhn;
    return (
        <>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{deviceName}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;