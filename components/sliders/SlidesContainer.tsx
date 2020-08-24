import React from 'react';
declare var $: any;

export default class extends React.Component {
    componentDidMount() {
        $('.slider').slider({
			full_width: false,
			interval:1000,
			transition:700,
			draggable: false,
		});
    }
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