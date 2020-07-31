import React from 'react';
import Head from 'next/head';
import ISeo from '../../utils/interfaces/pages/seo.interface';

export default class extends React.Component<{
    seo: ISeo
}> {
    render() {
        return (<>
            <Head>
                {
                    this.props.seo &&
                    <>
                        <title>{this.props.seo.title}</title>
                        <meta name="description" content={this.props.seo.description} />
                    </>
                }
            </Head>
        </>)
    }
}