import React, { useState } from 'react';
import axios from 'axios';  
import Loader from './loader';
import { useLocation, useNavigate } from 'react-router-dom';

const Makepayment = () => {

    // destructuter the details passed from getproducts component
    // The Uselocation hook will help us to access the details passed from the getproducts component
    const location = useLocation();
    const { product } =useLocation().state || {};

    const navigate=useNavigate();

    // console.log("The product details passed from getproducts component are: ", product);
    // below we specify the image base url that will help us to display the product photos
    const img_url = "http://munyorikariuki.alwaysdata.net/static/images/";

    // Initialize the hooks to manage the state of your application
    const [number, setNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // create a function to handle the submit action
    const handleSubmit = async (e) => {
        // prevent the site from reloading
        e.preventDefault();

        // update the loaing hook
        setLoading(true);

        try {
            // create a form data object
            const formdata = new FormData();

            // append the required details to the form data object
            formdata.append("phone", number);
            formdata.append("amount", product.product_cost);

            const response = await axios.post("http://munyorikariuki.alwaysdata.net/api/makepayment", formdata);

            // update the success hook with the response from the backend
            setSuccess(response.data.message);
            }    
        catch (error) {
            // update the loading hook
            setLoading(false);
            // update the error hook with the error message from the backend
            setError(error.message);
        }
}   }
         return (
        <div className='row justify-content-center'>

            <h1 className='text-success'>Make Payment - Lipa na Mpesa</h1>
            <div className='col-md-1'>
                <input type="button" className='btn btn-primary' value=",- Back" onClick={() => navigate("/")} />
            </div>

            <div className='col-md-6 card shadow p-4'>
                <img src={img_url + product.product_photo} alt='product name' className='product_img' />
            </div>

            <div className='card-body'>
                <h3 className='text-info'> {product.product_name} </h3>

                <p className='text-primary'>{product.product_description}</p>
                <b className='text-success'>Price: KSh {product.product_cost}</b> <br />

                <form onSubmit={handleSubmit}>
                    {/* bind the loading hook */}
                    {loading && <Loader />}
                    <h3 className='text-success'>{success}</h3>
                    <h4 className='text-danger'>{error}</h4>
                    <input type="number" className='form-control' placeholder='eg 0700123456'
                    required
                     value={number} onChange={(e) => setNumber(e.target.value)} /> <br />

                    {/* {} */}

                    <input type="submit" className='btn btn-success' value="Make payment" />
                </form>


                



            </div>


        </div>
    );


export default Makepayment;