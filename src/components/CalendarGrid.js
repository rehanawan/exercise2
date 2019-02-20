import React, {Component} from 'react';
//import { updateInput } from '../actions';
import {connect} from "react-redux";
import {toggleCalendar,fetchTodos} from "../reducers/todoReducer";

const TodoItem = (props) => (
    <li>
        <p className={props.completed ? "task completed" : "task"}>{props.task}  </p>
    </li>
);


class CalendarGrid extends Component{


//

showF =(e)=>{
    e.preventDefault();
    console.log("hey" + e.target.id)
}
 listTasks = (filteredTodos) => {
        console.log(filteredTodos);
        const taskList = filteredTodos.map(todo =>
            <TodoItem
                key={ todo.id }
                { ...todo } />
        );
        return taskList;
    }

    createTable = (filteredTodos) => {
        let table = []
        let r = 7;
        let c = 0;
        // Outer loop to create parent
        for (let i = 0; i < 5; i++) {
            let children = []
            if (i===4)
                r= 3
            //Inner loop to create children
            for (let j = 0; j < r; j++) {
                c= c+1;

                children.push(<td className={"tableCell"} id={c} onClick={this.showF}><div className={"alignDateNum"}>{c}</div><div><ul>{}</ul></div></td>)
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }
onButtonclick=(e)=>{
            e.preventDefault();
            console.log("clicked");


}


    render(){
        const { todos} = [];
        console.log(todos);
        //debugger;
        //const filteredTodos = this.filterTasks(todos, visibilityFilter);
        return(
            //<Calendar/>
            <div className={`${this.props.calenderFilter ? "calendarGrid" : "hidden"} `}>
                <button > Load </button>
            <p>Test</p><button onClick={() => {this.props.toggleCalendar()}}>Close</button>
                <table className={"table"} >
                    <tbody>{this.createTable(todos)}</tbody>
                </table>
            </div>

        )
    }
}
const mapStateToProps = (state) =>{
    return{
        calenderFilter : state.calenderFilter,
        todos: state.todos
    }
}

export default connect(mapStateToProps,{toggleCalendar,fetchTodos})(CalendarGrid)