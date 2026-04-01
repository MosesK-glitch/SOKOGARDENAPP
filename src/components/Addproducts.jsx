import React from 'react'
import Loader from './loader';

const Addproducts = () => {

  // introduce the hooks
  const [product_name, setProductName] = useState('');
  const [product_description, setProductDescription] = useState('');
  const [product_price, setProductPrice] = useState('');
  const [product_photo, setProductPhoto] = useState('');

  // declare the three states an application will move to
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // create a function that will handle the submit action of the form
  const handleSubmit = async (e) => {
    // Below we prevent the default action of the form which is to refresh the page
    e.preventDefault();
    // Update our loading hook with a message that will be displayed to the users who are trying to add products
    setLoading(true);

      try {
        // create a form data object to hold the data that we want to send to the backend
        const formData = new FormData();

        //  append the four details(product_name,product_description,product_price,product_photo) into the form data object
        formData.append("product_name", product_name);
        formData.append("product_description", product_description);
        formData.append("product_price", product_price);
        formData.append("product_photo", product_photo);
        // interact with the backend using axios and the post method
        const response = await axios.post("http://munyorikariuki.alwaysdata.net/api/add_product", formData);  

        // set the loading hook to default
        setLoading(false);
        
        setSuccess(response.data.message);
        // clear the hooks
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductPhoto('');
        event.target.reset();

        setTimeout(() => {
          setSuccess("");
        }, 5000);

      } 
      catch (error) {
        console.error("Error adding product:", error);
        setError("Failed to add product. Please try again.");
      } 
      finally {
        setLoading(false);
      }
    
  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className="card col-md-6 shadow p-4"><h3 className='text-primary'>Add Products</h3>

      {/* bind the loading hook */}
      {loading && <Loader/>}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the Product Name' className='form-control' required value={product_name} onChange={(e) => setProductName(e.target.value)} /> <br />

        {/* {product_name} */}

        <input type="text" placeholder='Enter the Product Description' className='form-control' required value={product_description} onChange={(e) => setProductDescription(e.target.value)} /> <br />

        {/* {product_description} */}

        <input type="number" placeholder='Enter the Product Price' className='form-control' required value={product_price} onChange={(e) => setProductPrice(e.target.value)} /> <br />

        {/* {product_price} */}

        <label className='text-primary'>Product Photo</label>
        <input type="file" className='form-control' required value={product_photo} onChange={(e) => setProductPhoto(e.target.value)} /> <br />

        {/* {product_photo} */}

        <input type="submit" value="Add Product" className='btn btn-outline-primary' />

      
      </form>
      </div>
    </div>
  )
}

export default Addproducts;