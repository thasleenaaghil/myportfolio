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
      <div className='col-md-6'>
      <h3>Let's talk</h3>
     <p className='ps-3 ms-5' style={{textAlign:'justify'}}>I'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on.</p>
     <div >
         <ul>
           <li>
             <FontAwesomeIcon icon={faEnvelope} beat /> <h6>thasleenalatheefaliyam@gmail.com</h6> <br />
             <FontAwesomeIcon icon={faGithub} beat /> <h6>thasleenaaghil</h6> <br />
             <FontAwesomeIcon icon={faPhone} beat /> <h6>2332356353</h6> <br />
             <FontAwesomeIcon icon={faLinkedin} beat /> <h6>Thasleena A L</h6>
           </li>
         </ul>
                  
              </div>
      </div>
  
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