//  action types
export const INPUT_UPDATED = 'INPUT_UPDATE';
export const TODOS_LOAD = 'TODOS_LOAD';
export const TODO_ADD = 'TODO_ADD';
export const TODO_REPLACE = 'TODO_REPLACE';
export const TODO_DELETE = 'TODO_DELETE'
export const MESSAGE_SHOW = 'MESSAGE_SHOW';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const CALENDAR_VISIBILITY_FILTER = true;
//  other constants
export const VISIBILITY_FILTERS = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}



//  action creator functions
export const updateInput = (val) => ({type: INPUT_UPDATED, payload: val})
export const filterTodos = (filter) => ({ type: SET_VISIBILITY_FILTER, payload: filter })
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})
export const replaceTodo = (todo) => ({type: TODO_REPLACE, payload: todo})
export const deleteTod = (id) => ({type: TODO_DELETE, id:id})
export const showMessage = (msg) => ({ type: MESSAGE_SHOW, payload: msg })
export const calendarTogle = (id) => ({type: CALENDAR_VISIBILITY_FILTER, id:id})