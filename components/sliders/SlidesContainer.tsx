import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="slider blue-nav">
                <ul className="slides">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}