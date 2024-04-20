import React from 'react'
import './Work.css'
import Card from 'react-bootstrap/Card';

function Work() {
  return (
    <>
   <section id='projects'>
      <div className='row work p-4 '>
       <h3>Projects</h3>
      <div className='col-md-3  pt-3 '>
      <Card style={{ width: '16.5rem' }}>
       
          <div className='overlay'>
            
              <Card.Img variant="top" src="https://blog.hubspot.com/hs-fs/hubfs/restaurant-website-design_22.webp?width=651&height=710&name=restaurant-website-design_22.webp" className='images'  />
              <Card.Body>
                <Card.Title>Restaurant Website</Card.Title>
                
              
                 <a href='https://thasleenaaghil.github.io/febrestaurant/?' target='_blank'>
                    
                    <div className='middle'><div className='text text-info'><h5>Technologies used: <br />HTML <br />CSS <br /></h5></div> </div>
                 </a> 
             
                 
                  
              
                
              </Card.Body>
              <a></a>
          </div>
          
       
      
        <Card.Body>
         
        </Card.Body>
      </Card>
      </div>
      <div className='col-md-3 pt-3'>
      <Card style={{ width: '18rem' }}>
       <div className='overlay'>
          <Card.Img variant="top"className='images' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHq0iSAVrQg6eCNIFXDosf5WJ2bUZlQIom3wqCofoJrA&s" />
          <Card.Body>
            <Card.Title>Travel Website</Card.Title>
            <a href='https://65eb89630ff9fb151f8e959f--splendid-centaur-03f540.netlify.app/?#plan%20a%20trip' target='_blank'>  <div className='middle'><div className='text text-info'><h5>Technologies used: <br />HTML <br />CSS <br />BOOTSTRAP</h5></div></div></a>
            
          </Card.Body>
       </div>
      
        <Card.Body>
         
        </Card.Body>
      </Card>
      </div>
      <div className='col-md-3 pt-3'>
      <Card style={{ width: '18rem' }}>
      <div className='overlay'>
         <Card.Img variant="top" src="https://image.winudf.com/v2/image/Y29tLm5vcnRoZHJvaWQuc2ltcGxldGltZXdpZGdldF9pY29uXzE1MzIxMDU1NjNfMDY3/icon.png?w=&fakeurl=1" className='images' />
          <Card.Body>
            <Card.Title>Weather Search</Card.Title>
           <a href='https://weathersearchapril.vercel.app/' target='_blank'> <div className='middle'><div className='text text-info'><h5>Technologies used: <br />HTML <br />JavaScript <br />BOOTSTRAP <br />API</h5></div></div></a>
            
          </Card.Body>
      </div>
      
        <Card.Body>
         
        </Card.Body>
      </Card>
      </div>
      <div className='col-md-3 pt-3 '>
      <Card style={{ width: '18rem' }}>
       <div className='overlay'>
          <Card.Img variant="top" src="https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/calculator/life-planning-tools/bmi-calculator/banner-image-bmi.png" className='images' />
          <Card.Body>
            <Card.Title>BMI Calculator</Card.Title>
            <a href='https://bmiapril.vercel.app/' target='_blank'>   <div className='middle'><div className='text text-info'><h5>Technologies used: <br />HTML <br />JavaScript <br />BOOTSTRAP <br />React</h5></div></div></a>
          
            
          </Card.Body>
        
       </div>
        <Card.Body>
         
        </Card.Body>
      </Card>
      </div>
  
      </div>
   </section>
    
    </>
  )
}

export default Work