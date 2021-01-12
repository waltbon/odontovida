import React from 'react'
import { NextPage } from 'next';
import HeroSlider from '../components/sliders/HeroSlider';
import { fetchHomePage, fetchServices } from '../lib/sanity/queries';
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
import { generateDepartmentUrl, generateDoctorUrl } from '../utils/common/urls';
import { urlFor } from '../lib/sanity/imageBuilder';
import VideoSection from '../components/common/VideoSection';
import { IService } from '../utils/interfaces/pages/service.interface';
import { fetchAllDepartments } from '../lib/sanity/queries/departments-query.sanity';
import { IDepartment } from '../utils/interfaces/pages/department.interface';

interface Props {
    homePage: IHomePage;
    allServices: IService[],
    allDepartments: IDepartment[]
}

const IndexPage: NextPage<Props> = ({ homePage: page, allServices, allDepartments }) => {
    return (
        <Layout>
            <Meta seo={page.seo} />
            <MainInfoContext.Consumer>
                {
                    value => (<>
                        <section id="hero-11" className="bg-fixed hero-section division">
                            <SlidesContainer>
                                {
                                    Array.isArray(page.headerSliders) && page.headerSliders.map((slider, ix) => (
                                        <HeroSlider key={ix} sliderId={`slider-${ix}`}
                                            mainImageUrl={urlFor(slider.image).url()}
                                            subtitle={page.mainHeader.subtitle} title={slider.title} paragraph={slider.text} />
                                    ))
                                }
                            </SlidesContainer>
                        </section>
                        <AboutSection>
                            {
                                Array.isArray(page.aboutSection) && page.aboutSection.map((item, ix) => {
                                    let callToAction: { text: string, url: string } = null;

                                    if (ix < 2) {
                                        callToAction = {
                                            text: ix === 0 ? 'Ver tratamientos' : 'Ver especialidades',
                                            url: ix === 0 ? '/#tabs-servicios' : '/#especializades'
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

                        <WelcomeSection callToAction={{
                            text: `Conozca más sobre la doctora`,
                            url: generateDoctorUrl(value.principalDoctor)
                        }}
                            doctorPrincipal={value.principalDoctor}
                            title={page.welcomeSection.title}
                            image={page.welcomeSection.welcomeImage}
                            subtitle={page.welcomeSection.subtitle}
                            description={page.welcomeSection.description} >
                        </WelcomeSection>

                        {/* <KPIsInfo /> */}

                        <section id="tabs-servicios" className="bg-lightgrey wide-100 tabs-section ">
                            <ServiceTabsContainer services={allServices} />
                        </section>

                        <section id="info-6" className="bg-blue info-section division">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="txt-block pc-30 white-color wow fadeInUp" data-wow-delay="0.4s">
                                            {/* Section ID */}
                                            <span className="section-id id-color">{page.doctrosIntroSection.subtitle}</span>
                                            {/* Title */}
                                            <h3 className="h3-md">{page.doctrosIntroSection.title}</h3>
                                            {/* CONTENT BOX #1 */}
                                            <div className="box-list">
                                                <p>{page.doctrosIntroSection.description}</p>
                                            </div>
                                            {/* Button */}
                                            <a href="/especialistas" className="btn btn-tra-white blue-hover mt-25">Conozca a los doctores</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-6-img text-center"></div>

                        </section>

                        <section id="especializades" className="wide-100 mt-40 servicess-section division">
                            <div className="container">
                                <SectionTitle title="Especialidades" description="¿Sabe que tipo de especialidades existen? Nosotros podemos ayudarle ante cualquier necesidad sobre ellas." />

                                <div className="row">
                                    <div className="col-md-12">
                                        <CarouselContainer>
                                            {
                                                allDepartments.map(dpt =>
                                                    <ServiceBox mainImage={dpt.mainImage}
                                                        icon={dpt.icon}
                                                        url={generateDepartmentUrl(dpt)}
                                                        key={dpt._id}
                                                        title={dpt.title}
                                                        description={dpt.description} />)
                                            }
                                        </CarouselContainer>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section id="reviews-2" className="bg-lightgrey wide-100 reviews-section division">
                            <div className="container">
                                <SectionTitle title="Testimoniales" description="Conozca qué dicen nuestros clientes sobre nuestro servicio" />
                                <CarouselContainer>
                                    {
                                        Array.isArray(page.testimonials) &&
                                        page.testimonials.map((testimonial, ix) => <TestimonialReview key={ix} text={testimonial.text} name={testimonial.name} />)
                                    }
                                </CarouselContainer>


                            </div>
                        </section>

                        <VideoSection descriptions={[
                            "Nuestros pacientes son importantes y una de nuestras prioridades es saber cómo ha sido su experiencia.",
                            "Somos una familia y así es como deseamos que todos se sientan cuando son atendidos, que se sientan en casa.",
                            "Aquí encontraras algunas opiniones de nuestros pacientes."]}
                            videoUrl={"https://www.youtube.com/watch?v=hJCzj5cxOV0"} title="Testimonial" subtitle={"¿Qué dicen nuestros clientes?"}>
                        </VideoSection>
                    </>)
                }
            </MainInfoContext.Consumer>
        </Layout>
    );
}

IndexPage.getInitialProps = async ({ req, res }): Promise<any> => {
    const prom = await Promise.all([
        fetchHomePage(), fetchServices.fetchAllServicesDetails(), fetchAllDepartments()
    ]);
    return {
        homePage: prom[0],
        allServices: prom[1],
        allDepartments: prom[2]
    }
}

export default IndexPage