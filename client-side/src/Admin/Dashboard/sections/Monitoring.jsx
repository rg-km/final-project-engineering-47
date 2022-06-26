import React from "react";
import { Box, Center, SimpleGrid, Container, useColorModeValue, Stack, Grid, GridItem, Flex, Spacer, MenuGroup, MenuDivider, Image, Heading, Text, Button, Link, IconButton, Menu, MenuButton, MenuItem, MenuList, HStack, } from '@chakra-ui/react';
import { RepeatIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Kip from '../../../Images/kip.svg';
import Aperti from '../../../Images/aperti.svg';
import Besu from '../../../Images/besu.svg';
import Lpdp from '../../../Images/lpdp.svg';
import Pertamina from '../../../Images/pertamina.svg';
import Tanato from '../../../Images/tanato.svg';
const Monitoring = () => {
    return (
        <Box
            bg={useColorModeValue('#E5DDC8')}
            color={useColorModeValue('black')}
            backgroundSize="cover">
            <Center h='100px' ml='auto' mr='auto' color='black'>
                <Heading>Daftar Peserta</Heading>
            </Center>
        </Box >

    );
}
export default Monitoring;