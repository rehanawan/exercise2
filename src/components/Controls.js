import React from 'react';
import { connect } from 'react-redux';
import {filterTodos, VISIBILITY_FILTERS} from '../actions';

const Filter = ({ name, active, onClickHandler, clicked }) => (
    <button className={`${clicked ? "active" : ""} control-btn`}
            onClick={onClickHandler}>{name}</button>
)

/*  Filter Controls are not working at all
    TODO: 
        1. Update 'visibilityFilter' based on the clicked button
        2. Show active filter
    NOTE: Component is connected to state all you need to do is 
        figureout how to make things work
*/

var clickedB = "All";


const Controls = (props) => {

    return(
        <div className="controls">
            <Filter name="Active Tasks"
                    onClickHandler={() =>{props.filterTodos(VISIBILITY_FILTERS.SHOW_ACTIVE);clickedB = "Active"}}
                    //active={props.visibilityFilter === VISIBILITY_FILTERS.SHOW_ACTIVE}
                    clicked={ "Active" === clickedB}
             />
            <Filter name="Completed Tasks"
                    onClickHandler={() => {props.filterTodos(VISIBILITY_FILTERS.SHOW_COMPLETED);clickedB = "Completed"}}
                    //active={props.visibilityFilter === VISIBILITY_FILTERS.SHOW_COMPLETED}
                    clicked={ "Completed" === clickedB}/>
            <Filter name="All Tasks"
                    onClickHandler={() => {props.filterTodos(VISIBILITY_FILTERS.SHOW_ALL);clickedB = "All"}}
                    //active= {props.visibilityFilter === VISIBILITY_FILTERS.SHOW_ALL}
                    clicked={ "All" === clickedB}


            />
        </div>
    )
}

export default connect(
    (state) => ({visibilityFilter: state.visibilityFilter}),
    {filterTodos}
)(Controls);

