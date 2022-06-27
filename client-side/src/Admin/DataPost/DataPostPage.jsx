import React from "react";
import Footer from '../../Components/footer';
import Navbar from '../Dashboard/sections/Navbar';
import Monitoring from './sections/Monitoring';
const DataPostPage = () => {
    return (
        <div>
            <Navbar />
            <Monitoring />
            <Footer />
        </div>
    );
}
export default DataPostPage;