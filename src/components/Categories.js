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
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;