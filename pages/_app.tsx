import React from 'react';
import App, { AppInitialProps } from 'next/app';
import { MainInfoApi } from '../lib/api';
import { CommonAppProps } from '../utils/interfaces/pages/app';

class OdontovidaApp extends App<CommonAppProps> {

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

OdontovidaApp.getInitialProps = async ({ ctx, Component }): Promise<AppInitialProps> => {
    let props = {} as CommonAppProps;
    
    if (Component.getInitialProps) {
        props = await Component.getInitialProps(ctx) as any;
    }
    
    const mainInfo = await MainInfoApi.getMainInfo();
    props = {
        ...mainInfo,
        ...props
    };

    return {
        pageProps: props
    };
}


export default OdontovidaApp