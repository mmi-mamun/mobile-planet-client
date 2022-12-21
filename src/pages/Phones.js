import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';

const Phones = () => {
    const { id } = useParams();
    // console.log(id);

    const [filteredPhones, setFilteredPhones] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/category/${id}`)
            .then(res => res.json())
            .then(data => setFilteredPhones(data))
    }, [id])


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                    filteredPhones.map(phone => <PhoneCard key={phone.customID} phone={phone} ></PhoneCard>)
                }
            </div>


        </div>
    );
};

export default Phones;