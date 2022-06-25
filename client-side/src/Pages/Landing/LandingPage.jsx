import React from 'react';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Jumbotron from './sections/Jumbotron';
import Program from './sections/Program';
import Arti from './sections/Arti';
import Deskripsi from './sections/Deskripsi';
const LandingPage = () => {
    return (
        <div>

            {/* <Header /> */}
            <Jumbotron />
            <Program />
            <Arti />
            <Deskripsi />
            <Footer />
        </div>
    );
}

export default LandingPage;
