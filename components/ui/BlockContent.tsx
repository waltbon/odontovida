import React from 'react';
import BlockContent from '@sanity/block-content-to-react'; 

export default class extends React.Component<{
    blocks: any
}> {
    render() {
        return (  
            <BlockContent blocks={this.props.blocks} />
        )
    }
}