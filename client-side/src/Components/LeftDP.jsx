import React from 'react'
import { useState, useEffect } from 'react'
import { Flex, VStack, Heading, Stack, Box, Image, Link, Text, Button } from '@chakra-ui/react'
import Logo from '../Images/LogoList.png'
import Medali from '../Images/Medali.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import swal from 'sweetalert2'
// import { Link } from 'react-router-dom'
// import { Button } from 'bootstrap'

const LeftDP = () => {
    const length = [];
    const Navigate = useNavigate();
    const [beasiswa, setBeasiswa] = useState([]);
    const [deskripsi, setDeskripsi] = useState('');
    // const [token, setToken] = useState('');
    // const [id, setId] = useState('')
    // const token = localStorage.getItem("token")
    const coba = (index) => {

        setDeskripsi(
            <Flex w={"72%"} borderWidth={"1.5px"} ml={"1em"} direction='column' overflow={'auto'}>
                <Flex justify={'center'} mt='1.5em'>
                    <Image src={Logo} w='70px' h='70px' />
                </Flex>
                <Box
                    fontWeight={'semibold'}
                    fontSize='2xl'
                    ml='1em'
                    mt={'1.5em'}
                >
                    {beasiswa[index].judul}
                </Box>
                <Box
                    fontWeight={'lightbold'}
                    ml='1.6em'
                >
                    {beasiswa[index].category}
                </Box>


                <Heading fontSize={'md'} ml='1.6em' mt={'3em'}>Deskripsi:</Heading>
                <Text ml='1.6em' mt={'1em'}>
                    {beasiswa[index].isi}
                </Text>

                <Box align='center' mt='3em' >
                    <Button onClick={handleDaftar} borderRadius={50} colorScheme={'red'} mb={5}>Daftar</Button>
                </Box>


            </Flex>
        )
    }

    const handleDaftar = () => {
        const decode = jwt_decode(localStorage.getItem("token"))

        if (decode.Role !== 'user') {
            swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'Upsss!!!',
                text: `Anda adalah ${decode.Role}, tidak boleh daftar`,
                showConfirmButton: true,
                // timer: 1500
            });
        }
        else {
            Navigate("/berkas")
        }
    }
    const listBeasiswa = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/article`, {
            });
            setBeasiswa(response.data.article)
            // console.log(response.data)
        }
        catch (e) {
            console.log(e);
        }


    }
    useEffect(() => {
        listBeasiswa();

    }, []);


    return (
        <>
            <Flex w={"28%"} borderWidth={"1.5px"} overflow='auto'>
                <VStack align={'left'}>
                    <Heading
                        textAlign={'left'}
                        size={"md"}
                        mt={"1em"}
                        ml={"1em"}
                        color={"gray.500"}>
                        Total Beasiswa {beasiswa.length}
                    </Heading>

                    {beasiswa.map((item, index) => (

                        <Stack direction={'column'} >



                            <Box
                                mt={'1em'}
                                ml={5}
                                maxW='sm'
                                border='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                lineHeight={'20px'}
                                p={'5'}
                                onClick={() => { coba(index) }}>
                                <Flex direction={'row'} >
                                    <Image src={Logo} w='50px' h='50px' />
                                    <Box
                                        fontWeight={'semibold'}
                                        ml='1em'
                                    >
                                        {item.judul}
                                        <Box
                                            fontWeight={'light'}
                                        >
                                            {item.category}
                                        </Box>
                                        {/* <Box
                                            color={'gray.500'}
                                            fontWeight={'light'}
                                        >
                                            145 SKS
                                        </Box> */}

                                        <Flex align={'center'}>
                                            {/* <Image src={Medali} w='15px' /> */}
                                            <Box
                                                fontWeight={'semibold'}>
                                                <Link>
                                                    Selengkapnya
                                                </Link>
                                            </Box>

                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>

                        </Stack>
                    ))}
                    <br />
                </VStack>
            </Flex>

            {deskripsi}


        </>
    )
}

export default LeftDP