import React from 'react'
import logo from '../../assets/react.svg'
import './HeaderComponent.css'
import NavComponent from '../navComponent/NavComponent'


function HeaderComponent() {
  return (
    <section>
    <a href='https://react.dev'><img src={logo} alt="reactLogo" /></a>
    <a href=""><img src="vite.svg" alt="" /></a>
    <div className='header'>
      <NavComponent linkName = "Home" url = "#home"/>
      <NavComponent linkName = "About" url = "#about"/>
      <NavComponent linkName = "Project" url = "#project"/>
      <NavComponent linkName = "Contact" url = "#contact"/>
    </div>
    </section>
    
  )
}

export default HeaderComponent
