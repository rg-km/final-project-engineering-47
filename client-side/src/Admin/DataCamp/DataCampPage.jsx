import React from "react";
import Footer from '../../Components/footer';
import Navbar from '../Dashboard/sections/Navbar';
import Monitoring from './sections/Monitoring';
const DataCampPage = () => {
    return (
        <div>
            <Navbar />
            <Monitoring />
            <Footer />
        </div>
    );
}
export default DataCampPage;