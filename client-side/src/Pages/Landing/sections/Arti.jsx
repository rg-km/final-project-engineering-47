import React from 'react';
import Jumbo from '../../../Images/Jumbo.jpg';
import bg from '../../../Images/Arti.jpg';
import { Box, Center, Heading, Stack, useColorModeValue, Container, Text } from '@chakra-ui/react';
const Arti = () => {
    return (
        <Box
            bg={useColorModeValue('white')}
            color={useColorModeValue('black')}
            backgroundImage={bg}
            backgroundSize="cover"
            filter={"auto"} brightness="80%"

        >
            <Container as={Stack} maxW={'6xl'} py={10}  >
                <Center>
                    <Text textAlign="center" color="white" mb={150} mt={150}>
                        <strong>BigDream</strong> merupakan platform penyedia informasi, khususnya seputar informasi<br />
                        beasiswa tingkat nasional yang di sediakan oleh beberapa pihak kampus di Indonesia.<br />
                        Dengan <strong>BigDream</strong> anda siap memulai impian anda menjadi sebuah kenyataan.

                    </Text>

                </Center>


            </Container>
        </Box >
    );
}

export default Arti;
