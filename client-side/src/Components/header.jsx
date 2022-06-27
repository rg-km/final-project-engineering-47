import { Flex, Heading, HStack, Link, Button, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import Logo from '../Images/Logo.png';
import username from '../Images/username.png';
import { HamburgerIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Flex px="100px" py="10px" width="full" bg="#004369" alignItems="flex-end" justifyContent="space-between" position="-webkit-sticky">
            <Flex alignItems="flex-start">
                <Heading color="white"><Link ><Image src={Logo} width="80px" /></Link></Heading>
            </Flex>
            <HStack spacing={10} >
                <Link fontWeight={"bold"} color={"white"}>Programs</Link>
                <Link fontWeight={"bold"} color={"white"}>Notifications</Link>
                <Menu>
                    <MenuButton borderRadius={30} as={Button} bg="#01949A" leftIcon={<Image src={username} width="20px" />} rightIcon={<HamburgerIcon />}>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profil</MenuItem>
                        <MenuItem>Beasiswa</MenuItem>
                        <MenuItem>Keluar</MenuItem>

                    </MenuList>
                </Menu>
            </HStack>
        </Flex >
    );
}

export default Header;
