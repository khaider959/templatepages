import React, {useState} from 'react'
import './Adminpanel.css'
import { Link } from 'react-router-dom';




const Adminpanel = () => {
  
  
    return (
    <>
      <div className="sidenav">
      <h1 className='headline'>Design Your Template</h1>
              <Link to='/'>Template 1</Link>
              <Link to='/templateone'>Template 2</Link>
              <Link to='/templatetwo'>Template 3</Link>
              <Link to='/templatethree'>Template 4</Link>
       </div>
    </>
  )
}

export default Adminpanel