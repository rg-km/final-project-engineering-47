import React from "react";
import user from '../Images/user.png';
import { useState, useEffect } from 'react';
import usernamed from "../Images/username.png";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    Center,
    InputGroup,
    InputLeftElement,
    Image,
    Alert,
    AlertIcon
} from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import swal from "sweetalert2";
const Signup = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [username, setUsername] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const Navigate = useNavigate();




    const register = async (e) => {
        e.preventDefault();
        if (password !== confPassword) {
            setError(<Alert status='error' mb={3}>
                <AlertIcon />
                Password does not match
            </Alert>);
        }
        else {
            try {
                await axios.post(`http://localhost:8080/api/register`, {
                    name: name,
                    username: username,
                    email: email,
                    password: password
                }).then((response) => {
                    setMsg(response.data.message);

                });
                //ganti pake swall /sweetalert
                setSuccess(setError(<Alert status='error' fontSize="sm">
                    <AlertIcon />
                    {msg}
                </Alert>));
                Navigate("/login");
                // console.log('sukses');
            } catch (err) {
                setError(<Alert status='error' fontSize="sm">
                    <AlertIcon />
                    {err.response.data.error}
                </Alert>);

            }
        }

    }


    return (
        <div>
            <div className="container">
                <Modal isOpen={onOpen} onClose={() => { Navigate("/login"); }}>
                    <ModalOverlay />
                    <ModalContent borderRadius={30}>
                        <ModalHeader >
                            <Center>
                                <Image width='75px' src={user} />
                            </Center>
                        </ModalHeader>

                        <ModalCloseButton />
                        <form onSubmit={register} >
                            <VStack>
                                <ModalBody width='350px' justifyContent='center'>

                                    <FormControl>
                                        <InputGroup mb={5}>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={< Image src={usernamed} width='20px' />}
                                            />

                                            <Input id='name' onChange={(e) => { setName(e.target.value) }} type='username' value={name} variant='flushed' placeholder='Name' isRequired />
                                        </InputGroup>

                                    </FormControl>
                                    <FormControl >
                                        <InputGroup mb={5}>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={< Image src={usernamed} width='20px' />}
                                            />
                                            <Input onChange={(e) => { setUsername(e.target.value) }} value={username} id='username' type='username' variant='flushed' placeholder='Username' isRequired />

                                        </InputGroup>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup mb={5}>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={< EmailIcon color='black' />}
                                            />
                                            <Input id='email' type='email' onChange={(e) => { setEmail(e.target.value) }} variant='flushed' placeholder='Email' isRequired />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup mb={5}>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={< LockIcon color='black' />}
                                            />
                                            <Input id='password' type='password' onChange={(e) => { setPassword(e.target.value) }} variant='flushed' placeholder='Password' isRequired />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup mb={5}>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={< LockIcon color='black' />}
                                            />
                                            <Input id='kpassword' type='password' onChange={(e) => { setConfPassword(e.target.value) }} variant='flushed' placeholder='Konfirmasi Password' isRequired />
                                        </InputGroup>
                                    </FormControl>

                                    {msg}{error}
                                    <FormControl>
                                        <Center>
                                            <Button type='submit' mt={10} mb={10} borderRadius={30} bg="#01949A" color='white' _hover=''>Sign Up</Button>
                                        </Center>
                                    </FormControl>

                                </ModalBody>
                            </VStack>
                        </form>
                    </ModalContent>
                </Modal>
            </div>

        </div >

    );
}

export default Signup;