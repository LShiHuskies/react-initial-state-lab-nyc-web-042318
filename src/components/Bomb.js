// Bomb Component Code Goes Here
import React from 'react';


class Bomb extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }

  }

  doStuff() {
    if (this.state.secondsLeft == 0) {
      return 'Boom!'
    } else if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }
  render() {
    return (
      <div>
        {this.doStuff()}
      </div>
    )
  }
}


export default Bomb;
