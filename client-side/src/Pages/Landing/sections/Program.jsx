import React from 'react';
import Beasiswa from "../../../Images/beasiswa.jpg";
import Sertifikasi from "../../../Images/Sertifikasi.jpg";
import Challenge from "../../../Images/Challenge.jpg";
import { Image, Stack, GridItem, Container, Link, Box, Heading, SimpleGrid, useColorModeValue, Center, } from '@chakra-ui/react';

const Program = () => {
    const property = [{
        imageUrl: Sertifikasi,
        title: 'Sertifikasi',
    },
    {
        imageUrl: Beasiswa,
        title: 'Beasiswa',
    },
    {
        imageUrl: Challenge,
        title: 'Challenge',
    }
    ];
    return (
        <Box
            bg={useColorModeValue('white')}
            color={useColorModeValue('black')}


        >
            <Container as={Stack} maxW={'6xl'} py={10} >
                <Center>
                    <Heading size="lg" mb={10}>Program</Heading>

                </Center>

                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr' }}
                    spacing={8} >
                    {property.map((item, index) => (
                        <Center>
                            <GridItem>
                                <Heading size="lg" fontStyle="italic" fontWeight="normal" align="center" >{item.title}</Heading>
                                <Link _hover={"semi-bold"} ><Image filter="auto" brightness="40%" borderRadius={20} src={item.imageUrl} h="300px" /></Link>

                            </GridItem>
                        </Center>
                    ))}
                </SimpleGrid>

            </Container>
        </Box >

    );
}

export default Program;
