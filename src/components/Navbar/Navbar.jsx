import React from 'react'
import './Navbar.css'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Navbar() {
  return (
    <>
    <div className='Nav'>
      <nav class="navbar ">
      <FontAwesomeIcon icon={faBars}  className='icon' style={{color:'yellow'}} />
    <a  style={{color:'yellow'}} class="navbar-brand " href="#home">Home</a>
    <a style={{color:'yellow'}} class="navbar-brand " href="#skills">Skill</a>
    <a style={{color:'yellow'}} class="navbar-brand " href="#projects">Project</a>
    <a style={{color:'yellow'}} class="navbar-brand " href="#contact">Contact</a>
  </nav>
    </div>

{/* <div className=' row Nav '>
  
       
       <header className='header'>
         
             <ul>
             <div className='lists'>
             <li className='lists'><Link to="#home">Home</Link></li>
             
              <li className='lists'><Link to="#skills">Skills</Link></li>
              <li className='lists'><Link to='#projects'>Projects</Link></li>
              <li className='lists'><Link to='#contact'>Contact</Link></li>
              </div>
             </ul>
         
       </header>
    </div>
     */}
    </>
  )
}

export default Navbar