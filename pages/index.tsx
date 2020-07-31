import React from 'react'
import { NextPage } from 'next';
import HeroSlider from '../components/sliders/HeroSlider';
import GeneralInfoSection from '../components/info/GeneralInfoSection';
import { fetchHomePage } from '../lib/sanity/queries';
import { IHomePage } from '../utils/interfaces/pages/home-page.interface';
import WelcomeSection from '../components/home/WelcomeSection';
import Meta from '../components/common/Meta';

interface Props {
    homePage: IHomePage;
}

const IndexPage: NextPage<Props> = ({ homePage: page }) => {
    return (<>
        <Meta seo={page.seo} />
        <HeroSlider subtitle={page.mainHeader.subtitle} title={page.mainHeader.title} paragraph={page.mainHeader.paragraph} />
        <GeneralInfoSection />
        <WelcomeSection />
    </>
    );
}

IndexPage.getInitialProps = async ({ req }): Promise<any> => {
    const homePage = await fetchHomePage();
    return {
        homePage
    }
}

export default IndexPage