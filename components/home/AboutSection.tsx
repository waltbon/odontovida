import React from 'react';

export default class extends React.Component {
    render() {
        return (<section id="about-3" className="about-section division">
            <div className="container">
                <div className="abox-3-holder">
                    <div className="row d-flex align-items-center">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </section>)
    }
}