export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK'

export const addTask = taskObj => {
  return {
    type: ADD_TASK,
    payload: taskObj,
  }
} 

export const toggleTask = id => {
  return {
    type: TOGGLE_TASK,
    payload: id,
  }
} 