import React from 'react';
import NavbarMain from './navbar/navbar-main';
import ItemAmounter from './item-amounter';

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
    <ItemAmounter />
  </div>
  )
}

export default Sidebar;