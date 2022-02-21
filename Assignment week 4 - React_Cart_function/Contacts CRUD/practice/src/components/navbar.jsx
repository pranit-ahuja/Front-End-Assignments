import React from 'react'
import './navbar.css'

const Navbar = (props) => {
  return (
      <React.Fragment>
    <h1>Navbar</h1>
    <h1>{props.snack1}</h1>
    <h1>{props.snack2}</h1>
    </React.Fragment>
  )
}

export default Navbar