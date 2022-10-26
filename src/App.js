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
  const [todos, setTodos] = useState([]);
  const [images, setImages] = useState([]);
  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:3001/images");
      const jsonData = await response.json();

      setImages(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
    getImages();
  }, []);

  console.log(todos);
  
  return (
    <Router>
      <div className='admin-panel'>
        <Adminpanel/>
      </div>
      <div className='Main-ratio'>
      
      <Navbar todos={todos} />
      <Navbartemplateone/>
      <Routes>
        <Route path='/' render element={<Home dental_info={todos} images={images}/>} />
        <Route path='/services' render element={<Services/>} />
        <Route path='/products' render element={<Products/>} />
        <Route path='/sign-up' render element={<SignUp/>} />
      </Routes>
      <Footer  todos={todos}/>
      </div>
    </Router>
  );
}

export default App;