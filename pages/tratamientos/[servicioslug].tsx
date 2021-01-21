import Layout from '../../components/common/Layout';
import { NextPage } from 'next';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { fetchServices } from '../../lib/sanity/queries';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import BlockContent from '../../components/ui/BlockContent';
import { MainInfoContext } from '../../contexts/MainInfoContext';
import Meta from '../../components/common/Meta';

interface Props {
    service: IService
}

const ServicePage: NextPage<Props> = ({
    service }) => {
    const breadcrumbsList = [{
        text: 'Inicio',
        url: '/',
    }, {
        text: 'Servicios',
        url: '/servicios',
    }, {
        text: service.title,
        url: `/servicios/${service.slug}`,
    }]
    return (<Layout>
        <Meta seo={{
            title: `${service.title}. Clínica Dental Odontovida`,
            description: `${service.shortDescription}`
        }} />

        {/* <Breadcrumbs title={service.subtitle} list={breadcrumbsList} /> */}

        <div id="service-page" className="wide-60 service-page-section division border-bottom-lime">
            <div className="container">
                <div className="row">

                    <div className="col-lg-7">
                        <div className="s2-page pr-30 mb-40">
                            <h2 className="h2-md blue-color border-bottom-lime">{service.title}</h2>

                            {/* <h4 className="h4-sm blue-color">{service.subtitle}</h4> */}

                        </div>
                        <div style={{ paddingRight: '40px', textAlign: 'justify' }}>
                            <BlockContent blocks={service.body} />
                        </div>
                    </div>

                    <div id="sidebar" className="col-lg-4 offset-lg-1">
                        <MainInfoContext.Consumer>
                            {
                                value => (<>
                                    <ServiceSidebar currentServiceId={service._id} services={value.services} doctor={service.doctor} />
                                </>)
                            }
                        </MainInfoContext.Consumer>
                    </div>
                </div>
            </div>
        </div>
    </Layout>);
}


ServicePage.getInitialProps = async ({ req, query }): Promise<any> => {
    const { servicioslug } = query;
    const service = await fetchServices.fetchSingleService(servicioslug as string);
    return {
        service
    }
}


export default ServicePage;