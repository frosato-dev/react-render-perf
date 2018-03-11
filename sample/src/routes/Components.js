import React, { Component } from 'react';

import {
    PureComponent as UserPureComponent,
    Functional as UserFunctional,
    Component as UserComponent,
} from '../components/User';

import mock from '../mocks/users'
const mockUserProps = mock[0];

export default class Components extends Component {

    /**
     * State and State Mutation
     */
    state = {
        renderCount: 1
    };

    triggerReRender =() => {
        this.setState(state => ({ renderCount: state.renderCount + 1 }));
    }


    /***
     * Functions experiment
     */

    arrowFunction = () => {
        console.log("arrowFunction", "need this context !", this);
    };


    render() {
        const { renderCount } = this.state;
        
        console.log(`Render App ${renderCount}`);

        return (
            <section>
                <button onClick={this.triggerReRender}>
                    Re-Render using setState ({renderCount})
                </button>
                <UserFunctional
                    {...mockUserProps}
                    name="PureFunction"
                    onClick={this.arrowFunction}
                    log={true}

                />
                <UserComponent
                    {...mockUserProps}
                    name="React.Component"
                    onClick={this.arrowFunction}
                    log={true}
                />
                <UserPureComponent
                    {...mockUserProps}
                    name="React.PureComponent"
                    onClick={this.arrowFunction}
                    log={true}
                />
            </section>
        );
    }
}
