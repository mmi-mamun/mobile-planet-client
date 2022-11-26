import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({ filPhn, bookPhone, setBookPhone }) => {
    console.log(bookPhone)
    const { user } = useContext(AuthContext);
    const { deviceName, sellerName, img, resalePrice, originalPrice, yearsOfUse, postedDate } = bookPhone;
    console.log(bookPhone);
    return (
        <>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setBookPhone(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <div className="form-control w-full max-w-xs my-2 mx-auto">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} disabled />
                    </div>

                    <div className="form-control w-full max-w-xs my-2 mx-auto">
                        <label className="label">
                            <span className="label-text">User email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} disabled />
                    </div>

                    <div className="form-control w-full max-w-xs my-2 mx-auto">
                        <label className="label">
                            <span className="label-text">Item name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={deviceName} disabled />
                    </div>

                    <div className="form-control w-full max-w-xs my-2 mx-auto">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={resalePrice} disabled />
                    </div>

                    <div className="form-control w-full max-w-xs my-2 mx-auto">
                        <label className="label">
                            <span className="label-text">Give your contact number</span>
                        </label>
                        <input type="number" placeholder="Contact number" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs my-2 mx-auto">
                        <label className="label">
                            <span className="label-text">Share your location</span>
                        </label>
                        <input type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn btn-ghost w-full my-3">Submit</button>

                </div>
            </div>
        </>
    );
};

export default BookingModal;