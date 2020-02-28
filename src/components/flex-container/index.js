import React from 'react';
import FlexItemGroup from '../flex-item-group';

const styles = {
  flexContainer: {
    height: '100%',
    marginRight: '1rem',
  }
}

const flexItemArray = [0, 1, 2, 3, 4];

function FlexContainer() {

  const flexItemCount = flexItemArray.map(item => <FlexItemGroup key={ item } />)

  return (
    <div 
      className="flex-container f1 fxbx fg3 spc-ctr" 
      style={styles.flexContainer}>
        { flexItemCount }
    </div>
  )
}

export default FlexContainer;