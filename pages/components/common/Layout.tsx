import React from 'react';
import Header from './Header';
import Footer from './Footer';
export default class extends React.Component {
    render() {
        return (
        <div id="page" className="page">
            <Header />
            {this.props.children}
            <Footer />
        </div>
        );
    }
}