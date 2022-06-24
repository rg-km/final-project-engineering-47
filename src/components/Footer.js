import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {

  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

function Footer() {
  
  return (
    <Box
      bg={useColorModeValue('#004369')}
      color={useColorModeValue('white')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>BigDream Corporation</ListHeader>
            <Link href={'#'}>Tentang BigDream</Link>
            <Link href={'#'}>Hak Kekayaan Intelektual</Link>
            <Link href={'#'}>Karir</Link>
            <Link href={'#'}>BigDream Partners</Link>
            <Link href={'#'}>Mitra Blog</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Bantuan dan Panduan</ListHeader>
            <Link href={'#'}>BigDream Care</Link>
            <Link href={'#'}>Syarat dan Ketentuan</Link>
            <Link href={'#'}>Kebijakan Privasi</Link>
            <Link href={'#'}>Mitra</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Hubungi Kami</ListHeader>
            <Link href={'#'}>021-0411 874 2</Link>
            <Link href={'#'}>halo@bigdream.com</Link>
            <Link href={'#'}>www.bigdream.com</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer;
