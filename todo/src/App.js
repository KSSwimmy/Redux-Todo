import React from 'react';
// import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import Todo from './components/Todo'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
      <TodoForm />
      </div>
    ); 
  }
}

export default App;