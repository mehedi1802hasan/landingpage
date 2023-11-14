import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Banner from '../Banner';
import Services from './Services';
import Review from './Review';
import About from './About';
import Faq from './Faq';
import GetINTouch from './GetINTouch';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <About></About>
            <Faq></Faq>
            <GetINTouch></GetINTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;