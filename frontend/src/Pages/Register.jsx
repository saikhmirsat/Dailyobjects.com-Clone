import React from 'react'
import '../Styles/Register.css'
import { Heading, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'

export default function Register() {
    const [firstname, setFname] = useState("")
    const [lastname, setLname] = useState("")
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const navigate = useNavigate()

    const handleRegister = () => {
        const payload = {
            firstname, lastname, dob, password, email, number
        }
        console.log(payload)
        try {
            console.log(payload)
            fetch(`https://odd-pear-scarab-sock.cyclic.app/users/register`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    alert("Register Successful")
                    console.log(res)
                })
                .catch((err) => console.log(err))
        } catch (err) {
            console.log(err)
            alert("Something Wrong")
        }

    }

    const LoginFunc = () => {
        navigate('/login')
    }

    return (
        <div id='register-main-cont'>
            <img src={logo} alt="" />
            <div className='register-div'>
                <Heading as='h3'>Register</Heading>
                <Input focusBorderColor='#20a87e' type="text" placeholder='First name' onChange={(e) => setFname(e.target.value)} />
                <Input focusBorderColor='#20a87e' type="text" placeholder='Last name' onChange={(e) => setLname(e.target.value)} />
                <Input focusBorderColor='#20a87e' type="text" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                <Input focusBorderColor='#20a87e' type="date" value={dob} placeholder='Date of Birth' onChange={(e) => setDob(e.target.value)} />
                <Input focusBorderColor='#20a87e' type="Number" placeholder='Mobile number' onChange={(e) => setNumber(e.target.value)} />
                <Input focusBorderColor='#20a87e' type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleRegister}>Register</Button>
                <p>or</p>
                <Button onClick={LoginFunc}>LogIn</Button>
            </div>
        </div>
    )
}
