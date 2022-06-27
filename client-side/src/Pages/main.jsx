import React from 'react';


import Signup from './Signup';

import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <h1>Ini Home</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Sign Up</Link>
                </li>
            </ul>
            <Button colorScheme='blue' borderRadius={30} mb={5} mt={5}>
                Sign Up
            </Button>


        </div>
    );
}

export default Main;
