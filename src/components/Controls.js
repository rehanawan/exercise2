import React from 'react';
import { connect } from 'react-redux';
import { filterTodos, VISIBILITY_FILTERS } from '../actions';

const Filter = ({ name, active, onClickHandler }) => (
    <button className={`${active ? "active" : ""} control-btn`}
            onClick={onClickHandler}>{name}</button>
)

const Controls = (props) => {
    return(
        <div className="controls">
            <Filter name="Active Tasks"
                active={props.visibilityFilter === VISIBILITY_FILTERS.SHOW_ACTIVE}
                onClickHandler={(event) => {props.filterTodos(VISIBILITY_FILTERS.SHOW_ACTIVE)}} />
            <Filter name="Completed Tasks"
                active={props.visibilityFilter === VISIBILITY_FILTERS.SHOW_COMPLETED}
                onClickHandler={(event) => {props.filterTodos(VISIBILITY_FILTERS.SHOW_COMPLETED)}} />
            <Filter name="All Tasks"
                active={props.visibilityFilter === VISIBILITY_FILTERS.SHOW_ALL}
                onClickHandler={(event) => {props.filterTodos(VISIBILITY_FILTERS.SHOW_ALL)}} />                
        </div>
    )
}

export default connect(
    (state) => ({visibilityFilter: state.visibilityFilter}),
    {filterTodos}
)(Controls);