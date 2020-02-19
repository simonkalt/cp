import React, { Component } from 'react'
import PsychicContext from '../context';

export default class featuredPsychics extends Component {
    static contextType = PsychicContext;
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>Featured Psychics {value}
            </div>
        )
    }
}
