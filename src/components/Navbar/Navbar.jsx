import React from 'react'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'


function Navbar() {
  return (
    <>

<div className='row'>
  
       <div className='Nav'>
       
           <ul>
           
           <li><Link to="#home">Home</Link></li>
           
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to='#projects'>Projects</Link></li>
            <li><Link to='#contact'>Contact</Link></li>
          
           </ul>
       </div>
    </div>
    
    </>
  )
}

export default Navbar