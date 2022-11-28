import React from 'react';

const ExtraSection = () => {
    return (
        <div className='mt-12'>
            <div className="divider">*</div>
            <h3 className="text-3xl text-orange-600 text-center my-16">Extra Section with info by chat box</h3>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary">Hi, I need some information.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">Yeah, sure</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">How can i help you?</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-accent">Are these products at a fixed price?</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary">Can we get a replacement warranty for second-hand mobiles?!??</div>
            </div>


            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-success">Yes, all products have fixed prices.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-warning">We provide always good products.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-error">We give a replacement warranty for 7 days.</div>
            </div>
        </div>
    );
};

export default ExtraSection;