import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'




function Contact() {
  return (
    <>
    <section id='contact'>
      <div className='row contact'><h3>Get in touch</h3>
      
      <h3>Let's talk</h3>
      <div className='col-md-2'></div>
      <div className='col-md-3'>
    <div className='about-para'> <p className='ps-2 pt-5 m-md-1' style={{textAlign:'justify'}}>I'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on.</p></div>
     <div className='information ps-2' >
         
            <div className='icon'> <FontAwesomeIcon className='' icon={faEnvelope} beat /> <span>thasleenalatheefaliyam@gmail.com</span> </div>
             <div className='icon ' style={{marginRight:'17rem'}}><FontAwesomeIcon icon={faGithub} beat /> <span>thasleenaaghil</span> </div>
             <div className='icon' style={{marginRight:'18rem'}}><FontAwesomeIcon icon={faPhone} beat /> <span>2332356353</span> </div>
           <div className='icon' style={{marginRight:'17rem'}}>  <FontAwesomeIcon icon={faLinkedin} beat /> <span>Thasleena A L</span></div>
           
                  
              </div>
      </div>
    <div className='col-md-1'></div>
      <div className='col-md-6 contacts'>
      
       <input type="email" class="form-control" placeholder='Your Name'  />
      
       <input type="email" class="form-control" placeholder='Your Email'  />
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type your message here'></textarea>
  
       <button style={{backgroundColor:'yellow',marginRight:'430px'}} className='rounded p-2 btn-outline-light text-dark mt-3  '>Submit</button>
  
      </div>
      
      
      
      </div>
    </section>
    
    
    
    </>
  )
}

export default Contact