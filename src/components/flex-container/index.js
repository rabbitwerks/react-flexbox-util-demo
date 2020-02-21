import React from 'react';
import FlexItemGroup from '../flex-item-group';

const styles = {
  flexContainer: {
    'height': '100%',
  }
}

function FlexContainer() {
  return (
    <div 
      className="flex-container f1 fxbx fg3 spc-ctr" 
      style={styles.flexContainer}>
      <FlexItemGroup flex="f1" alertMe={() => alert('hello youtube and twitch') }/>
      <FlexItemGroup flex="f2"/>
      <FlexItemGroup flex="f1"/>
      <FlexItemGroup flex="f3"/>
      <FlexItemGroup flex="f2"/>
    </div>
  )
}

export default FlexContainer;