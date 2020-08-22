import React from 'react'
import { NextPage } from 'next';
import HeroSlider from '../components/sliders/HeroSlider';
import { fetchHomePage } from '../lib/sanity/queries';
import { IHomePage } from '../utils/interfaces/pages/home-page.interface';
import WelcomeSection from '../components/home/WelcomeSection';
import Meta from '../components/common/Meta';
import ServiceTabsContainer from '../components/service/ServiceTabsContainer';
import SectionTitle from '../components/common/SectionTitle';
import ServiceBox from '../components/common/ServiceBox';
import { MainInfoContext } from '../contexts/MainInfoContext';
import SlidesContainer from '../components/sliders/SlidesContainer';
import AboutSection from '../components/home/AboutSection';
import AboutSectionItem from '../components/home/AboutSectionItem';
import Layout from '../components/common/Layout';
import CarouselContainer from '../components/service/CarouselContainer';
import TestimonialReview from '../components/home/TestimonialReview';
import { generateDepartmentUrl } from '../utils/common/urls';

interface Props {
    homePage: IHomePage;
}

const IndexPage: NextPage<Props> = ({ homePage: page }) => {
    return (
        <Layout>
            <MainInfoContext.Consumer>
                {
                    value => (<>
                        <Meta seo={page.seo} />

                        <SlidesContainer>
                            <HeroSlider subtitle={page.mainHeader.subtitle} title={page.mainHeader.title} paragraph={page.mainHeader.paragraph} />
                        </SlidesContainer>

                        <AboutSection>
                            {
                                Array.isArray(page.aboutSection) && page.aboutSection.map((item, ix) => {
                                    let callToAction: { text: string, url: string } = null;

                                    if (ix < 2) {
                                        callToAction = {
                                            text: ix === 0 ? 'Ver especialidades' : 'Ver tratamientos',
                                            url: ix === 0 ? '/especialidades' : '/servicios'
                                        };
                                    }
                                    return (<AboutSectionItem key={ix} title={item.title}
                                        subtitle={item.subtitle}
                                        paragraph={item.paragraph}
                                        phone={value.generalInfo.mainPhone}
                                        callToAction={callToAction}
                                        includePhone={ix === 2} />
                                    )
                                }
                                )
                            }
                        </AboutSection>

                        {/* // <GeneralInfoSection /> */}

                        <WelcomeSection doctorPrincipal={value.principalDoctor} title={page.welcomeSection.title} subtitle={page.welcomeSection.subtitle} description={page.welcomeSection.description} />

                        <section id="doctors-1" className="wide-100 mt-60 bg-lightgrey doctors-section division">
                            <div className="container">
                                <SectionTitle title="Tratamientos que ofrecemos"
                                    description="Odontología general... Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat" />
                                <ServiceTabsContainer />
                            </div>
                        </section>

                        <section id="info-6" className="bg-blue info-section division">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="txt-block pc-30 white-color wow fadeInUp" data-wow-delay="0.4s">
                                            {/* Section ID */}
                                            <span className="section-id id-color">Qualified Doctors</span>
                                            {/* Title */}
                                            <h3 className="h3-md">Group of Certified and Experienced Doctors</h3>
                                            {/* CONTENT BOX #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon"><i className="fas fa-genderless" /></div>
                                                <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                                turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar massa purus nulla
          </p>
                                            </div>
                                            {/* CONTENT BOX #2 */}
                                            <div className="box-list">
                                                <div className="box-list-icon"><i className="fas fa-genderless" /></div>
                                                <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium
                                                purus feugiat dolor impedit
          </p>
                                            </div>
                                            {/* CONTENT BOX #3 */}
                                            <div className="box-list">
                                                <div className="box-list-icon"><i className="fas fa-genderless" /></div>
                                                <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium
                                                purus feugiat dolor impedit magna purus pretium gravida donec ligula massa in faucibus
          </p>
                                            </div>
                                            {/* Button */}
                                            <a href="all-doctors.html" className="btn btn-tra-white blue-hover mt-25">Meet The Doctors</a>
                                        </div>
                                    </div>
                                </div>	  {/* End row */}
                            </div>
                            <div className="info-6-img text-center"></div>

                        </section>





                        <section id="services-7" className="wide-100 mt-40 servicess-section division">
                            <div className="container">
                                <SectionTitle title="Especialidades" description="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus,
                        blandit posuere ligula varius congue cursus porta feugiat" />

                                <div className="row">
                                    <div className="col-md-12">
                                        <CarouselContainer>
                                            {
                                                value.departments.map(dpt =>
                                                    <ServiceBox url={generateDepartmentUrl(dpt)} key={dpt._id} title={dpt.title} description={dpt.description} />)
                                            }
                                        </CarouselContainer>
                                    </div>

                                </div>
                            </div>
                        </section>


                        <section id="reviews-2" className="bg-lightgrey wide-100 reviews-section division">
                            <div className="container">
                                <SectionTitle title="¿Qué dicen nuestros clientes?" description="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus,
                        blandit posuere ligula varius congue cursus porta feugiat" />

                                <CarouselContainer>
                                    {
                                        Array.isArray(page.testimonials) &&
                                        page.testimonials.map(testimonial => <TestimonialReview text={testimonial.text} name={testimonial.name} />)
                                    }
                                </CarouselContainer>
                            </div>
                        </section>
                    </>)
                }
            </MainInfoContext.Consumer>
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ req, res }): Promise<any> => {
    return {
        homePage: await fetchHomePage()
    }
}

export default IndexPage