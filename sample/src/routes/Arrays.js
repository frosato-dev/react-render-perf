import React, { Component } from 'react';
// import { Functional as User } from "../components/User";
import { PureComponent as User } from "../components/User";
import mockUsers from '../mocks/users';

export default class Arrays extends Component {

    /**
     * State and State Mutation
     */
    state = {
        users: mockUsers
    };

    triggerReRender = () => {

        const id = Math.round(Math.random() * 1000000).toString();
        const newUser = {
            id,
            name: `unknown ${id}`,
            age: Math.round(Math.random() * 100),
            hobbies: 'unknown',
        }

        this.setState(state => ({

            // At the end
            users: state.users.concat([ newUser ])

            // At the beginning of list
            //users: [].concat([ newUser ], state.users)
        }));
    }


    /***
     * Functions experiment
     */

    arrowFunction = () => {
        console.log("arrowFunction", "need this context !", this);
    };


    render() {
        const { users } = this.state;

        console.log(`Render App`);

        return (
            <section>
                <button onClick={this.triggerReRender}>
                    Re-Render using setState
                </button>
                {/* Using Index */}
                <ul>
                    {users.map((userProps, index) => (
                        <li key={index}>
                            <User
                                log={true}
                                onClick={this.arrowFunction}
                                {...userProps}
                            />
                        </li>
                    ))}
                </ul>
                {/* Using Id */}
                {/*
                <ul>
                    {users.map((userProps) => (
                        <li key={userProps.id}>
                            <User
                                log={true}
                                onClick={this.arrowFunction}
                                {...userProps}
                            />
                        </li>
                    ))}
                </ul>
                */}
            </section>
        );
    }
}
