import React from 'react'

const Signin = () => {

  // Define the two hooks fo capturing the email and password of the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Declare the three states an application will move to
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = 
  useState('');
  const [error, setError] = useState('');
  // below we have the use navigate hook that will help us to navigate to the dashboard page after a successful login
  const navigate = useNavigate();
  // below is a function that will handle the submit action of the form
  const handleSubmit = async (e) => {
    // Below we prevent the default action of the form which is to refresh the page
    e.preventDefault();
    // Update our loading hook with a message that will be displayed to the users who are trying to register
    setLoading("Please wait while we sign you in...");

    try {
      // create a form data object to hold the data that we want to send to the backend
      const formData = new FormData();

      // insert the two details(email,password) into the form data object
      formData.append("email", email);
      formData.append("password", password);

      // By use of axios we can access the mehod post 
      const response = await axios.post("https://munyorikariuki.alwaysdata.net/api/signin", formData);

      // set back the loading to default
      setLoading("");

      // check whether the user exists as part of your response from the API
      if (response.data.user) {
        // just incase everything goes on well, update the success hook with a meessage
        // setSuccess(response.data.message);

        // store user details in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // navigate to the dashboard page
        navigate("/dashboard");
      } 
      else {
        setError("Invalid email or password.");
      }
    }
      catch (error) {
        // set the loading hook to default
        setLoading("");

        // set the error hook with the error message that we will get from the backend
        setError("An error occurred while signing in. Please try again.");

      }
    finally {
      setLoading('');
    }
  };

  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6'>
        <h1 className='text-primary'>Sign In</h1>
        <h5 className='text-info'>{loading}</h5>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter the email Address' className='form-control' required value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br />

          {/* {email} */}

          <input type="password" placeholder='Enter the Password' className='form-control' required value={password}
          onChange={(e) => setPassword(e.target.value)} /> <br />

          {/* {password} */}

          <input type="submit" value="SignIn" className='btn btn-primary' /> <br /> <br />
          Don't have an account? <Link to={'/signup'}>Signup</Link>


        </form>
      </div>
    </div>
  )
}

export default Signin;