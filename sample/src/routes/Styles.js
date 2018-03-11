import React, { Component } from 'react';
import UserList from '../components/UserList';
import users from '../mocks/users'
//import users from '../mocks/largeNumberOfUsers'


const outOfClassStyle = { color: 'green' };

export default class Styles extends Component {

    constructor(props) {
        super(props)
        this.styleAttribute = { color: 'blue' };
    }
    /**
     * State and State Mutation
     */
    state = {
        renderCount: 1
    };

    triggerReRender = () => {
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
        const inRenderStyle = { color: 'orange'}

        console.log(`Render App ${renderCount}`);

        return (
            <section>
                <button onClick={this.triggerReRender}>
                    Re-Render using setState ({renderCount})
                </button>
                <UserList
                    onUserClick={this.arrowFunction}
                    users={users}
                    name="New Object created on the fly"
                    style={{ color: 'red' }}
                />
                <UserList
                    onUserClick={this.arrowFunction}
                    users={users}
                    name="New Object created in render"
                    style={inRenderStyle}
                />
                <UserList
                    onUserClick={this.arrowFunction}
                    users={users}
                    name="Object stored outside the class"
                    style={outOfClassStyle}
                />
                <UserList
                    onUserClick={this.arrowFunction}
                    users={users}
                    name="Object stored as an attribute of class"
                    style={this.styleAttribute}
                />
            </section>
        );
    }
}
