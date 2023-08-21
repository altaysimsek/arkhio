import React from 'react'
import "../styles/Header.css"


const Header = () => {
  return (
    <div className='header-container'>
        <ul>
            <div className="header-left">
                <a href="">Arkhio</a>
            </div>
            <div className="header-links">
            <li>
                <a href="#">Header</a>
                <a href="#">Header</a>
                <a href="#">Header</a>
            </li>
            </div>
           
        </ul>
    </div>
  )
}

export default Header