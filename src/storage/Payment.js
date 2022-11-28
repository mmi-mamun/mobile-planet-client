import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    console.log(stripePromise)
    return (
        <div>
            <h3 className="text-3xl text-center my-3">Payment for <strong>{booking?.Device}</strong></h3>
            <h5 className="text-2xl text-center my-3">Please pay {booking?.Price}</h5>

            <div className='w-96 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;