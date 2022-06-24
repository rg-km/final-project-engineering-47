import React from 'react'
import { Flex, VStack, Heading, Stack, Box, Image } from '@chakra-ui/react'
import Logo from '../assets/img/LogoUNM.png'
import Medali from '../assets/img/Medali.png'

function LeftDP() {
  return (
    <>
    <Flex w={"40%"} borderWidth={"1.5px"} overflow='auto'>
      <VStack align={'left'}>
        <Heading 
        textAlign={'left'}
        size={"md"} 
        mt={"1em"}
        ml={"1em"}
        color={"gray.500"}>
        Total Beasiswa 
        </Heading>
        <Stack direction={'column'}>
          <Box 
            mt={'1em'}
            ml={5}
            maxW='sm' 
            border='1px' 
            borderRadius='lg' 
            overflow='hidden'
            lineHeight={'20px'}
            p={'5'}>
              <Flex direction={'row'}>
                <Image src={Logo} w='50px' h='50px'/>
                <Box 
                  fontWeight={'semibold'}
                  ml='1em'
                  >
                  Teknik Informatika S1
                <Box 
                  fontWeight={'light'}
                  >
                  Embed System, Jaringan & Cyber
                  Kota Makassar
                  Sulawesi Selatan
                </Box>
                <Box 
                  color={'gray.500'}
                  fontWeight={'light'}
                  >
                  145 SKS
                </Box>

              <Flex align={'center'}>
                <Image src={Medali} w='15px'/>
                <Box 
                  fontWeight={'semibold'}
                  ml='5px'>
                    Akreditasi A
                </Box>
              </Flex>
                  </Box>
              </Flex>
          </Box>
        </Stack>
        </VStack>
      </Flex>
    </>
  )
}

export default LeftDP