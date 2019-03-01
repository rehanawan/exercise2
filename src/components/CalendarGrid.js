import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {connect} from "react-redux";
import {
    toggleCalendar,
    fetchTodos,
    fetchAllTodos,
    changeFilterYearVal,
    changeFilterMonthVal
} from "../reducers/todoReducer";
import {withRouter} from "react-router";

const TodoItem = (props) => {
    return (
        <li>
            <p className={props.completed ? "task completed" : "task"}>{props.task}  </p>
        </li>
    );
};
//
// const showTable = () => (
//     <table className={"table"} >
//         <tbody>{this.createTable(this.props.todos)}</tbody>
//     </table>
// )

const years = ['2016', '2017', '2018', '2019', '2020', '2021'];
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const monthsWith30Days = ['3', '5', '7', '8', '10', '12'];

class CalendarGrid extends Component {

    componentWillUpdate(nextProps, nextState, nextContext) {
        //debugger
        if (nextProps.yearf !== this.props.yearf || nextProps.monthf !== this.props.monthf) {
            this.props.fetchAllTodos();
        }
    }

//

    showF = (e) => {
        e.preventDefault();
        console.log("hey" + e.currentTarget.id)
        //debugger
        this.props.history.push("/" + this.props.yearf + "-" + this.props.monthf + "-" + e.currentTarget.id);
        this.props.toggleCalendar();
    }
    listTasks = (filteredTodos, d) => {
        //console.log(filteredTodos)
        const filtered = this.props.todos.filter((filteredTodos) = task => {

            if (task.date === this.props.yearf + '-' + this.props.monthf + '-' + d) {
                return task;
            }
            return null;
        });
        //debugger;
        return (filtered.map(todo =>
            <TodoItem
                key={todo.id}
                {...todo} />
        ));

        //return taskList;
    };

    createTable = (filteredTodos) => {
        let table = [];
        let col = 7;
        let row = 5;
        if (this.props.monthf === "2" && this.props.yearf % 4 !== 0) {
            row = 4
        }
        let c = 0;
        // Outer loop to create parent
        for (let i = 0; i < row; i++) {
            let children = [];
            if (i === 4 && monthsWith30Days.includes(this.props.monthf) === false)
                col = 2;
            if (i === 4 && monthsWith30Days.includes(this.props.monthf) === true)
                col = 3;
            if (i === 4 && this.props.monthf === "2")
                col = 1;
            if (i === 4 && this.props.monthf === "1")
                col = 3;

            //Inner loop to create children
            for (let j = 0; j < col; j++) {
                c = c + 1;

                children.push(<td className={"tableCell"} id={c} key={c + i} onClick={this.showF}>
                    <div className={"alignDateNum"} key={c}>{c}</div>
                    <div id={c}>
                        <ul>{this.listTasks(filteredTodos, c)}</ul>
                    </div>
                </td>)
            }
            //Create the parent and add the children
            table.push(<tr id={i} key={i}>{children}</tr>)
        }
        return table
    };
    onYearclick = (e) => {
        this.props.changeFilterYearVal(e.value)
    };
    onMonthclick = (e) => {
        this.props.changeFilterMonthVal(e.value)
    };

    render() {

        return (
            //<Calendar/>
            <div className={`${this.props.calenderFilter ? "calendarGrid" : "hidden"} `}>
                <p>Calendar Grid View</p>
                <button onClick={() => {
                    this.props.toggleCalendar()
                }}>Close
                </button>
                <p>Year</p><Dropdown options={years} placeholder={'please select years'}
                                     value={this.props.yearf ? this.props.yearf : ""}
                                     className='myClassName'
                                     onChange={this.onYearclick}
            />
                <p>Month</p><Dropdown options={months} placeholder={'please select month'}
                                      value={this.props.monthf ? this.props.monthf : ""}
                                      className='as'
                                      onChange={this.onMonthclick}
            />
                <table className={"table"}>
                    <tbody>{this.createTable(this.props.todos)}</tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        calenderFilter: state.calenderFilter,
        todos: state.alltodos,
        yearf: state.filterYear,
        monthf: state.filterMonth
    }
}

export default connect(mapStateToProps, {
    toggleCalendar, fetchTodos,
    fetchAllTodos, changeFilterYearVal, changeFilterMonthVal
})(withRouter(CalendarGrid))