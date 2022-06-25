import React from 'react';
import Find from './sections/Find';
import Bidang from './sections/Bidang';
import Beasiswa from './sections/Beasiswa';
import Footer from '../../Components/footer';
const BerandaPage = () => {
    return (
        <div>

            {/* <Header /> */}
            <Find />
            <Bidang/>
            <Beasiswa/>
            <Footer />
        </div>
    );
}

export default BerandaPage;