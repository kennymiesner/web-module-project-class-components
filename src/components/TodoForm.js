import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      inputValue:""
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      inputValue:e.target.value
    })
    // update state with each keystroke
  };

  // class property to submit form
  handleClick = (e)=> {
    e.preventDefault();
    this.props.handleAddItem(this.state.inputValue);
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChanges}type="text" name="item" />
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default TodoForm;