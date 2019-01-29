import { getTodos, createTodo, updateTodo } from '../services'
import { 
    INPUT_UPDATED, MESSAGE_SHOW, TODOS_LOAD, TODO_ADD, TODO_REPLACE, SET_VISIBILITY_FILTER, VISIBILITY_FILTERS,
    loadTodos, addTodo, replaceTodo, showMessage
} from '../actions';

//  app initial state
const initState = {
    currentTodo: '',
    todos: [],
    message: 'Initiated',
    visibilityFilter: VISIBILITY_FILTERS.SHOW_ACTIVE
}

//
export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(showMessage('Loading Todos ... '))
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
} 

export const saveTodo = (taskName) => {
    return (dispatch) => {
        dispatch(showMessage('Saving Todo ... '))
        const newTodo = {
            name: taskName,
            isComplete: false
        }
        createTodo(newTodo)
            .then(res => dispatch(addTodo(res)))
    }
}

export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('Updating Todo ...'));
        const todos = getState().todos;
        const todo = todos.find(t => t.id === id);
        const toggled = { ...todo, isComplete: !todo.isComplete }
        updateTodo(toggled)
            .then(res => dispatch(replaceTodo(res)))
    };
}

//  reducer function
export default (state = initState, action) => {

    switch (action.type) {
        case INPUT_UPDATED:
            return {...state, currentTodo: action.payload}
        case MESSAGE_SHOW:
            return {...state, message: action.payload}
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {visibilityFilter: action.payload} )
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case TODOS_LOAD:
            return {...state, todos: action.payload}
        case TODO_REPLACE:
            return { ...state, todos: state.todos
                .map(todo => todo.id === action.payload.id ? action.payload : todo) }
        default:
            return state
    }
}