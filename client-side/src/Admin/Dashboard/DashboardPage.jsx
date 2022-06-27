import React from "react";
import Footer from '../../Components/footer';
import Navbar from './sections/Navbar';
import Monitoring from './sections/Monitoring';
const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <Monitoring />
            <Footer />
        </div>
    );
}
export default DashboardPage;