import React from 'react';
import FlexItem from '../flex-item/';

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
      <FlexItem flex="f1" alertMe={() => alert('hello youtube and twitch') }/>
      <FlexItem flex="f2"/>
      <FlexItem flex="f1"/>
      <FlexItem flex="f3"/>
      <FlexItem flex="f2"/>
    </div>
  )
}

export default FlexContainer;