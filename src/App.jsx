import { useState } from 'react'
import './css/App.css'

function App() {
  const [activeLink, setActiveLink] = useState('Hero-Section')
  const handleLinkClick = (Link) => {
    setActiveLink(Link)
  }

  return (
    <>
     <div id='Section-Container'>
      <section id='Hero-Section' className='Section'>
    	  <div id='Hero-Content-Container'>
          <h1>Welcome to My Portfolio!</h1>
          <h2>My name is Ludwig Engelhardt</h2>
          <h2>I am in the process of becoming a full stack developer.</h2>
        </div>
      </section>
      <section id='AboutMe-Section'>
        <h2>These are the Programming  Skills I possess:</h2>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6)</li>
        </ul>
      </section>
      <section id='Skills-Section'>

      </section>
      <section id='Projects-Section'>

      </section>
      <section id='Contact-Section'>

      </section>
      <section id='Footer-Section'>

      </section>
     </div>
    </>
  )
}

export default App
