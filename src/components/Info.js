import React from 'react';

const Info = (props) => {

    const clickHandler = (evt) => {
        evt.preventDefault();
        props.onContactClick(props.id);
    }

    return (
        <div className="info" onClick={clickHandler} >
            <img className="avatar" src={props.avatar} alt="Profile"/>
            <span className="details">
                <div>{props.name}</div>
                <div>{props.phone}</div>
            </span>
        </div>
    )
}

export default Info;