import React from "react";
import { Box, Center, Flex, Spacer, Image, Heading, Text, Button, Link, Menu, MenuButton, MenuItem, MenuList, HStack, } from '@chakra-ui/react';
import Logo from "../../../Images/POLOSW.png";
import "./Find.css";
import { useNavigate } from 'react-router-dom';
const Find = () => {
    const HeadingTitle = {
        position: 'flex',
        textAlign: 'center',
        color: '#FFFF',
        padding: '10px',
        fontSize: '100px',
        marginTop: '200px'
    }
    return (
        <Flex justifyContent="center">
            <div className="div1">
                
                <Flex px="100px" py="10px" width="full" alignItems="flex-end" justifyContent="space-between" position="-webkit-sticky">
                    <Flex alignItems="flex-start"></Flex>
                    <Image className="Image" src={Logo} 
                            position='absolute' 
                            width="150px"
                            float=""
                            mb="-40px"
                            mr="30px"/>
                    <HStack spacing={10}>
                        <a className="a">Program</a>
                        <a className="a">About</a>
                        <a className="a">Notifications</a>
                    </HStack>
                </Flex>
                <Center>
                <Heading as='h1' size='4xl' color='white' align="center" mt='50px' >Kesuksesan Dimulai Dari<br></br>Mimpi Yang Besar</Heading>
                <Button 
                position='absolute' 
                bgColor="#DB1F48" 
                color={"white"} 
                borderRadius="20px" 
                fontSize="30px" 
                w="300px"
                mt="400px" 
                h="80px" >Cari Beasiswa</Button>
                </Center>
                
            </div>
           
        </Flex>

    );
}
export default Find;