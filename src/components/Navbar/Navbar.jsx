import React from 'react'
import './Navbar.css'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Navbar() {
  return (
    <>

<nav class="navbar navbar-expand m-3 ms-5" >
  <a style={{color:'yellow'}}  class="navbar-brand" href="#">Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{color:'yellow'}}>
    <span class="navbar-toggler-icon" style={{color:'yellow'}}></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a style={{color:'yellow'}}  class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
      <a style={{color:'yellow'}}  class="nav-item nav-link" href="#skills">Skill</a>
      <a style={{color:'yellow'}}  class="nav-item nav-link" href="#skills">Project</a>
      <a style={{color:'yellow'}}  class="nav-item nav-link " href="#contact">Contact</a>
    </div>
  </div>
</nav>
    {/* <div className='Nav'>
      <nav class="navbar ">
      <FontAwesomeIcon icon={faBars}  className='icon' style={{color:'yellow'}} />
    <a  style={{color:'yellow'}} class="navbar-brand " href="#home">Home</a>
    <a style={{color:'yellow'}} class="navbar-brand " href="#skills">Skill</a>
    <a style={{color:'yellow'}} class="navbar-brand " href="#projects">Project</a>
    <a style={{color:'yellow'}} class="navbar-brand " href="#contact">Contact</a>
  </nav>
    </div> */}

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