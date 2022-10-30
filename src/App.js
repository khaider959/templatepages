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
import Templateone from './components/Template1/Templateone';
import Templatetwo from './components/Template2/Templatetwo';

function App() {
  const [todos, setTodos] = useState([]);
  const [images, setImages] = useState([]);
  const [boxes, setBoxes] = useState([]);
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

  const getBoxes = async () => {
    try {
      const response = await fetch("http://localhost:3001/boxes");
      const jsonData = await response.json();

      setBoxes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getTodos();
    getImages();
    getBoxes();
  }, []);

  console.log(todos);
  console.log(boxes);
  
  return (
    <Router>
      <div className='admin-panel'>
        <Adminpanel/>
      </div>
      <div className='Main-ratio'>
      <Routes>
        <Route path='/' render element={<Home dental_info={todos} images={images} boxes={boxes}/>} />
        <Route path='/services' render element={<Services/>} />
        <Route path='/products' render element={<Products/>} />
        <Route path='/sign-up' render element={<SignUp/>} />
        <Route path='/templateone' render element={<Templateone/>} />
        <Route path='/templatetwo' render element={<Templatetwo/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;