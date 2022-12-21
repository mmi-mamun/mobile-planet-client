import React from 'react';
import Advertise from '../components/Advertise';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import ExtraSection from '../components/ExtraSection';
import SubscribeSection from '../components/SubscribeSection';
import Phones from './Phones';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Advertise></Advertise>
            <Categories></Categories>
            {/* <Phones></Phones> */}
            <ExtraSection></ExtraSection>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;