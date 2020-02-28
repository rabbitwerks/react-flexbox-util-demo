import React from 'react';

const styles = {
  itemAmounter: {
    marginTop: '2rem'
  },
  btn: {
    display: 'block',
  }
};

const ItemAmounter = () => {
  return (
    <div style={ styles.itemAmounter }>
      <h3>Item Amounter</h3>
      <button>Add Item</button>
      <br />
      <button>Remove Item</button>
    </div>
  );
}
 
export default ItemAmounter;