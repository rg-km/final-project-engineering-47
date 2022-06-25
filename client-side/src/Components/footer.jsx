import { Flex, Heading, HStack, Link, Button, Image, VStack, ListItem, UnorderedList, Icon, Box, List, ListHeader, SimpleGrid, useColorModeValue, Container } from '@chakra-ui/react';
import React from 'react';
import Logo from '../Images/Logo.png';
import { BsInstagram, BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';
import { Stack } from 'react-bootstrap';
const Footer = () => {
    return (
        // <Flex px="30px" py="30px" width="full" bg="#004369" color="white" justifyContent="space-between" alignItems="flex-start" >


        <Box
            bg={useColorModeValue('#004369')}
            color={useColorModeValue('white')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={4}>
                        <Image width="300px" src={Logo} />

                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading size="sm">BigDream Corporation</Heading>
                        <br />
                        <Link href={'#'}>Tentang BigDream</Link>
                        <Link href={'#'}>Hak Kekayaan Intelektual</Link>
                        <Link href={'#'}>Karir</Link>
                        <Link href={'#'}>BigDream Partners</Link>
                        <Link href={'#'}>Mitra Blog</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading size="sm">Bantuan dan Panduan</Heading>
                        <br />
                        <Link href={'#'}>BigDream Care</Link>
                        <Link href={'#'}>Syarat dan Ketentuan</Link>
                        <Link href={'#'}>Kebijakan Privasi</Link>
                        <Link href={'#'}>Mitra</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading size="sm">Follow US</Heading>
                        <br />
                        <HStack>
                            <BsInstagram />
                            <Link><BsYoutube /></Link>
                            <Link><BsTwitter /></Link>
                            <Link><BsFacebook /></Link>
                        </HStack>
                    </Stack>
                    <Stack align={'flex-start'} direction="row">
                        <Heading size="sm">Hubungi Kami</Heading>
                        <br />
                        <Link href={'#'}>021-0411 874 2</Link>
                        <Link href={'#'}>halo@bigdream.com</Link>
                        <Link href={'#'}>www.bigdream.com</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>




        // </Flex >
    );
}

export default Footer;
