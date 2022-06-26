import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Registrasi = () => {

    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = async (e) =>{
        e.preventDefault();
        
        axios.post(`http://localhost:8080/api/register`, { 
            name : name,
            username :username,
            email : email,
            password : password
        }).then(res => {
          console.log(res);
          console.log(res.data);
        })
      
    }

    return (
        <div>
            <form onSubmit={register}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'> sign Up</button>
            </form>
        </div>
    );
}

export default Registrasi;
