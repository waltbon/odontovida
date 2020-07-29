import React from 'react'
import { NextPage } from 'next';
import Layout from '../components/common/Layout';
import HeroSlider from '../components/sliders/HeroSlider';
import GeneralInfoSection from '../components/info/GeneralInfoSection';
import { fetchHomePage } from '../lib/sanity/queries';
import { IHomePage } from '../utils/interfaces/pages/home-page.interface';
import { IService } from '../utils/interfaces/pages/service.interface';
import { MainInfoApi } from '../lib/api';
import { IDepartment } from '../utils/interfaces/pages/department.interface';
import WelcomeSection from '../components/home/WelcomeSection';
import { IGeneralInfo } from '../utils/interfaces/pages/general-info.interface';
import { IDoctor } from '../utils/interfaces/pages/doctor.interface';

interface Props {
    homePage: IHomePage;
    mainInfo: {
        services: IService[],
        departments: IDepartment[];
        generalInfo: IGeneralInfo;
        allDoctors: IDoctor[]
    }
}

const IndexPage: NextPage<Props> = ({ homePage: page, mainInfo }) => {
    return (
        <Layout menu={{ 
                allDoctors: mainInfo.allDoctors,
                generalInfo: mainInfo.generalInfo,
                services: mainInfo.services, 
                departments: mainInfo.departments }} seo={page.seo}>
            <HeroSlider subtitle={page.mainHeader.subtitle} title={page.mainHeader.title} paragraph={page.mainHeader.paragraph} />
            <GeneralInfoSection />
            <WelcomeSection />
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ req }): Promise<any> => {
    const homePage = await fetchHomePage()    
    const mainInfo = await MainInfoApi.getMainInfo();
    return {
        homePage,
        mainInfo
    }
}

export default IndexPage