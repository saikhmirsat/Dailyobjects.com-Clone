import React from 'react'
import '../Styles/Login.css'
import { Heading, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'

export default function Login() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const LoginFunc = () => {
        const payload = {
            email, password
        }
        try {
            console.log(payload)
            fetch(`https://odd-pear-scarab-sock.cyclic.app/users/login`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    localStorage.setItem("token", res.token)
                    console.log(res)
                    navigate('/')
                    alert("Login Successful")
                })
                .catch((err) => console.log(err))

        } catch (err) {
            console.log(err)
        }
    }

    const handleRegister = () => {
        navigate('/register')
    }
    return (
        <div id='login-main-cont'>
            <img src={logo} alt="" />
            <div className='login-div'>
                <Heading as='h3'>Login</Heading>

                <Input focusBorderColor='#20a87e' type="text" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />

                <Input focusBorderColor='#20a87e' type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={LoginFunc}>LogIn</Button>
                <p>or</p>
                <Button onClick={handleRegister}>Register</Button>
            </div>
        </div>
    )
}
