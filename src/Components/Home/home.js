import React from 'react';
import Banner from '../Banner/banner';
import Contact from '../Contact Us/Contact';
import ShortServics from '../ShortServices/ShortServics';
import Services from '../Services/services';
import MapImg from '../MapImg/MapImg';
import Testimonials from '../Testimonials/Testimonials';
import Faq from '../FAQ/Faq';
import About from '../About Us/About';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <Banner></Banner>
            <Contact></Contact>
            <MapImg></MapImg>
            {/* <Services></Services> */}
            <ShortServics></ShortServics>
            <Testimonials></Testimonials>
            <Faq></Faq>
            {
                user.email?
                <About></About>
                : <div></div>
            }
        </div>
    );
};

export default Home;