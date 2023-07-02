import React, { useState } from 'react'
import axios from 'axios'


import { useNavigate, Link } from 'react-router-dom';
import { failureToast } from '../Service/toaster';

const Register = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        password: '',
        email: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:3001/api/login', { ...form })
            console.log(data.data.token)
            if (data.data.success) {
                // toast("login Succesful")
                localStorage.setItem("token", data.data.token)
                setTimeout(() => {
                    navigate("/dashboard")
                }, 2000);
            }
        } catch (error) {
            console.log(error)
          failureToast(error.response.data.message)

        }

    }
    return (
        <main className="box">
           
          
            <h2>Login</h2>
            <form>
                <div className="inputBox">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="type your lastName" value={form.email} onChange={handleChange} required />
                </div>
                <div className="inputBox">
                    <label htmlFor="userPassword">Password</label>
                    <input type="password" name="password" id="userPassword" placeholder="type your password" value={form.password} onChange={handleChange} required />
                </div>
                <div>
                    <button onClick={handleSubmit} type="submit" style={{ float: 'left' }}>Register</button>
                </div>
                <div>
                    <Link to="/register">Not a user? Register Here</Link>
                </div>
            </form>
        </main>




    )
}

export default Register