import { ADD_TASK, TOGGLE_TASK } from '../actions' 

const initialState ={
  todos: [
    {
      id: 0,
      value: 'Go to Sleep',
      completed: false,
    }
  ]
}

function reducer(state = initialState, action){
  console.log(state);
  switch(action.type){
    case ADD_TASK: 
    const newTask = {
      id: Date.now(),
      value: action.payload,
      completed: false,
    }
    return {
      ...state,
      todos: [...state.todos, newTask]
    }
    case TOGGLE_TASK: 
    return {
      ...state,
      todos: state.todos.map(todo => {
        if(todo.id === action.payload){
          return {
            ...todo, completed: !todo.completed  
          }
        } else {
          return todo
        }
      })
    }
    default:
      return state
  }
}
export default reducer