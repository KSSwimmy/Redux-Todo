import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTask, toggleTask } from '../actions'


class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state={
      todoText: '',
    }
  }
  
  toggleTask = id => {
    this.props.toggleTask(id)
  }
  addTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.todoText);
    this.setState({
      todoText: ''
    })
  }
  handleInputChange = e => {
    console.log('Input value',e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: "#cdcdcd",
      textDecoration: "line-through"
  }
    return (
      <div>
        <form onSubmit={this.addTask}>
          <label>Add New Todo</label>
          <input 
            type="text" 
            name="todoText" 
            value={this.state.todoText} 
            onChange={this.handleInputChange}
            required
          />
          <button>Add</button>
        </form>
        {this.props.todoStateFromProps.map(todo => <p style={todo.completed ? completedStyle : null} onClick={() => this.toggleTask(todo.id) }>{todo.value}</p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoStateFromProps: state.todos, 
  }
}
export default connect(mapStateToProps, {addTask, toggleTask})(TodoForm)