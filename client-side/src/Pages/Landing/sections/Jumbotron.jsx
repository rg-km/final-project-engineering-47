import React from 'react';
import { Box, Center, Flex, Image, Text, Button, Link, Menu, MenuButton, MenuItem, MenuList, HStack, } from '@chakra-ui/react';
import Jumbo from "../../../Images/Logo.png";
import username from '../../../Images/username.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import "./Jumbo.css";
import { useNavigate } from 'react-router-dom';
const Jumbotron = () => {
    // const basicBoxStyles = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     boxSize: '250px',
    //     color: 'white',
    //     textShadow: '0 0 20px black',
    //     fontWeight: 'bold',
    //     fontSize: '20px',
    //     px: 4,
    //     backgroundImage: ,
    // }
    const Navigate = useNavigate();
    const handleLogin = () => {
        Navigate("/register");
    }
    return (

        <Flex
            // flexWrap='wrap'
            // spacing='24px'
            // gap='16px'
            // justifyContent='space-evenly'
            justifyContent="center"
        >
            {/* adding filter property to the element */}
            {/* <Box bgImage={Jumbo}>

                <Image src={Jumbo} width="full" />
            </Box> */}

            <div className="div">
                <Flex px="100px" py="10px" width="full" bg="transparent" alignItems="flex-end" justifyContent="space-between" position="-webkit-sticky">
                    <Flex alignItems="flex-start">

                    </Flex>
                    <HStack spacing={10} >
                        <Link fontWeight={"bold"} color={"white"}>Programs</Link>
                        <Link fontWeight={"bold"} color={"white"}>About</Link>
                        <Button onClick={handleLogin} bgColor="#DB1F48" color={"white"} borderRadius={30} w={100} h={8} >Login</Button>

                    </HStack>
                </Flex >
            </div >

            <Image src={Jumbo} position='absolute' width="300px" mt="150px" />
            <Text position="absolute" mt="300px" color="white" fontFamily="sans-serif" fontStyle="italic" fontSize="20px" fontWeight="bold">Make Your Dream Come True</Text>





            {/* adding blur property to the element */}

        </Flex >
    );
}

export default Jumbotron;
