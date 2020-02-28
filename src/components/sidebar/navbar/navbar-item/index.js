import React from 'react';

const styles = {
  navItem: {
    color: '#ccc',
    margin: '.5rem 0',
    paddingBottom: '.5rem',
    borderBottom: '2px solid #ccc',
    textDecoration: 'none',
  }
}

function NavItem({text, targetLocation}) {
  return (
    <a href={targetLocation} style={styles.navItem}>
      {text}
    </a>
  )
}

export default NavItem;