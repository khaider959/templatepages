import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Adminpanel from './components/Adminpanel';
import Navbartemplateone from './components/Template1/Navbartemplateone';

function App() {
  const [merchants, setMerchants] = useState(false);
  useEffect(() => {
    getMerchant();
  }, []);
  function getMerchant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }
  function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }
  function deleteMerchant() {
    let id = prompt('Enter merchant id');
    fetch(`http://localhost:3001/merchants/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }
  
  return (
    <Router>
      <div className='admin-panel'>
        <Adminpanel/>
      </div>
      <div className='Main-ratio'>
      
      <Navbar />
      <Navbartemplateone/>
      <div>
      {merchants ? merchants : 'There is no merchant data available'}
      <br />
      <button onClick={createMerchant}>Add merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
      </div>
      <Routes>
        <Route path='/' render element={<Home/>} />
        <Route path='/services' render element={<Services/>} />
        <Route path='/products' render element={<Products/>} />
        <Route path='/sign-up' render element={<SignUp/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
