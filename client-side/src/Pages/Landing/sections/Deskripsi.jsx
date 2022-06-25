import React from 'react';
import bgDark from '../../../Images/bgDark.png';
import { Box, Stack, Text, Container, useColorModeValue, Image, Heading, } from '@chakra-ui/react';
const Deskripsi = () => {
    return (
        <Box
            bg={useColorModeValue('#01949A')}
            color={useColorModeValue('black')}

            backgroundSize="cover">

            <Container as={Stack} maxW={'6xl'} py={10} color="white">


                <Text mb={100} mt={10} textAlign="left"  >
                    <Heading fontSize="24px">Sebagai Wadah Penyedia Informasi Beasiswa Nasional Untuk Anak Bangsa</Heading>
                    <br />
                    <strong>BigDream</strong> siap untuk menjadi mitra dalam mewujudkan mimpimu untuk <br />
                    masuk dalam dunia perkuliahan di Indonesia dengan mudah dan tanpa perlu.<br />
                    memikirkan biaya. Dengan adanya BigDream diharapkan dapat mempermudah<br />
                    akses bagi pelajar dan mahasiwa menuju ke perguruan tinggi yang mereka <br />
                    inginkan dengan adanya jaminan biaya tanggungan dari kampus itu sendiri.
                </Text>

            </Container>
            
        </Box >
        
    );
    
}

export default Deskripsi;
