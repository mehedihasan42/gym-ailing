import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import BmiCalculator from '../BmiCalculator/BmiCalculator';
import OurOffer from '../OurOffer/OurOffer';
import Events from '../Events/Events';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BmiCalculator></BmiCalculator>
            <OurOffer></OurOffer>
            <Events></Events>
            <Contact></Contact>
        </div>
    );
};

export default Home;