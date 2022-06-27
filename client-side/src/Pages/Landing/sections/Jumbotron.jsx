import React from 'react';
import { Flex, Image, Text, Button, Link, HStack, } from '@chakra-ui/react';
import Jumbo from "../../../Images/Logo.png";
import "./Jumbo.css";
import { useNavigate } from 'react-router-dom';

const Jumbotron = () => {

    const Navigate = useNavigate();
    const handleLogin = () => {
        Navigate("/login");
    }
    return (

        <Flex justifyContent="center" >
            <div className="div">
                <Flex px="100px" py="10px" width="full" bg="transparent" alignItems="flex-end" justifyContent="space-between" position="-webkit-sticky">
                    <Flex alignItems="flex-start">

                    </Flex>
                    <HStack spacing={10} >
                        <Link fontWeight={"bold"} color={"white"}>Programs</Link>
                        <Link fontWeight={"bold"} color={"white"}>About</Link>
                        <Link onClick={() => { Navigate("/register-camp") }} fontWeight={"bold"} color={"white"}>Camp</Link>
                        <Button onClick={handleLogin} bgColor="#DB1F48" color={"white"} borderRadius={30} w={100} h={8} >Login</Button>


                    </HStack>
                </Flex >
            </div >

            <Image src={Jumbo} position='absolute' width="300px" mt="150px" />
            <Text position="absolute" mt="300px" color="white" fontFamily="sans-serif" fontStyle="italic" fontSize="20px" fontWeight="bold">Make Your Dream Come True</Text>
        </Flex >
    );
}

export default Jumbotron;
