import React from 'react'
import './NavComponent.css'

function NavComponent(props) {
  return (
    <div className='wrapper'>
      <a className='navItem' href={props.url}>{props.linkName}</a>
    </div>
  )
}

export default NavComponent
