import React from 'react'
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
const MainNavigation = () => {
  return (
    <MainHeader>
      <h2 className="main-navigation__title">
        Electricity Billing and Management
      </h2>
      <nav className='main-navigation__header-nav'>
        <NavLinks/>
      </nav>
    </MainHeader>
  )
}

export default MainNavigation