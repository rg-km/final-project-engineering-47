import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Alert,
    AlertIcon,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    Center,
    InputGroup,
    InputLeftElement,
    Image,
    Button,
    useDisclosure,
    VStack
} from '@chakra-ui/react';
import user from '../Images/user.png';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import LandingPage from './Landing/LandingPage';
import axios from 'axios';
import usernamed from "../Images/username.png";
import swal from 'sweetalert2';
import jwt_decode from 'jwt-decode'
const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [success, setSuccess] = useState('')

    const Navigate = useNavigate();
    const Login = async (e) => {
        // alert('halo');
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/api/login`, {
                username: username,
                password: password
            });
            localStorage.setItem('token', response.data.token)
            const decode = jwt_decode(localStorage.getItem("token"));
            // setTimeout(() => {
            if (decode.Role === 'camp') {
                Navigate("/form-beasiswa");
            }
            if (decode.Role === 'admin') {
                Navigate("/dashboard")
            }
            if (decode.Role === 'user') {
                Navigate("/beranda");
            }
            // }, 3000);

            // setSuccess(swal.fire({
            //     position: 'top-center',
            //     icon: 'success',
            //     title: 'Berhasil Login',
            //     showConfirmButton: false,
            //     timer: 1500
            // }));
            // Navigate("/dashboard");
            console.log('sukses');
        } catch (err) {
            Navigate("/login");
            // console.log(err.response.data.error);
            setTimeout(() => {
                setMsg('')
            }, 2000)
            setMsg(<Alert status='error' mb={3}>
                <AlertIcon />
                {err.response.data.error}
            </Alert>);
        }
    }
    return (
        <div>
            <LandingPage />
            <Modal isOpen={true} onClose={() => { Navigate("/") }}>
                <ModalOverlay />
                <ModalContent borderRadius={30}>
                    <ModalHeader >
                        <Center>
                            <Image width='75px' src={user} mt={10} />
                        </Center>
                    </ModalHeader>
                    {success}
                    <ModalCloseButton />

                    <form onSubmit={Login} >
                        <VStack>
                            <ModalBody width='350px' justifyContent='center'>
                                {msg}
                                <FormControl>
                                    <InputGroup mb={5}>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={< Image color='black' src={usernamed} width='20px' />}
                                        />
                                        <Input id='username' type='username' onChange={(e) => { setUsername(e.target.value) }} variant='flushed' placeholder='Username' isRequired />
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
                                    <Center>
                                        <Button width={123} type='submit' mt={10} borderRadius={30} bg="#01949A" color='white' _hover="">Log In</Button>
                                    </Center>

                                    <Text align="center">Or</Text>

                                    <Text align="center" mb={10}><Link to="/register">Sign Up</Link></Text>
                                </FormControl>

                            </ModalBody>
                        </VStack>
                    </form>
                </ModalContent>
            </Modal>
        //     </div>

        // </div >
    );
}

export default Login;
