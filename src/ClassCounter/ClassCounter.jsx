import React from "react";
export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // console.log("Increment");
    this.setState((prev)=>({
        count:prev.count+1,
    }))
    };
  

  decrement = () => {
    // console.log("decrement");
    this.setState((prev)=>({
        count:prev.count-1,
    }))
    
  };

  // State -> It Changes using SetState -> Calls render() Again but attaches the latest state value

  render() {
    console.log("Render got Called with value ", this.state.count);
    return (
      <div>
        <h1 > Counter App </h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
