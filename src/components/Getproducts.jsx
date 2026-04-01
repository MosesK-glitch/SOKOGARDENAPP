import React from 'react'

const Getproducts = () => {

  // Initialize the hools to manage the state of your application
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');



  return (
    <div>Welcome to the Getproducts Page</div>
  )
}

export default Getproducts;