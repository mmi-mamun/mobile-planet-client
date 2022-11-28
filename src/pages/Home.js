import React from 'react';
import Advertise from '../components/Advertise';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import ExtraSection from '../components/ExtraSection';
import Phones from './Phones';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Advertise></Advertise>
            <Categories></Categories>
            {/* <Phones></Phones> */}
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;