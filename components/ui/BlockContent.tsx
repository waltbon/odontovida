import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

export default class extends React.Component<{
    blocks: any
}> {
    render() {
        return (
        <div className="sblog-post-txt" style={{
        }}>
            <BlockContent blocks={this.props.blocks} />
        </div>)
    }
}