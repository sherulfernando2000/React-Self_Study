import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyName from './components/myComponent/MyName'
import ClassComp from './components/classComponent/ClassComp'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import BodyComponent from './components/BodyComponent/BodyComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  )
}

export default App
