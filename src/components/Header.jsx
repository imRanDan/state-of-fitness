import React from 'react'

const Header = () => {
  return (
    <>
      <nav>
        <ul className='header-nav'>
          <li className='nav-left'><h2>State of Fitness</h2></li>
          <li className='nav-right'><a href='#'>Services</a></li>
          <li className='nav-right'><a href='#'>Facilities</a></li>
          <li className='nav-right'><a href='#'>Merch</a></li>
          <li className='nav-right'><button className='nav-button'>Sign Up</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Header