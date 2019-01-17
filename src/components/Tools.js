import React, {Component} from 'react';

class Tools extends Component {

    onClickHandler = (event ) => {
        console.log(" ::: clicked on tools");
    }

    render() {
        return (
            <span
                className="more"
                onClick={this.onClickHandler} />
        )
    }
}

export default Tools;
