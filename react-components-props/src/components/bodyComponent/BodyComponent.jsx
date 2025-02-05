import React from 'react'
import './BodyComponent.css'

function BodyComponent(props) {
  return (
    <div id='bodyDiv'>
      <h1>{props.name}</h1>
      {props.children}
    </div>
  )
}

export default BodyComponent
