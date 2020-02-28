import React from 'react';
import NavbarMain from './navbar/navbar-main';

const styles = {
  sidebar: {
    width: '10rem',
    margin: '0 1rem'
  }
}

function Sidebar() {
  return (
  <div className="sidebar fxbx fd-c" style={ styles.sidebar }>
    <NavbarMain />
  </div>
  )
}

export default Sidebar;