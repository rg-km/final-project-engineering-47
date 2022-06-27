import React from 'react';
import  Administrasi from "../../../icons/administrasi.svg";
import  Bahasa from "../../../icons/bahasa.svg";
import  Ekonomi from "../../../icons/ekonomi.svg";
import  Kesehatan from "../../../icons/kesehatan.svg";
import  Matematika from "../../../icons/matematika.svg";
import  Pendidikan from "../../../icons/pendidikan.svg";
import  Pertanian from "../../../icons/pertanian.svg";
import  Seni from "../../../icons/seni.svg";
import  Sosial from "../../../icons/sosial.svg";
import  Teknik from "../../../icons/teknik.svg";
import { Image, Stack, GridItem, Container, Link, Box, Heading, SimpleGrid, useColorModeValue, Center, } from '@chakra-ui/react';

const Bidang = () => {
    const property = [
    {
        imageUrl: Administrasi
    },
    {
        imageUrl: Bahasa
    },
    {
        imageUrl: Ekonomi
    },
    {
        imageUrl: Kesehatan
    },
    {
        imageUrl: Matematika
    },
    {
        imageUrl: Pendidikan
    },
    {
        imageUrl: Pertanian
    },
    {
        imageUrl: Seni
    },
    {
        imageUrl: Sosial
    },
    {
        imageUrl: Teknik
    },
];

return (
    <Box
            bg={useColorModeValue('white')}
            


        >
            <Container as={Stack} maxW={'8xl'} py={10} >
                <Center>
                    <Heading size="lg" mb={10}>Beasiswa</Heading>

                </Center>

                <SimpleGrid
                    templateColumns={{ sm: '1fr', md: '2fr 2fr 2fr 2fr 2fr' }}
                    spacing={8} >
                    {property.map((item, index) => (
                        <Center>
                            <GridItem>
                                <Heading size="lg" fontStyle="italic" fontWeight="normal" align="center" >{item.title}</Heading>
                                <Link _hover={"semi-bold"} ><Image filter="auto" brightness="100%" borderRadius={10} src={item.imageUrl} h="300px" /></Link>

                            </GridItem>
                        </Center>
                    ))}
                </SimpleGrid>

            </Container>
        </Box >

    );

}
export default Bidang;