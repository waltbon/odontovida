import { NextPage } from 'next';
import Layout from '../../../components/common/Layout';
import { MainInfoContext } from '../../../contexts/MainInfoContext';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { IDepartment } from '../../../utils/interfaces/pages/department.interface';
import { fetchDepartments } from '../../../lib/sanity/queries';

interface Props {
    department: IDepartment;
}

const IndexPage: NextPage<Props> = ({ department }) => {
    const breadcrumbsList = [{
        text: '',
        url: ''
    }];

    return (
        <Layout>
            <MainInfoContext.Consumer>
                {
                    (value) => (
                        <>
                            <Breadcrumbs title={department.title} list={breadcrumbsList} />
                            <div id="service-page" className="wide-60 service-page-section division">
                                <div className="container">
                                    <div className="s1-page content-block text-center">
                                        <h3 className="h3-xl blue-color">{department.title}</h3>
                                        {/* <h4 className="h4-md blue-color">Maecenas gravida porttitor nunc, magna luctus tempor viverra</h4> */}
                                        <p className="p-lg">{department.description}</p>
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