import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer'
import swal from 'sweetalert2';
// import {useNavigate} from 'react-router-dom'
import {
    Stat,
    StatLabel,
    StatNumber,
    Flex,
    Link,
    StatGroup,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Heading,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Box,
    Divider
} from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Container } from 'react-bootstrap';


const Dashboard = () => {
    const Navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    // const [token, setToken] = useState('');
    const [user, setUser] = useState([]);
    const [list, setList] = useState([]);
    const [display, setDisplay] = useState('')

    const validasi = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`http://localhost:8080/api/user/dashboard`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (e) {
            console.log(e.response.data.error)
            Navigate("/login");
        }

    }

    const fetchData = async () => {
        // e.preventDefault()
        const token = localStorage.getItem("token");

        var decode = jwt_decode(token);
        // console.log(token.name);
        // alert(token);
        setUsername(decode.Username);
        setRole(decode.Role)
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/list`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            setUser(response.data)
            // console.log(decode)

        } catch (e) {
            console.log(e.response.data.error)
            swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Anda bukan Admin',
                showConfirmButton: true,
                // timer: 1500
            });
            Navigate("/");
        }

    }

    const listBeasiswa = async () => {
        // e.preventDefault()
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`http://localhost:8080/api/user/dashboard`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            setList(response.data.article)
        } catch (e) {
            console.log(e.response.data)
            swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Anda bukan Admin',
                showConfirmButton: true,
                // timer: 1500
            });
            Navigate("/")
        }
    }

    const listUsers = () => {
        setDisplay(
            <>
                <TableContainer align={'center'}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Username</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>

                        {/* <TableCaption>List User</TableCaption> */}
                        {user.map((item, index) => (


                            < Tbody >
                                <Tr>
                                    <Td>{item.ID}</Td>
                                    <Td>{item.Name}</Td>
                                    <Td>{item.Username}</Td>
                                    <Td>{item.Email}</Td>
                                </Tr>
                            </Tbody>

                        ))}
                    </Table>
                </TableContainer >
            </>
        )
    }
    const listArticle = () => {
        setDisplay(
            <>
                <Flex align={'center'} spacing={20}>
                    <TableContainer align={'center'}>
                        <Table variant='simple' width={'full'}>

                            <Thead >
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Judul</Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th>Category</Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th>Link</Th>
                                </Tr>
                            </Thead>

                            {/* <TableCaption>List User</TableCaption> */}
                            {list.map((item, index) => (


                                < Tbody >
                                    <Tr>
                                        <Td>{index + 1}</Td>
                                        <Td mr={20}>{item.judul}</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        {/* <Td>{item.isi}</Td> */}
                                        <Td ml="15px">{item.category}</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td>
                                            <Link onClick={() => { Navigate("/daftar-program") }}> Visit </Link>
                                        </Td>

                                    </Tr>
                                </Tbody>

                            ))}
                        </Table>
                    </TableContainer >
                </Flex>
            </>
        )
    }

    useEffect(() => {
        // validasi()
        fetchData();
        listBeasiswa()

    }, []);
    // useEffect(() => {
    // }, []);


    return (
        <>
            <Header />
            <Container>


                <Heading mt={5}>Welcome : {username} </Heading>
                <Heading>Role : {role}</Heading>
                <Box mb={40}>
                    <StatGroup mt={20} >
                        <Stat >
                            <Box
                                bgColor={'AppWorkspace'}
                                mt={'1em'}
                                ml={5}
                                maxW='sm'
                                border='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                lineHeight={'20px'}
                                p={'5'}>
                                <Flex direction={'row'} >
                                    <Box
                                        fontWeight={'semibold'}
                                        ml='1em'>
                                        <Box fontWeight={'light'}>
                                            <StatLabel mb={3}>Jumlah Akun</StatLabel>
                                        </Box>
                                        <Box
                                            mb={3}
                                            color={'gray.500'}
                                            fontWeight={'light'} >
                                            <StatNumber>{user.length}</StatNumber>
                                        </Box>

                                        <Flex align={'center'}>
                                            {/* <Image src={Medali} w='15px' /> */}
                                            <Box
                                                fontWeight={'semibold'}>
                                                <Link onClick={listUsers}>
                                                    Tampilkan
                                                </Link>
                                            </Box>

                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>
                        </Stat>

                        <Stat>


                            <Box
                                mt={'1em'}
                                ml={5}
                                maxW='sm'
                                border='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                lineHeight={'20px'}
                                p={'5'}>
                                <Flex direction={'row'} >
                                    <Box
                                        fontWeight={'semibold'}
                                        ml='1em'>
                                        <Box fontWeight={'light'} mb={3}>
                                            <StatLabel>Jumlah Beasiswa</StatLabel>
                                        </Box>
                                        <Box
                                            color={'gray.500'}
                                            fontWeight={'light'} mb={3}>
                                            <StatNumber>{list.length}</StatNumber>
                                        </Box>

                                        <Flex align={'center'}>
                                            {/* <Image src={Medali} w='15px' /> */}
                                            <Box
                                                fontWeight={'semibold'}>
                                                <Link onClick={listArticle}>
                                                    Tampilkan
                                                </Link>
                                            </Box>

                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>

                        </Stat>
                    </StatGroup>

                    <Divider orientation='horizontal' mt={10} />
                    {display}
                </Box>
            </Container>
            <footer>
                <Footer />
            </footer>

        </>

    );
}

export default Dashboard;
