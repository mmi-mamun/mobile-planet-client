import React from 'react';
import Advertise from '../components/Advertise';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import DiscoverSection from '../components/DiscoverSection';
import ExtraSection from '../components/ExtraSection';
import SubscribeSection from '../components/SubscribeSection';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Advertise></Advertise>
            <Categories></Categories>
            <DiscoverSection></DiscoverSection>
            <ExtraSection></ExtraSection>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;