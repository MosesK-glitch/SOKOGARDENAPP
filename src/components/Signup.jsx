import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  // Initiailize the hooks
  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');

  // Define the three states an application will move to
  const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
}
 
  // Below is a function that will handle the submit action
  const handleSubmit = async (e) => {
    // Below we prevent the default action of the form which is to refresh the page
    e.preventDefault();
    // Update our loading hook with a message that will be displayed to the users who are trying to register
   setLoading("Please wait while we create your account...");
    try {
      // create a form data object to hold the data that we want to send to the backend
      const formData = new FormData();
      // insert the four details(username,email,password,phone) into the form data object
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("tel", tel);
      // By use of axios we can access the mehod post 
      const response = await axios.post("http://localhost:5000/api/v1/auth/signup", formData);
      // set back the loading to default
      setLoading("");
      // just incase everything goes on well, update the success hook with a meessage
      setSuccess(response.data.message);
      // clear your hooks
      setUsername('');
      setEmail('');
      setPassword('');
      setTel('');

       setTimeout(() => {
        setSuccess("");
       }, 5000);
    } 
    catch (error) {
    //  set the loading hook to default
      setLoading("");
      // set the error hook with the error message that we will get from the backend
      setError(error.response.data.message);
    }
  return (
    <div className='row justify-content-center mt-4'>
     <div className="card col-md-6 shadow p-4">
      <h1 className='text-primary'>Sign Up</h1>
      <h5 className="text-warning">{loading}</h5>
      <h3 className="text-success">{success}</h3>
      <h4 className="text-danger">{error}</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the Username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)}/> <br /> 

        {/* {username} */}

        <input type="email" placeholder='Enter the email Address' classname='form-control' value={email} onChange={(e) => setEmail(e.target.value)} 
        required/> <br /> <br />
        {/* {email} */}

        <input type="password" placeholder='Enter the Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required/> <br />

        {/* {password} */}

        <input type="tel" placeholder='Enter the mobile phone number' className='form-control' value={tel} onChange={(e) => setTel(e.target.value)} required /> <br />

        {/* {tel} */}

        <input type="button" value="SignUp" className='btn btn-primary' /> <br />
        Already have an account? <Link to={'/signin'}>Signin</Link>
      </form>  
     </div>
    </div>
  )
}
export default Signup;