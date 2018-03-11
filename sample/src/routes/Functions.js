import React, { Component } from 'react';
import UserList from '../components/UserList';
import users from '../mocks/users'

export default class Functions extends Component {

    constructor(props) {
        super(props);

        this.triggerReRender = this.triggerReRender.bind(this);
        this.constructorBoundFunction = this.constructorBoundFunction.bind(this);
    }

    /**
     * State and State Mutation
     */
    state = {
        renderCount: 1
    };

    triggerReRender() {
        this.setState(state => ({ renderCount: state.renderCount + 1 }));
    }


    /***
     * Functions experiment
     */

    arrowFunction = () => {
        console.log("arrowFunction", "need this context !", this);
    };

    constructorBoundFunction() {
        console.log("constructorBoundFunction", "need this context !", this);
    }

    anonymous() {
        console.log("anonymous", "need this context !", this);
    }


    render() {
        const { renderCount } = this.state;

        console.log(`Render App ${renderCount}`);

        return (
            <section>
                <button onClick={this.triggerReRender}>
                    Re-Render using setState ({renderCount})
                </button>
                <UserList
                    onUserClick={this.anonymous.bind(this)}
                    name="Bound in render"
                    users={users}
                />
                <UserList
                    onUserClick={() => this.anonymous()}
                    name="Anonymous func"
                    users={users}
                />
                <UserList
                    onUserClick={this.constructorBoundFunction}
                    name="Bound in constructor"
                    users={users}
                />
                <UserList
                    onUserClick={this.arrowFunction}
                    name="Arrow function"
                    users={users}
                />
            </section>
        );
    }
}
