import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { GiDiamondTrophy, GiLaurelsTrophy, GiReturnArrow, GiSkills } from "react-icons/gi";
import { IconName, SiHelpdesk, TbCoffeeOff } from "react-icons/si";

const DiscoverSection = () => {
    const discovers = [
        {
            icon: <GiSkills className='text-7xl' />,
            title: 'Customer Choice',
            description: 'Customers are exploring and selecting our products then they will get an offer to buy this device.'
        },
        {
            icon: <GiLaurelsTrophy className='text-7xl' />,
            title: 'Future Proof',
            description: 'We treat users like we want to be treated. We are always focused and caring to customers.'
        },
        {
            icon: <GiReturnArrow className="text-7xl" />,
            title: '7 days replacement warranty',
            description: 'After buying the product, no need to worried about whether this product is the best or not.'
        }
    ]

    return (
        <div className="my-12 sm:my-24">
            <div className="divider">*</div>
            <div className="text-center py-5 pb-12">
                <h2 className="text-3xl sm:text-5xl font-semibold">Packed with Goodies</h2>
                <p className="max-w-3xl px-3  pb-5  mx-auto">The Absolute Best Products & Care for You</p>
                <p className="max-w-3xl px-3 mx-auto text-xl">Over 5 years of Experience in Sharing Gorgeous Products only for you! We are Envato Elite.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-3">
                {
                    discovers.map(({ icon, title, description }, i) => <div key={i} className="p-3">
                        <div className='flex justify-center'>{icon}</div>
                        <h3 className="text-primary font-semibold text-xl sm:text-2xl text-center py-3">{title}</h3>
                        <p className='text-center px-2'>{description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DiscoverSection;