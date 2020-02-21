import React from 'react';

export default function FlexController({ increaseAmt, decreaseAmt }) {
  return (
    <div className="fxbx">
      <button onClick={ increaseAmt }>
        Increase
      </button>
      <button onClick={ decreaseAmt }>
        Decrease
      </button>
    </div>
  )
};