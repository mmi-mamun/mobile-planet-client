import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({ filPhn, bookPhone, setBookPhone }) => {

    const { user } = useContext(AuthContext);
    const { deviceName, sellerName, img, resalePrice, originalPrice, yearsOfUse, postedDate } = bookPhone;
    // console.log(bookPhone);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const contactNumber = form.contactNumber.value;
        const location = form.location.value;

        console.log(price, email);

        const booking = {
            Name: name,
            Email: email,
            Device: itemName,
            Price: price + ' Taka',
            Contact: contactNumber,
            Location: location
        }

        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking confirmed')
                    setBookPhone(null);

                }
            })

    }

    return (
        <>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setBookPhone(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form onSubmit={handleBooking} className='my-3'>
                        <div className="form-control w-full max-w-xs my-2 mx-auto">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} disabled />
                        </div>

                        <div className="form-control w-full max-w-xs my-2 mx-auto">
                            <label className="label">
                                <span className="label-text">User email</span>
                            </label>
                            <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} disabled />
                        </div>

                        <div className="form-control w-full max-w-xs my-2 mx-auto">
                            <label className="label">
                                <span className="label-text">Item name</span>
                            </label>
                            <input name='itemName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={deviceName} disabled />
                        </div>

                        <div className="form-control w-full max-w-xs my-2 mx-auto">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={resalePrice} disabled />
                        </div>

                        <div className="form-control w-full max-w-xs my-2 mx-auto">
                            <label className="label">
                                <span className="label-text">Give your contact number</span>
                            </label>
                            <input name='contactNumber' type="number" placeholder="Contact number" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs my-2 mx-auto">
                            <label className="label">
                                <span className="label-text">Share your location</span>
                            </label>
                            <input name='location' type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <br />
                        <input className='cursor-pointer w-full bg-accent p-3 rounded-xl' type="submit" value="Submit" />
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;