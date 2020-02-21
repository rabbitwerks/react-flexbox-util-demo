import React from 'react';

import FlexItem from './flex-item';
import FlexController from './flex-controller';

class FlexItemGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      flexAmount: 1,
    }
  }

  increaseAmt() {
    if (this.state.flexAmount === 20) return;
    this.setState({ flexAmount: this.state.flexAmount += 1 })
  }

  decreaseAmt() {
    if (this.state.flexAmount === 1) return;
    this.setState({ flexAmount: this.state.flexAmount -= 1 });
  }

  render() {

    return (
      <div className="fxbx fd-c">
        <FlexItem flexAmount={ this.state.flexAmount }/>
        <FlexController 
          increaseAmt={ () => this.increaseAmt() }
          decreaseAmt={ () => this.decreaseAmt() }
        />
      </div>
    )
  }
}

export default FlexItemGroup;