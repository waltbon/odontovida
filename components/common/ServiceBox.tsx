import React from 'react';

export default class extends React.Component<{
    title: string;
    description: string;
    url: string;
}> {
    render() {
        return (<div className="sbox-3 icon-sm">
            {/* Icon */}
            <div className="sbox-3-icon">
                <a href={this.props.url}>
                    <span className="flaticon-083-stethoscope" />
                </a>
            </div>
            {/* Title */}
            <h5 className="h5-xs steelblue-color">{this.props.title}</h5>
            {/* Text */}
            <p>{this.props.description}
        </p>
        </div>

        )
    }
}