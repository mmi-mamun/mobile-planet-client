import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({ filPhn }) => {
    const { user } = useContext(AuthContext);
    const { deviceName, sellerName, img, resalePrice, originalPrice, yearsOfUse, postedDate } = filPhn;
    return (
        <>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{deviceName}</h3>
                    <p className="py-4">{user?.email}</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;