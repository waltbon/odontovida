import React from 'react';

export default class extends React.Component<{
    title: string;
    description: string;
    icon?: string;
    url: string;
}> {
    render() {
        return (<div className="sbox-3 icon-sm">
            {/* Icon */}
            <div className="sbox-3-icon">
                <a href={this.props.url}>
                    <span className={this.props.icon || "flaticon-083-stethoscope"} />
                </a>
            </div>
            {/* Title */}
            <h5 className="h5-xs steelblue-color">{this.props.title}</h5>
            {/* Text */}
            <p>{this.props.description}
            <a href={this.props.url} className="btn btn-blue" style={{marginTop: '10px'}}>Conoza más y agende</a>
        </p>
        </div>

        )
    }
}