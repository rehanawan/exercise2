import React from 'react';

const Info = (props) => {

    return (
        <div className="info">
            <img src={props.avatar} alt=""/>
            <span className="name">props.name</span>
            <span className="phone">props.phone</span>
        </div>
    )
}

export default Info;