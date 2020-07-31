import React from 'react'
import { NextPage } from 'next';
import { IService } from '../../../../utils/interfaces/pages/service.interface';
import { IDepartment } from '../../../../utils/interfaces/pages/department.interface';
import { IGeneralInfo } from '../../../../utils/interfaces/pages/general-info.interface';
import Layout from '../../../../components/common/Layout';
import { DoctorsApi, MainInfoApi } from '../../../../lib/api';
import DoctorBreadcrumb from '../../../../components/doctors/DoctorBreadcrumb';
import { IDoctor } from '../../../../utils/interfaces/pages/doctor.interface';
import DoctorDetailSection from '../../../../components/doctors/DoctorDetailSection';


interface Props {
    mainInfo: {
        services: IService[],
        generalInfo: IGeneralInfo;
        departments: IDepartment[];
        allDoctors: IDoctor[];
    }
    doctor: IDoctor
}

const IndexPage: NextPage<Props> = ({ doctor, mainInfo }) => {
    return (
        <Layout menu={{ 
                allDoctors: mainInfo.allDoctors,
                generalInfo: mainInfo.generalInfo,
                services: mainInfo.services, 
                departments: mainInfo.departments }} seo={{
                    title: doctor.fullname,
                    description: doctor.description
                }}>

            <DoctorBreadcrumb doctor={doctor} />
            <DoctorDetailSection doctor={doctor} />
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ req, query }): Promise<any> => {
    const { doctorslug } = query;
    const mainInfo = await MainInfoApi.getMainInfo();
    const doctor = await DoctorsApi.getSingleDoctor(doctorslug as string);
    const data = {
        mainInfo,
        doctor
    };
    return data;
}

export default IndexPage