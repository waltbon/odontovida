import React, { Fragment } from 'react';
import ReactPlayer from 'react-player'
interface Props {
    url: string;
}
export default class extends React.Component<Props> {
    render() {
        return (
            <ReactPlayer url={this.props.url} controls={true}>
            </ReactPlayer>)
    }
}