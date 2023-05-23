import React from 'react'
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
const MainNavigation = () => {
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        Electricity billing and Management
      </h1>
      <nav className='main-navigation__header-nav'>
        <NavLinks/>
      </nav>
    </MainHeader>
  )
}

export default MainNavigation