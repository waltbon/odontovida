import React from 'react';
import { urlFor } from '../../lib/sanity/imageBuilder';

export default class extends React.Component<{
    title: string;
    description: string;
    mainImage: any;
    icon?: string;
    url: string;
}> {
    render() {
        return (<div className="sbox-3 icon-sm">
            {
                this.props.mainImage &&
                <img src={urlFor(this.props.mainImage).url()} alt="" />
            }
            <h5 className="h5-xs steelblue-color">{this.props.title}</h5>
            <p>{this.props.description}
                <a href={this.props.url} className="btn btn-blue" style={{ marginTop: '10px' }}>Conoza más...</a>
            </p>
        </div>

        )
    }
}