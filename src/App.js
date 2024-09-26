import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handlecompleted = (id)=> {
    //list of all of our todos.
    //BUT the clicked grocery has completed flipped
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return({
            ...item,
            completed: !item.completed
          });
        }
        return item;
      })
    });
  }

  handleAddItem = (name) => {
    const newItem = {
      task: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newItem]
    });
  }

  handleClear = () => {
    //filter through todos
    //remove all todos where completed === true
    //set state to THAT list
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item=>{
        return(item.completed === false);
      })
    });
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List: MVP</h1>
          <TodoForm handleAddItem={this.handleAddItem}/>
        </div>
        <TodoList handleClear={this.handleClear} handlecompleted={this.handlecompleted} todos={this.state.todos} />
       </div>
    );
  }
}

export default App;
