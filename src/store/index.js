
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todoReducer from '../reducers/todoReducer'

export default createStore(
    todoReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)