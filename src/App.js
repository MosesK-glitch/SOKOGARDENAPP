import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Makepayment from './components/Makepayment';
import { useEffect, useState } from 'react';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
         <h1>Welcome to Sokogarden</h1>
      </header>
      {/* Below are our different routes together with rendered components */}
      <nav>
       <Link to="c" className='btn btn-primary m-2'>Signup</Link>
       <Link to="/signin" className='btn btn-primary m-2'>Signin</Link>
       <Link to="/addproducts" className='btn btn-primary m-2'>Add products</Link>
       <Link to="/getproducts" className='btn btn-primary m-2'>Get products</Link>
       <Link to="/makepayment" className='btn btn-primary m-2'>Make payment</Link>
      </nav>
    </div>
    </Router>
  );
}

export default App;
