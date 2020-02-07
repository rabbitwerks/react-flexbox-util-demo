import React from 'react';

const styles = {
  navbarMain: {
    'margin-right': '2rem',
  }
}

function NavbarMain() {
  return (
    <nav className="navbar--main fxbx fd-c" style={styles.navbarMain}>
      <span className="flex-item">
        Menu Item 1
      </span>
      <span className="flex-item">
        Menu Item 2
      </span>
      <span className="flex-item">
        Menu Item 3
      </span>
    </nav>
  )
}

export default NavbarMain;