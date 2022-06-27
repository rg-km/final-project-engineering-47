import { Alert, AlertIcon, Box, Flex, Heading, Input, InputGroup, InputLeftElement, Textarea, Text, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { MdTitle } from 'react-icons/md'
import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import axios from 'axios'
import swal from 'sweetalert2'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/footer'
import Header from '../Components/header'
function FormBeasiswa() {

    const Navigate = useNavigate()
    const [isi, setIsi] = useState('')
    const [judul, setJudul] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')
    const createBeasiswa = async () => {
        try {
            await axios.post(`http://localhost:8080/api/camp/dashboard/input`,
                {
                    judul: judul,
                    isi: isi,
                    category: category,
                }, {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                },
            });
            swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Berhasil Post Beasiswa',
                showConfirmButton: false,
                timer: 1500
            });
            setIsi('')
            setJudul('')
            setCategory('')
        } catch (e) {
            console.log(e)
            setTimeout(() => {
                setError('')
            }, 2000);
            setError(<Alert status='error' fontSize="sm">
                <AlertIcon />
                Gagal Post Beasiswa
            </Alert>);
        }

    }
    const kembali = () => {
        try {
            localStorage.removeItem('token');
            Navigate("/");
        } catch (error) {
            console.log(error);
        }
    }




    const fetchData = async () => {
        const token = localStorage.getItem("token");
        const decode = jwt_decode(token);
        try {

            await axios.get(`http://localhost:8080/api/user/dashboard`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(response.data);
            // console.log(role)
            // console.log(role)
            if (decode.Role !== 'camp') {
                Navigate("/");
                console.log("anda bukan camp")
                swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Anda bukan camp',
                    showConfirmButton: true,
                    // timer: 1500
                });
            }

        } catch (e) {
            // console.log(e.response.data.error)
            console.log(e)
            Navigate("/login");
        }

    }
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

    useEffect(() => {
        validasi()
        fetchData();
        // chekcCamp()
    }, []);


    return (
        <>
            <Header />
            <Flex align={'center'} direction='column' mt={'3em'} mb={'5em'}>
                <Box borderWidth={'2px'} p='2em'>
                    <Heading>Form Pengisian Beasiswa</Heading>
                    {error}
                    <Box w={'full'} mt='2em'>
                        <InputGroup>
                            <InputLeftElement pointerEvents={'none'} children={<MdTitle color='gray' />} />
                            <Input placeholder='Judul anda disini' value={judul} onChange={(e) => setJudul(e.target.value)} />
                        </InputGroup>
                    </Box>

                    <FormControl mt={'1em'}>
                        <FormLabel htmlFor='kategori'>Kategori</FormLabel>
                        <Select id='kategori' placeholder='Pilih Kategori' value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Science</option>
                            <option>Education</option>
                            <option>Culture Knowledge</option>
                            <option>Finance</option>
                            <option>Tech</option>
                        </Select>
                    </FormControl>

                    <Text mt='1em' mb='8px'>Deskripsi:</Text>
                    <Textarea
                        value={isi}
                        onChange={(e) => setIsi(e.target.value)}
                        placeholder='Ketik Disini'
                        size='sm'
                    />
                    <Flex justify={'right'}>
                        <Button onClick={createBeasiswa} colorScheme={'red'} variant={'solid'} w={'fit-content'} mt='1em'>Buat</Button>
                        <Button onClick={kembali} colorScheme={'red'} variant={'outline'} w={'fit-content'} mt='1em' ml={2}>Kembali</Button>
                    </Flex>
                </Box>
            </Flex>
            <Footer />
        </>
    )
}


export default FormBeasiswa