import React from "react";
import { Box, Center, Flex, Spacer, MenuGroup, MenuDivider, Image, Heading, Text, Button, Link, IconButton, Menu, MenuButton, MenuItem, MenuList, HStack, } from '@chakra-ui/react';
import { RepeatIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Logo from "../../../Images/POLOSW.png";
import User from "../../../icons/user.svg"
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

    const Navigate = useNavigate();

    const logout = () => {

        try {
            localStorage.removeItem('token');
            Navigate("/login");
        } catch (error) {
            console.log(error);
        }
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
                        mr="30px" />
                    <HStack spacing={10}>
                        <a className="a">Program</a>
                        <a className="a">About</a>
                        <a className="a">Notifications</a>
                        <Menu>
                            <MenuButton as={Button} colorScheme='red'>
                                Profile
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Profile'>
                                    <MenuItem>My Account</MenuItem>
                                    <MenuItem onClick={() => { Navigate("/daftar-program") }}>Beasiswa </MenuItem>
                                    <MenuItem onClick={logout}> Keluar </MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>

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
                        h="80px" onClick={() => { Navigate("/daftar-program") }}>Cari Beasiswa</Button>
                </Center>

            </div>

        </Flex>

    );
}
export default Find;