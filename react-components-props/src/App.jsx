import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/headerComponent/HeaderComponent'
import BodyComponent from './components/bodyComponent/BodyComponent'
import ButtonComponent from './components/buttonComponent/ButtonComponent'

function App() {
  const [count, setCount] = useState(0)
  const printHello = ()=>{
    console.log("Hello React");
  }

  return (
    <>
      <div>
        <HeaderComponent />
        <BodyComponent name = "Home">
          <button>Click Here</button>
        </BodyComponent>
        <BodyComponent name = "About">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit? Alias reprehenderit et quisquam,
             quod doloremque nisi odio perspiciatis harum quo
              assumenda sint quasi porro voluptatem optio ad id aliquid.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugit? Alias reprehenderit et quisquam,
             quod doloremque nisi odio perspiciatis harum quo
              assumenda sint quasi porro voluptatem optio ad id aliquid.</p>
        </BodyComponent>
        <BodyComponent name = "Project"></BodyComponent>
        <ButtonComponent name = "Print Hello" event = {printHello}/>
      </div>
        
    </>
  )
}

export default App
