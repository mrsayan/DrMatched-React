import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink Large">
            DrMatched
          </Link>
          <div className="header-menu">
            <a href="#home" className="header-link Large">
              Home
            </a>
            <a href="#about" className="header-link01 Large">
              About
            </a>
            <a href="#work" className="header-link02 Large">
              Work
            </a>
            <a href="#solution" className="header-link03 Large">
              Solution
            </a>
            <a href="#contact" className="header-link04 Large">
              Contact
            </a>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <a href="#work" className="header-link05">
                <PrimaryPinkButton
                  button="join us"
                  className="header-component"
                ></PrimaryPinkButton>
              </a>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink1 Large">
            DrMatched
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <a href="#home" className="header-link06 Large">
              Home
            </a>
            <a href="#about" className="header-link07 Large">
              About
            </a>
            <a href="#work" className="header-link08 Large">
              Work
            </a>
            <a href="#solution" className="header-link09 Large">
              Solution
            </a>
            <a href="#contact" className="header-link10 Large">
              Contact
            </a>
          </div>
        </div>
        <div className="header-bot">
          <a href="#work" className="header-link11">
            <PrimaryPinkButton
              button="join us"
              className="header-component1"
            ></PrimaryPinkButton>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
