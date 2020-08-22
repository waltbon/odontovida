import React from 'react';

export default class extends React.Component<{
    title: string;
    description: string;
}> {
    render() {
        return (<div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md steelblue-color">{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        </div>)
    }
}