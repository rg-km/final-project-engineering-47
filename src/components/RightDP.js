import React from 'react'
import { Flex, Image, Box, Heading, Text, Button } from '@chakra-ui/react'
import Logo from '../assets/img/LogoUNM.png'


function RightDP() {
  return (
    <>
    <Flex w={"58%"} borderWidth={"1.5px"} ml={"1em"} direction='column' overflow={'auto'}>
        <Flex justify={'center'} mt='1.5em'>
            <Image src={Logo} w='70px' h='70px'/>
        </Flex>
            <Box 
                fontWeight={'semibold'}
                fontSize='2xl'
                ml='1em'
                mt={'1.5em'}
                >
                Teknik Informatika S1
            </Box>
            <Box 
                fontWeight={'lightbold'}
                ml='1.6em'
                >
                Embed System, Jaringan & Cyber
                Kota Makassar
                Sulawesi Selatan
            </Box>
            <Box 
                fontWeight={'lightbold'}
                ml='1.6em'
                >
                145 SKS
            </Box>

            <Heading fontSize={'md'} ml='1.6em' mt={'3em'}>Deskripsi:</Heading>
            <Text ml='1.6em' mt={'1em'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
            doloremque. Quaerat provident commodi consectetur veniam similique ad 
            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
            quasi aliquam eligendi, placeat qui corporis!
 
            </Text>

            <Box align='center' mt='3em'>
                <Button colorScheme={'red'} variant={'solid'} w={'fit-content'}>Daftar</Button>
          </Box>

      </Flex>
    </>
  )
}

export default RightDP