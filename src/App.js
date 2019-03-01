import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Controls from './components/Controls';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";

class App extends React.Component {

    getALLTodoList = () => {
        return (<TodoList dateFilter='allTasks' />)
    };

    getTodoList = (props) => {
            return (<TodoList dateFilter={props.location.pathname.substring(1)} />)
    };

    render() {
        let today = new Date();
        let date = today.toDateString();
        return (
            <Router >
            <div className="todo-app">
                <h2>{date}</h2>
                <h1>TODO LIST:</h1>
                <Message/>
                <TodoForm />
                <Controls/>
                <Route exact path="/" component = {this.getALLTodoList}   />
                <Route path = {"/:d"} component={this.getTodoList} />

            </div>
        </Router>
            );
        }
    }

export default connect()(App);
