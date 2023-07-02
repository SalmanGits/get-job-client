import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    firstName:'',
    lastName:'',
    password:'',
    email:'',
  })
  const handleChange = (e)=>{
    const { name, value } = e.target;
  setForm((prevState) => ({
    ...prevState,
    [name]: value,
  }));

  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(form)
    try {
      const data = await axios.post('http://localhost:3001/api/register',{...form,role:'jobseeker'})
      console.log(data)
      if(data.data.success) {
        toast("Registration Succesful")
        setTimeout(() => {
          navigate("/login") 
      }, 2000);
       
      }
    } catch (error) {
      console.log(error)
      toast(error.response.data.message)
    
    }

  }
  return (
<main className="box">
<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>


  <h2>Register</h2>
  <form>
    <div className="inputBox">
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" placeholder="type your firstName" value={form.firstName} onChange={handleChange} required  />
    </div>
    <div className="inputBox">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" placeholder="type your lastName" value={form.lastName} onChange={handleChange} required />
    </div>
    <div className="inputBox">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="type your lastName" value={form.email} onChange={handleChange} required />
    </div>
    <div className="inputBox">
      <label htmlFor="userPassword">Password</label>
      <input type="password" name="password" id="userPassword" placeholder="type your password" value={form.password} onChange={handleChange}  required />
    </div>
    <div>
      <button onClick={handleSubmit} type="submit" style={{float: 'left'}}>Register</button>
    </div>
    <div>
                    <Link to="/login">already a user? Login Here</Link>
                </div>
  </form>
</main>




  )
}

export default Register