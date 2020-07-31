import Layout from '../../components/common/Layout';
import { NextPage } from 'next';
import { CommonAppProps } from '../../utils/interfaces/pages/app';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { fetchSingleService } from '../../lib/sanity/queries';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import BlockContent from '../../components/ui/BlockContent';
import { MainInfoContext } from '../../contexts/MainInfoContext';

interface Props {
    service: IService
}

const ServicePage: NextPage<Props> = ({
    service }) => {
    const breadcrumbsList = [{
        text: 'Servicios y tratamientos',
        url: '/servicios',
    }, {
        text: service.title,
        url: `/servicios/${service.slug}`,
    }]
    return (<>
        <MainInfoContext.Consumer>
            {
                value => (<>
                    <Breadcrumbs title={service.title} list={breadcrumbsList} />

                    <div id="service-page" className="wide-60 service-page-section division">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-8">
                                    <div className="s2-page pr-30 mb-40">
                                        <h3 className="h3-md blue-color">{service.title}</h3>
                                        <h4 className="h4-sm blue-color">{service.subtitle}</h4>

                                        <BlockContent blocks={service.body} />
                                    </div>
                                </div>

                                <div id="sidebar" className="col-lg-4">
                                    <ServiceSidebar currentServiceId={service._id} services={value.services} doctor={service.doctor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </MainInfoContext.Consumer>
    </>);
}


ServicePage.getInitialProps = async ({ req, query }): Promise<any> => {
    const { servicioslug } = query;
    const service = await fetchSingleService(servicioslug as string);
    return {
        service
    }
}


export default ServicePage;