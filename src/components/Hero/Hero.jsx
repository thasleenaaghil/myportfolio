import React from 'react'
import './Hero.css'
import img1 from '../../assets/img1.png'

function Hero() {
  return (
    <>
    <section id='home'>
      <div className='row'>
          <div className='col-md-1'>
  
           
          </div>
          <div className='col-md-5'>
            <img src={img1} alt="" />
  
          </div>
          <div className='col-md-5 intro'>
            <button style={{backgroundColor:'violet'}} className='rounded m-1 p-2 btn-outline-light text-light'>Welcome to my Portfolio</button>
      <h1>Hi! I'm Thasleena</h1>
      <h2 style={{color:'yellow'}}>Full Stack Developer</h2>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam odio nemo soluta accusamus sequi facilis nobis similique deleniti doloribus veniam amet, aliquid ipsa sint saepe, atque eligendi quis alias?</p>
      <button style={{backgroundColor:'black'}} className='rounded p-2  text-light'>Download CV</button>
       </div>
          
     
  
      </div>
    </section>
    
    </>
  )
}

export default Hero