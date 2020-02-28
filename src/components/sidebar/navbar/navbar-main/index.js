import React from 'react';
import NavItem from '../navbar-item';


const navLinks = [
  {
    text: 'Home', targetLocation: 'http://localhost:3000/',
  },
  {
    text: 'Playground', targetLocation: 'http://localhost:3000/playground',
  },
  {
    text: 'Github', targetLocation: 'http://github.com/rabbitwerks',
  },
  {
    text: 'Support', targetLocation: 'http://localhost:3000/support',
  },
]

const navMenuItems = navLinks.map(navItem => <NavItem text={ navItem.text } targetLocation={ navItem.targetLocation } />); 

function NavbarMain() {
  return (
    <div>
      <h3>Navigation</h3>
      <nav className="navbar--main fxbx fd-c">
        { navMenuItems }
      </nav>
    </div>
  )
}

export default NavbarMain;