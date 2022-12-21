import React from 'react';
import Swal from 'sweetalert2';

const SubscribeSection = () => {
    const onSubscribe = (e) => {
        e.preventDefault();
        e.target.reset();
        Swal.fire(
            'Thanks !',
            'We will send your our updates regularly.',
            'success'
        );
    }
    return (
        <div className='mb-6 px-3'>
            <div className="divider">*</div>
            <h1 className='text-3xl sm:text-5xl font-semibold text-center py-2'>Subscribe Now</h1>
            <p className='text-muted text-center font-semibold pt-2 pb-6'>Subscribe to our newsletter to get our latest update.</p>
            <div className='flex justify-center'>
                <form onSubmit={(e) => onSubscribe(e)} className='p-1 border-2 rounded flex items-center'>
                    <input className='p-3 w-[150px] sm:w-auto' type="email" name="email" placeholder='Enter your email' required />
                    <input className='btn' type="submit" value="Subscribe"
                        style={{
                            backgroundColor: "#f7782a",
                            border: "0",
                            color: "#ffffff"
                        }} />
                </form>
            </div>
        </div>
    );
};

export default SubscribeSection;