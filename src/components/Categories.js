import React from 'react';
import image1 from '../../src/images/CategoryPhone/category-1.png'
import image2 from '../../src/images/CategoryPhone/category-2.png'
import image3 from '../../src/images/CategoryPhone/category-3.png'

const Categories = () => {
    const phoneCategories = [
        {
            name: "Feature Phones",
            img: image1
        },
        {
            name: "Smart Phones",
            img: image2
        },
        {
            name: "Tablets",
            img: image3
        },
    ]
    return (
        <div className="mx-5 my-12">
            <h3 className="text-center text-3xl text-orange-600 my-5">Categories</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    phoneCategories.map(category => <div className="mx-auto card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={category.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-xl text-center">{category.name}</h2>
                            <div className="card-actions justify-center mt-20">
                                <button className="btn btn-primary">See All</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Categories;