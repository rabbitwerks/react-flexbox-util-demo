import React from 'react';

const styles = {
  flexItem: {
    height: '80%',
    border: '3px solid #eee',
  }
}

function FlexItem({ flexAmount }) {
  return (
    <div
      className={`fxbx spc-ctr`}
      style={styles.flexItem}
    >
      <h3>
        Flex Amount: { flexAmount }
      </h3>
    </div>
  )
}

export default FlexItem;