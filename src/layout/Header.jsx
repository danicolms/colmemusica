import React from 'react'
import logo from '/logo.png'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="còlmemusica" className="logo" />
      <h1 className="title">RECORDS</h1>
    </header>
  )
}

export default Header
