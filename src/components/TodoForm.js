
import React from "react";

class TodoForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    // update state with each keystroke
  };

  // class property to submit form

  render() {
    return (
      <form>
  
        <input type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
