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
        fetch(`http://localhost:5000/advertise`)
            .then(res => res.json())
            .then(data => setFilteredPhones(data))
    }, [])


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                    filteredPhones.map(phone => <AdvertiseCard key={phone._id} phone={phone}></AdvertiseCard>)
                }
            </div>


        </div>
    );
};

export default Advertise;