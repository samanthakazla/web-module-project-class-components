import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoData = [
  {
    name: 'clean the house',
    id: 123,
    completed: false
  },
  {
    name: 'cook food',
    id: 124,
    completed: false
  },
  {
    name: 'tkae out trash',
    id: 1235,
   completed: false
  },
  {
    name: 'do laundry',
    id: 1246,
    completed: false
  },
  {
    name: 'vacuum the house',
    id: 1237,
    completed: false
  },

];
class App extends React.Component {
  constructor() {
  super();
  this.state = {
    todoData:todoData
  }
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
        <TodoForm />
        <TodoList todoData={this.state.todoData} />
        </div>
      </div>
    );
  }
}

export default App;
