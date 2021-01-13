import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { MainInfoContext } from '../../contexts/MainInfoContext';
declare var WOW: any;
interface Props {
}

class Layout extends React.Component<Props> {
    componentDidMount() {
        setTimeout(() => {
            new WOW().init();
        }, 200);
    }
    render() {
        return (<>
            <div id="page" className="page">
                {
                    process.env.GTM_ID &&
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}></script>
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `window.dataLayer = window.dataLayer || [];
                                                    function gtag(){dataLayer.push(arguments);}
                                                    gtag('js', new Date());                                                  
                                                    gtag('config', '${process.env.GTM_ID}');`,
                            }}
                        />
                    </>
                }
                <Header />
                {this.props.children}
                <Footer />
            </div>
        </>);
    }
}

export default Layout;