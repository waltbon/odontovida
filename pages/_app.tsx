import React from 'react';
import App, { AppInitialProps } from 'next/app';
import { CommonAppProps } from '../utils/interfaces/pages/app';
import { MainInfoContextProvider } from '../contexts/MainInfoContext';
import { MainInfoApi } from '../lib/api';
declare var WOW: any;

class OdontovidaApp extends App<CommonAppProps> {

    componentDidMount() {
        new WOW().init();
    }

    render() {
        const { Component, pageProps } = this.props;
        return (<>
            <MainInfoContextProvider value={{}}>
                <Component {...pageProps} />
            </MainInfoContextProvider>
        </>)
    }
}

OdontovidaApp.getInitialProps = async ({ ctx, Component }): Promise<AppInitialProps> => {
    let props = {} as any;

    if (Component.getInitialProps) {
        props = await Component.getInitialProps(ctx) as any;
    }

    return {
        pageProps: {
            ...props,
            ...await MainInfoApi.getMainInfo()
        }
    };
}


export default OdontovidaApp