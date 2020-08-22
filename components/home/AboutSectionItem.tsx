import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    paragraph: string;
    includePhone?: boolean;
    phone?: string;
    callToAction?: {
        text: string;
        url: string;
    }
}

export default class extends React.Component<Props> {
    render() {
        return (<div className="col-lg-4">
            <div className="abox-3 b-right wow fadeInUp" data-wow-delay="0.4s">
                <p className="blue-color">{this.props.subtitle}</p>
                <h5 className="h5-xs steelblue-color">{this.props.title}</h5>
                {
                    this.props.includePhone &&
                    <h4 className="h4-sm emergency-call blue-color"><i className="fas fa-phone"></i> {this.props.phone}</h4>
                }
                <p>{this.props.paragraph}</p>
                {
                    !!this.props.callToAction &&
                    <a href={this.props.callToAction.url} className="btn btn-sm btn-blue blue-hover mt-25">{this.props.callToAction.text}</a>
                }
            </div>
        </div>

        )
    }
}