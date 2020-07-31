import React from 'react'
import { NextPage } from 'next';
import Layout from '../components/common/Layout';
import HeroSlider from '../components/sliders/HeroSlider';
import GeneralInfoSection from '../components/info/GeneralInfoSection';
import { fetchHomePage } from '../lib/sanity/queries';
import { IHomePage } from '../utils/interfaces/pages/home-page.interface';
import WelcomeSection from '../components/home/WelcomeSection';
import { CommonAppProps } from '../utils/interfaces/pages/app';

interface Props {
    homePage: IHomePage;
}

type AllProps = Props & CommonAppProps;

const IndexPage: NextPage<AllProps> = ({ homePage: page, services, allDoctors, generalInfo, departments  }) => {
    return (
        <Layout menu={{ 
                allDoctors,
                generalInfo,
                services, 
                departments
            }} seo={page.seo}>
            <HeroSlider subtitle={page.mainHeader.subtitle} title={page.mainHeader.title} paragraph={page.mainHeader.paragraph} />
            <GeneralInfoSection />
            <WelcomeSection />
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ req }): Promise<any> => {
    const homePage = await fetchHomePage();
    return {
        homePage
    }
}

export default IndexPage