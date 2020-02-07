import React from 'react';

const styles = {
  flexItem: {
    height: '80%',
    border: '3px solid #eee',
  }
}

function FlexItem(props) {
  return (
    <div
      className={`${props.flex} fxbx spc-ctr`}
      style={styles.flexItem}
      onClick={props.alertMe}>
      <span>
        Flex Item
      </span>
    </div>
  )
}

export default FlexItem;