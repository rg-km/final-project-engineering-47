import React from 'react';
import Find from './sections/Find';
import Bidang from './sections/Bidang';
import Beasiswa from './sections/Beasiswa';
import Footer from '../../Components/footer';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const BerandaPage = () => {
    const Navigate = useNavigate();
    const fetchData = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`http://localhost:8080/api/user/dashboard`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (e) {
            console.log(e.response.data.error)
            Navigate("/login");
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>

            {/* <Header /> */}
            <Find />
            <Bidang />
            <Beasiswa />
            <Footer />
        </div>
    );
}

export default BerandaPage; 
