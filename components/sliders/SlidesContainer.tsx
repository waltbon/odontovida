import React from 'react';
declare var $: any;

export default class extends React.Component {
    componentDidMount() {
        $('.slider').slider({
			full_width: true,
			interval:4000,
			transition:700,
			draggable: false,
		});
    }
    render() {
        return (
            <div className="slider blue-nav">
                <ul className="slides p-0">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}