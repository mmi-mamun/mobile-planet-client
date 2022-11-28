// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../src/images/CategoryPhone/category-1.png'
import image2 from '../../src/images/CategoryPhone/category-2.png'
import image3 from '../../src/images/CategoryPhone/category-3.png'
// import Phones from '../pages/Phones';

const Categories = () => {


    // const [phones, setPhones] = useState([]);

    // useEffect(() => {
    //     fetch('phones.json')
    //         .then(res => res.json())
    //         .then(data => setPhones(data))
    // }, [])

    // const filteredFeatured = phones.filter((phone) => phone.category === 'feature-phone')
    // const filteredSmartphone = phones.filter((phone) => phone.category === 'smartphone')
    // const filteredTablet = phones.filter((phone) => phone.category === 'tablet')




    const phoneCategories = [
        {
            name: "Feature Phones",
            id: "feature-phone",
            img: image1,
            // phoneList: filteredFeatured
        },
        {
            name: "Smart Phones",
            id: "smartphone",
            img: image2,
            // phoneList: filteredSmartphone

        },
        {
            name: "Tablets",
            id: "tablet",
            img: image3,
            // phoneList: filteredTablet
        },
    ]
    // console.log(phoneCategories);

    // const handlePassData = (phoneList) => {
    //     console.log(phoneList)

    // }

    return (
        <div className="mx-5 my-12">
            <div className="divider">*</div>
            <h3 className="text-center text-3xl text-orange-600 my-5">Categories</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    phoneCategories.map(category => <div key={category.id} className="mx-auto card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={category.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-xl text-center">{category.name}</h2>
                            <div className="card-actions justify-center mt-20">
                                <Link to={`/category/${category.id}`}>
                                    <button className="btn btn-primary">See All</button>
                                </Link>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Categories;