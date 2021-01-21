import React from 'react'
import { NextPage } from 'next';
import { DoctorsApi } from '../../lib/api';
import DoctorBreadcrumb from '../../components/doctors/DoctorBreadcrumb';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import DoctorDetailSection from '../../components/doctors/DoctorDetailSection';
import Meta from '../../components/common/Meta';
import { MainInfoContext } from '../../contexts/MainInfoContext';
import Layout from '../../components/common/Layout';
import { fetchSingleDoctor } from '../../lib/sanity/queries';


interface Props {
    doctor: IDoctor
}

const IndexPage: NextPage<Props> = ({ doctor }) => {
    return (
        <Layout>
            <Meta seo={{
                title: `${doctor.fullname}. Clínica Dental Odontovida`,
                description: `Conozca más sobre nuestro especialista`
            }} />
            <MainInfoContext.Consumer>
                {
                    value => (<>
                        <Meta seo={{ title: doctor.fullname, description: doctor.description }} />
                        <DoctorBreadcrumb doctor={doctor} />
                        <DoctorDetailSection doctor={doctor} phone={value.generalInfo.mainPhone} email={value.generalInfo.contactEmail} />
                    </>)
                }
            </MainInfoContext.Consumer>
    </Layout>
    );
}

IndexPage.getInitialProps = async ({ req, query }): Promise<any> => {
    const { doctorslug } = query;
    const doctor = await fetchSingleDoctor.getSingleDoctor(doctorslug as string);
    return {
        doctor
    };
}

export default IndexPage