import React from 'react';
import Lottie from 'lottie-react';
import mobileTyper from '../images/lottieJson/58002-using-mobile-phone.json'

const ExtraSection = () => {
    return (
        <div>
            <div className="divider">*</div>
            <h3 className="text-3xl text-orange-600 text-center my-16">Extra Section with info by chat box</h3>

            <div className='mt-12 grid grid-cols-5 justify-center items-center'>

                <div className='col-span-5 md:col-span-3 lg:col-span-3  lg:pr-6'>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-success">Hi, I need some information.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-info">Yeah, sure</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-info">How can i help you?</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-success">Are these products at a fixed price?</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-success">Can we get a replacement warranty for second-hand mobiles?!??</div>
                    </div>


                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-success">Yes, all products have fixed prices.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-warning">We provide always good products.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-error">We give a replacement warranty for 7 days.</div>
                    </div>
                </div>

                <div className='col-span-5 lg:col-span-2 md:col-span-2 '><Lottie animationData={mobileTyper} loop={true}></Lottie></div>
            </div>
        </div>

    );
};

export default ExtraSection;