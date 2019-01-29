import React from 'react';
import { connect } from 'react-redux';
import { filterTodos } from '../actions';

const Filter = ({ name, active, onClickHandler }) => (
    <button className={`${active ? "active" : ""} control-btn`}
            onClick={onClickHandler}>{name}</button>
)

/*  Filter Controls are not working at all
    TODO: 
        1. Update 'visibilityFilter' based on the clicked button
        2. Show active filter
    NOTE: Component is connected to state all you need to do is 
        figureout how to make things work
*/

const Controls = (props) => {
    return(
        <div className="controls">
            <Filter name="Active Tasks" />
            <Filter name="Completed Tasks" />
            <Filter name="All Tasks" />                
        </div>
    )
}

export default connect(
    (state) => ({visibilityFilter: state.visibilityFilter}),
    {filterTodos}
)(Controls);