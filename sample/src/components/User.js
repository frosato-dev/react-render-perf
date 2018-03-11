import React from 'react';

const defaultProps = {
    style: {},
    log: false
}

export const Functional = ({ style = {}, log = true, onClick, name, age, hobby }) => {

    if(log) {
        console.warn('Render Functional User named:', name)
    }

    return (
        <div style={style} onClick={onClick}>
            <span>Name: {name}</span><br/>
            <span>Age: {age}</span><br/>
            <span>Hobby: {hobby}</span>
        </div>
    );
}


export class PureComponent extends React.PureComponent {

    static defaultProps = defaultProps

    render() {
        const { style, log, onClick, name, age, hobby } = this.props;

        if(log) {
            console.warn('Render PureComponent User named:', name)
        }

        return (
            <div style={style} onClick={onClick}>
                <span>Name: {name}</span><br/>
                <span>Age: {age}</span><br/>
                <span>Hobby: {hobby}</span>
            </div>
        );
    }
}


export class Component extends React.Component {

    static defaultProps = defaultProps

    render() {
        const { style, log, onClick, name, age, hobby } = this.props;

        if(log) {
            console.warn('Render Component User named:', name)
        }

        return (
            <div style={style} onClick={onClick}>
                <span>Name: {name}</span><br/>
                <span>Age: {age}</span><br/>
                <span>Hobby: {hobby}</span>
            </div>
        );
    }
}