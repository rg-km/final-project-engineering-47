import React, { useEffect } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { Flex } from '@chakra-ui/react';
import SearchBar from "../Components/SearchBar";
import LeftDP from "../Components/LeftDP";
import { useNavigate } from 'react-router-dom'
import axios from "axios";




function DaftarProgram() {
    const Navigate = useNavigate()
    const fetchData = async () => {
        const token = localStorage.getItem("token");
        try {

            await axios.get(`http://localhost:8080/api/user/dashboard`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (e) {
            Navigate("/login");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            <Header />
            <Flex
                w={'full'}
                h={'410px'}
                backgroundImage={
                    "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <SearchBar />
            </Flex>

            <Flex h={"100vh"} mt={"1em"} mb={"1em"}>
                <LeftDP />
                {/* <RightDP /> */}
            </Flex>

            <Footer />
        </>
    )
}

export default DaftarProgram;
