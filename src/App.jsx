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
      <section id='Hero-Section'>
        <h1>HELLO WORld</h1>
        <p>HEÖLSD</p>
        <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla minus in fuga delectus quasi explicabo aliquid aliquam quibusdam laudantium eveniet non sunt sint sequi accusamus optio, ratione maiores provident.</a>
      </section>
      <section id='AboutMe-Section'>

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
