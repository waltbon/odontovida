import React from 'react';
import App, { AppInitialProps } from 'next/app';
import { CommonAppProps } from '../utils/interfaces/pages/app';
import MainInfoProvider from '../contexts/MainInfoContext';
import Layout from '../components/common/Layout';
declare var WOW: any;

class OdontovidaApp extends App<CommonAppProps> {

    componentDidMount() {
        new WOW().init();
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <MainInfoProvider value={{}}>
                <Layout>
                    <Component {...pageProps} />)
                </Layout>
            </MainInfoProvider>)
    }
}

OdontovidaApp.getInitialProps = async ({ ctx, Component }): Promise<AppInitialProps> => {
    let props = {} as CommonAppProps;
    
    if (Component.getInitialProps) {
        props = await Component.getInitialProps(ctx) as any;
    }
    
    // const mainInfo = await MainInfoApi.getMainInfo();
    props = {
        ...props
    };

    return {
        pageProps: props
    };
}


export default OdontovidaApp