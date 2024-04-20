
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Skill from './components/Skiils/Skill'
import Work from './components/Works/Work'


function App() {
  

  return (
    <>
   <div className='contain' >
    <BrowserRouter>
      
       <Navbar/>
     <Hero/>
     <Skill/>
    <Work/>
    <Contact/>
    </BrowserRouter>
   
   </div>
   
    </>
  )
}

export default App
