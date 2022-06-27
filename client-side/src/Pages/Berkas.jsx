import React, { useState, useEffect } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, Button, Flex, FormControl, Input, FormHelperText, FormLabel, VStack, Box, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import swal from 'sweetalert2';

const Berkas = () => {
    const [link, setLink] = useState('');
    const [essay, setEssay] = useState('');
    const [success, setSucces] = useState('');
    const [error, setError] = useState('')
    const Navigate = useNavigate()
    const fetchData = async () => {
        const token = localStorage.getItem("token")
        // console.log(token.name);
        // alert(token);
        try {
            const response = await axios.get(`http://localhost:8080/api/user/dashboard`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(response.data);

        } catch (e) {
            console.log(e.response.data.error)
            Navigate("/login");
        }

    }

    const handleSubmit = async (e) => {
        // const token = localStorage.getItem("token")
        // alert(token)
        e.preventDefault();
        try {

            await axios.post(`http://localhost:8080/api/user/apply`,
                {
                    berkas: link,
                    essay: essay
                }, {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                },
            }).then((res => {
                console.log(res)

                setSucces(swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Terkirim',
                    showConfirmButton: true,
                }));
                Navigate("/daftar-program")
            }));

        }
        catch (e) {
            setTimeout(() => {
                setError('')
            }, 2000);
            setError(<Alert status='error' mb={3}>
                <AlertIcon />
                Data Gagal Di Kirim
            </Alert>);
        }
    }


    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Header />
            <Flex justifyContent={"center"}>
                <VStack >
                    <Box
                        width={"fit-content"}
                        height={"70vh"}
                        mt={20}
                    >
                        <form onSubmit={handleSubmit}>
                            {success}{error}
                            <FormControl>
                                <FormLabel htmlFor='link'>Link Google Drive</FormLabel>
                                <Input id='link' type='link' isRequired onChange={(e) => { setLink(e.target.value) }} />
                                <FormHelperText>Jangan lupa memasukkan semua berkas sesuai persyaratan</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='essay'>Essay</FormLabel>
                                <Textarea isRequired onChange={(e) => { setEssay(e.target.value) }} />
                                <FormHelperText>Essay Anda</FormHelperText>
                            </FormControl>
                            <Button type='submit' mt={10} borderRadius={30} bg="#01949A" color='white' _hover=''>Submit</Button>

                        </form>
                    </Box>

                </VStack>
            </Flex>
            <Footer />
        </>
    );
}

export default Berkas;
