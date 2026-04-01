import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
         <h1>Welcome to Sokogarden</h1>
      </header>
      {/* Below are our different routes together with rendered components */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/getproducts" element={<Getproducts />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
