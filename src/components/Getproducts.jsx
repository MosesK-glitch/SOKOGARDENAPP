import React from 'react'
import { useState } from 'react';
import axios from 'axios';  
import Loader from './loader';

const fetchproducts = () => {

  // Initialize the hools to manage the state of your application
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');

  // below we specify the image base url that will help us to display the product photos
  const img_url = "http://munyorikariuki.alwaysdata.net/static/images/";

  // creaye a function to help you fetch the products from your api
  const fetchProducts = async () => {
    try{
      // 4. update the loading state to true to indicate that we are fetching data from the backend
      setLoading(true);

      // 5. interact with the backend using axios and the get method to fetch the products
      const response = await axios.get("http://munyorikariuki.alwaysdata.net/api/products");

      // 6. update the products hook with the response given from the API
      setProducts(response.data.products);

      // 7. set the loading state to false to indicate that we have finished fetching data from the backend
      setLoading(false);

    }
    catch (error) {
      // 8. set the loading state to false to indicate that we have finished fetching data from the backend
      setLoading(false);

      // 9. update the error hook with the error message that we will get from the backend
      setError(error.message);
    }  
  };

  // we shall use the use effect hook to call the fetch products function as soon as the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(" The products fetched are: ", products);


  return (
    <div className='row'>
      <h3 className='text-primary'>Available products</h3>

      {loading && <Loader />}
      <h4 className='text-danger'> {error} </h4>

      {products.map((product) => (
        <div className='card col-md-3 justify-content-center mb-3'>
          <div className='card shadow'>
            <img
            src={img_url + product.product_photo}
            alt="product name"
            className='product_img my-3'
            />
            <div>
              <h5 className='text-primary'>{product.product_name}</h5>
              <p className='text dark'>{product.product_description.slice(0, 100)}...</p>
              <h4 className='text-warning'>Ksh {product.product_cost}</h4>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Getproducts;