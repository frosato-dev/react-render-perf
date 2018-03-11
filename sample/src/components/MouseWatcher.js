import React, { PureComponent } from 'react';

export default class MouseWatcher extends PureComponent {

    state = {
        x: 0,
        y: 0
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        const { children } = this.props;

        console.log(`Render MouseWatcher`);

        return (
            <div onMouseMove={this.handleMouseMove}>
                {children(this.state)}
            </div>
        );
    }
}