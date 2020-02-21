import React, { Component } from 'react'
import PsychicContext from '../context';

export default class featuredPsychics extends Component {
    static contextType = PsychicContext;
    render() {
        const value = this.context.contextType;
        console.log(value);
        return (
            <div> {value} </div>
        )
    }
}
