import React from 'react';
import Find from './sections/Find';
import Bidang from './sections/Bidang';
import Footer from '../../Components/footer';
const BerandaPage = () => {
    return (
        <div>

            {/* <Header /> */}
            <Find />
            <Bidang/>
            <Footer />
        </div>
    );
}

export default BerandaPage;