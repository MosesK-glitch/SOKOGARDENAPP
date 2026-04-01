import React from 'react'

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
  return (
    <div className='row justify-content-center mt-4'>
      <div className="card col-md-6 shadow p-4"><h3 className='text-primary'>Add Products</h3>

      <form>
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