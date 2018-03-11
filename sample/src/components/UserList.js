import React, { PureComponent } from 'react';
import { PureComponent as User } from "./User";

export default class UserList extends PureComponent {

    render() {
        const { name, onClick, style, users } = this.props;

        console.warn(`Render UserList with name: ${name}`);

        return (
            <div>
                <span>{name}!</span>
                <ul>
                    {users.map(userProps => (
                        <li key={userProps.id}>
                            <User
                                log={false}
                                onClick={onClick}
                                style={style}
                                {...userProps}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}