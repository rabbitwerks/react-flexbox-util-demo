import React from 'react';
import NavItem from '../navbar-item';

const styles = {
  navbarMain: {
    marginRight: '2rem',
  }
}

function NavbarMain() {
  return (
    <nav className="navbar--main fxbx fd-c" style={styles.navbarMain}>
      <NavItem text="Home" targetLocation="http://localhost:3000/" />
      <NavItem text="Playground" targetLocation="http://localhost:3000/playground" />
      <NavItem text="Support" targetLocation="http://localhost:3000/support" />
    </nav>
  )
}

export default NavbarMain;