import React from 'react'
import { NextPage } from 'next';
import Layout from './components/common/Layout';

interface Props {
}

const IndexPage: NextPage<Props> = ({}) => {
    return (
        <Layout>
            
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ req }): Promise<any> => {
    return {
    }
}

export default IndexPage