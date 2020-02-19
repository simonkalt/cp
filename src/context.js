import React, { Component } from 'react';

const PsychicContext = React.createContext();
 
export default class PsychicProvider extends Component {
    state = {
        psychics: [],
        featuredPsychics: [],
        tools: [],
        rate_ph: 0,
        line_name: ''
    }
    render() {
        return (
            <PsychicContext.Provider value={"hello"}>
                {this.props.children}
            </PsychicContext.Provider>
        )
    }
}

const PsychicConsumer = PsychicContext.Consumer;
export { PsychicProvider, PsychicConsumer, PsychicContext };