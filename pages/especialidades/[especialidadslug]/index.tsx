import { NextPage } from 'next';
import Layout from '../../../components/common/Layout';
import { MainInfoContext } from '../../../contexts/MainInfoContext';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { IDepartment } from '../../../utils/interfaces/pages/department.interface';
import { fetchDepartments } from '../../../lib/sanity/queries';
import BlockContent from '../../../components/ui/BlockContent';
import DepartmentSidebar from '../../../components/departments/DepartmentSidebar';
import { generateDepartmentUrl } from '../../../utils/common/urls';

interface Props {
    department: IDepartment;
}

const IndexPage: NextPage<Props> = ({ department }) => {
    const breadcrumbsList = [{
        text: 'Inicio',
        url: '/',

    }, {
        text: department.title,
        url: generateDepartmentUrl(department)
    }];

    return (
        <Layout>
            <MainInfoContext.Consumer>
                {
                    (value) => (
                        <>
                            <Breadcrumbs title={`¿Qué necesito saber sobre ${department.title}?`} list={breadcrumbsList} />
                            <div id="service-page" className="wide-60 service-page-section division">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-lg-8">
                                            <div className="s1-page content-block text-left">
                                                <h3 className="h3-xl blue-color">{department.title}</h3>
                                                <p className="p-lg">{department.shortDescription}</p>
                                                <BlockContent blocks={department.body} />
                                            </div>
                                        </div>

                                        <div id="sidebar" className="col-lg-4">
                                            <DepartmentSidebar
                                                currentDptId={department._id}
                                                department={department}
                                                departments={value.departments} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                }
            </MainInfoContext.Consumer>
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ query }) => {
    const { especialidadslug } = query;
    const department = await fetchDepartments.fetchSingleDepartment(especialidadslug as string);
    return {
        department
    }
}

export default IndexPage;