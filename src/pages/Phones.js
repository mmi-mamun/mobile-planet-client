import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch('http://localhost:5000/allPhones')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setPhones(data))
    }, [])

    const filteredFeatured = phones.filter((phone) => phone.category === 'feature-phone')
    const filteredSmartphone = phones.filter((phone) => phone.category === 'smartphone')
    const filteredTablet = phones.filter((phone) => phone.category === 'tablet')

    return (
        <div>
            {/* <h1 className="text-5xl">{phones.length}</h1>
            <h1 className="text-5xl">{id}</h1> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>

                {
                    id === 'feature-phone'
                    && filteredFeatured.map((filPhn, idx) => <PhoneCard key={idx} filPhn={filPhn}></PhoneCard>)

                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>

                {
                    id === 'smartphone'
                    && filteredSmartphone.map((filPhn, idx) => <PhoneCard key={idx} filPhn={filPhn}></PhoneCard>)

                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>

                {
                    id === 'tablet'
                    && filteredTablet.map((filPhn, idx) => <PhoneCard key={idx} filPhn={filPhn}></PhoneCard>)

                }
            </div>

        </div>
    );
};

export default Phones;