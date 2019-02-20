import React, {Component} from 'react';
//import { updateInput } from '../actions';
import {connect} from "react-redux";



class TimePicker extends Component{
    render(){
        return(
            //<Calendar/>
            <div>{console.log('heyhey')}</div>

        )
    }
}


export default connect()(TimePicker)