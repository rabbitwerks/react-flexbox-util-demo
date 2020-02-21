import React from 'react';

const styles = {
  button: {
    width: '100%'
  },
  marginButton: {
    marginTop: '1rem'
  }
}

export default function FlexController({ increaseAmt, decreaseAmt }) {
  return (
    <div className="fxbx" style={ styles.marginButton }>
      <button 
        style={ styles.button }
        onClick={ increaseAmt }>
        Increase
      </button>
      <button 
        style={ styles.button }
        onClick={ decreaseAmt }>
        Decrease
      </button>
    </div>
  )
};