import { NextPage } from 'next'
import { IService } from '../../utils/interfaces/pages/service.interface';
import Layout from '../../components/common/Layout';
import { MainInfoContext } from '../../contexts/MainInfoContext';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { generateDoctorUrl } from '../../utils/common/urls';
import { urlFor } from '../../lib/sanity/imageBuilder';

interface Props {
}

const DoctorsPage: NextPage<Props> = () => {
    return (<Layout>
        <MainInfoContext.Consumer>
            {
                value => (
                    <>
                        {/* <Breadcrumbs title="Conozca a los especialistas" list={null} /> */}

                        <section id="doctors-3" className="bg-lightgrey wide-60 doctors-section division">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1 section-title">
                                        {/* Title 	*/}
                                        <h3 className="h3-md steelblue-color">Nuestros especialistas</h3>
                                        {/* Text */}
                                        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus,
                                        blandit posuere ligula varius congue cursus porta feugiat
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    {
                                        value.doctors?.map(dr => (
                                            <div className="col-md-6 col-lg-4">
                                                <div className="doctor-2">
                                                    {/* Doctor Photo */}
                                                    <div className="hover-overlay">
                                                        <img className="img-fluid" src={urlFor(dr.personalImage).url()} alt="doctor-foto" />
                                                    </div>
                                                    {/* Doctor Meta */}
                                                    <div className="doctor-meta">
                                                        <h5 className="h5-xs blue-color">{dr.fullname}</h5>
                                                        <span>{dr.title}</span>
                                                        {/* Button */}
                                                        <a className="btn btn-sm btn-blue blue-hover mt-15" href={generateDoctorUrl(dr)}>Ver información detallada</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div></div></section>

                    </>)
            }
        </MainInfoContext.Consumer>
    </Layout>)
}

export default DoctorsPage;