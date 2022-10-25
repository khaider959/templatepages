import React, {useState} from 'react'
import './Adminpanel.css'
import { Link } from 'react-router-dom';




const Adminpanel = () => {
  
  
    return (
    <>
      <div className="sidenav">
      <h1 className='headline'>Design Your Template</h1>
              <Link to='/services'>Template 1</Link>
              <Link to='/sign-up'>Template 2</Link>
              <Link to='/products'>Template 3</Link>
       </div>
    </>
  )
}

export default Adminpanel