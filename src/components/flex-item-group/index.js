import React from 'react';

import FlexItem from './flex-item';
import FlexController from './flex-controller';

const styles = {
  height: {
    height: '80%',
  },
}

class FlexItemGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      flexAmount: 1,
    }
  }

  increaseAmt(amt) {
    if (this.state.flexAmount === 12) return;
    const newAmt = amt += 1;
    this.setState({ flexAmount: newAmt })
  }

  decreaseAmt(amt) {
    if (this.state.flexAmount === 1) return;
    const newAmt = amt -= 1;
    this.setState({ flexAmount: newAmt});
  }

  render() {

    return (
      <div 
        className={ `f${this.state.flexAmount} fxbx fd-c`}
        style={styles.height}
      >
        <FlexItem flexAmount={ this.state.flexAmount } />
        <FlexController 
          increaseAmt={ () => this.increaseAmt(this.state.flexAmount) }
          decreaseAmt={ () => this.decreaseAmt(this.state.flexAmount) }
        />
      </div>
    )
  }
}

export default FlexItemGroup;