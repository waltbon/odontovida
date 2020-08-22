import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { MainInfoContext } from '../../contexts/MainInfoContext';

interface Props {
}

export default class extends React.Component<Props> {
    render() {
        return (<>
                <MainInfoContext.Consumer>
                    {(value) => (
                        <div id="page" className="page">
                            {
                                value.isLoaded && (<>
                                    <Header />
                                    {this.props.children}
                                    <Footer  />
                                </>)
                            }
                        </div>
                    )}
                </MainInfoContext.Consumer>
            </>);
    }
}