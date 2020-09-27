import React from 'react';
import NextCookies from 'next-cookies'
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

    let {maininfo} = NextCookies(ctx);
    const mainInfoData = maininfo ? JSON.parse(maininfo) : await MainInfoApi.getMainInfo();
    return {
        pageProps: {
            ...props,
            ...mainInfoData
        }
    };
}


export default OdontovidaApp