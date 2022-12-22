import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    // const { id } = useParams();
    // console.log(id);

    const [filteredPhones, setFilteredPhones] = useState([]);
    useEffect(() => {
        fetch(`https://used-phone-project-server.vercel.app/advertise`)
            .then(res => res.json())
            .then(data => setFilteredPhones(data))
    }, [])


    return (
        <div className='max-w-screen-md mx-auto'>
            <div className="divider">*</div>
            <h3 className="text-3xl text-orange-600 text-center my-12">Advertise Section</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-5'>
                {
                    filteredPhones.map(phone => <AdvertiseCard key={phone._id} phone={phone}></AdvertiseCard>)
                }
            </div>


        </div>
    );
};

export default Advertise;