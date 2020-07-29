import React from 'react';
import App, { AppInitialProps } from 'next/app';

class OdontovidaApp extends App {


    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

OdontovidaApp.getInitialProps = async ({ctx, Component }): Promise<AppInitialProps> => {
    let props = {} as any; 

    if (Component.getInitialProps) {
        props = await Component.getInitialProps(ctx) as any;
    }
    return {
        pageProps: props
    };
}


export default OdontovidaApp