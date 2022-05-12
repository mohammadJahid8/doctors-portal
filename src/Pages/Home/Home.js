import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';


const Home = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <Banner />
                <Info />
                <Services />
                <Treatment />
            </div>
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;