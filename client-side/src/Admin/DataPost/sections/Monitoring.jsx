import React from 'react';
import { Box, LinkBox, Center, GridItem, LinkOverlay, Stack, SimpleGrid, Button, Text, Container, useColorModeValue, Image, Heading, } from '@chakra-ui/react';
const Monitoring = () => {
    return (

        <Box
            bg={useColorModeValue('white')}



        >
            <Container as={Stack} maxW={'8xl'} py={10} >
                <Center>
                    <Heading size="lg" mb={10}>Data Postingan</Heading>

                </Center>

                <SimpleGrid
                    templateColumns={{ sm: '1fr', md: '2fr 2fr 2fr 2fr 2fr' }}
                    spacing={8} >
                    <Center>
                        <GridItem>
                            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                                    13 days ago
                                </Box>
                                <Heading size='md' my='2'>
                                    <LinkOverlay href='#'>
                                        New Year, New Beginnings: Smashing Workshops & Audits
                                    </LinkOverlay>
                                </Heading>
                                <Text mb='3'>
                                    Catch up on what’s been cookin’ at Smashing and explore some of the most
                                    popular community resources.
                                </Text>
                                <Box as='a' color='teal.400' href='#' fontWeight='bold'>
                                    Some inner link
                                </Box>
                            </LinkBox>
                        </GridItem>
                    </Center>
                </SimpleGrid>

            </Container>
        </Box >
    )
}
export default Monitoring;