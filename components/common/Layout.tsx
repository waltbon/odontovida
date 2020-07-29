import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ISeo from '../../utils/interfaces/pages/seo.interface';
import Head from 'next/head';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';
import { IGeneralInfo } from '../../utils/interfaces/pages/general-info.interface';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';

interface Props {
    seo: ISeo;
    menu: {
        services: IService[],
        departments: IDepartment[],
        generalInfo: IGeneralInfo,
        allDoctors: IDoctor[]
    }
}

export default class extends React.Component<Props> {
    render() {
        return (
            <>
                <Head>
                    {
                        this.props.seo &&
                        <>
                            <title>{this.props.seo.title}</title>
                            <meta name="description" content={this.props.seo.description} />
                        </>
                    }
                </Head>
                <div id="page" className="page">
                    <Header
                        allDoctors={this.props.menu.allDoctors}
                        generalInfo={this.props.menu.generalInfo}
                        departments={this.props.menu.departments}
                        services={this.props.menu.services} />
                    {this.props.children}
                    <Footer />
                </div>
            </>
        );
    }
}