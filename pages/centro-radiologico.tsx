import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/common/Layout';
import Meta from '../components/common/Meta';
import SlidesContainer from '../components/sliders/SlidesContainer';
import { TabNavItem } from '../components/tabs/TabNavItem/TabNavItem';
import { TabPane } from '../components/tabs/TabPane/TabPane';
import { Markdown } from '../components/ui';
import { urlFor } from '../lib/sanity/imageBuilder';
import { centroRadiologicoPageQuery } from '../lib/sanity/queries';
import { ICentroRadiologicoPage } from '../utils/interfaces/pages/centro-radiologico-page.interface';

const CentroRadiologicoPage: NextPage<any> = ({
    centroRadiologicoServices: services,
    ...props
}: ICentroRadiologicoPage) => {
    return (
        <Layout>
            <Meta seo={props.seo} />

            <section id="hero-11" className="bg-fixed hero-section division">
                <SlidesContainer>
                    {
                        props.headerSliders.map((slider, ix) => {
                            const id = `slide-${ix}`;
                            return (
                                <li id={id} key={slider._id}>
                                    {/* Background Image */}
                                    <img  src={urlFor(slider.image).url()} alt="slide-background" />
                                    {/* Image Caption */}
                                    <div className="caption d-flex align-items-center right-align">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-9 col-lg-8 col-xl-7">
                                                    <div className="caption-txt text-left white-color">
                                                        <h2>{slider.title}</h2>
                                                        <div className="box-list">
                                                            <div className="box-list-icon"><i className="fas fa-genderless" /></div>
                                                            <p className="p-md">
                                                                {slider.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        )
                    }
                </SlidesContainer>

            </section>

            <section id="about-5" className="bg-lightgrey pt-100 about-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img text-center wow fadeInUp" data-wow-delay="0.6s">
                                <img className="img-fluid" src={urlFor(props.aboutSection.image).height(620).width(550).url()} alt="about-image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">
                                <span className="section-id blue-color">{props.aboutSection.subtitle}</span>
                                <h3 className="h3-md steelblue-color">{props.aboutSection.title}</h3>
                                <Markdown content={props.aboutSection.description} />
                                <div className="singnature mt-35 mb-15">
                                    <p className="p-small">Atentamente, <br /> Dra. Stephanie Guerreo. <br /> <small className="blue-color"> Odontóloga General, ENFASIS EN CIRUGIA ORAL</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* SERVICE TABS */}
            <section id="tabs-1" className="wide-100 tabs-section division">
                <div className="container">
					<div className="row">	
						<div className="col-lg-10 offset-lg-1 section-title pb-20">		
							<h3 className="h3-md steelblue-color">Servicios que ofrecemos</h3>	
							<p>Estos son los tipos de estudios radiológicos que puede encontrar.</p>
						</div> 
					</div>

                    <div className="row">
                        <div className="col-md-12">
                            <div id="tabs-nav" className="list-group text-center">
                                <ul className="nav nav-pills text-center" id="pills-tab" role="tablist">
                                    {
                                        services.map((service, ix) => (
                                            <TabNavItem key={ix} title={service.name} selected={ix === 0} id={ix.toString()} />
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="tab-content" id="pills-tabContent">
                            {
                                services.map((service, ix) => {
                                    const gallery = Array.isArray(service.centroRadServiceGallery) ? service.centroRadServiceGallery.map(item => {
                                        return {
                                            title: item.title,
                                            url: urlFor(item.image).url()
                                        }
                                    }) : [];
                                    return (
                                    <TabPane 
                                        key={ix}
                                        id={ix.toString()}
                                        selected={ix === 0}
                                        markdownContent={service.content} 
                                        title={service.name} 
                                        gallery={gallery}
                                        imageURL={urlFor(service.image).width(700).height(700).url()}  
                                    />)
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

CentroRadiologicoPage.getInitialProps = () => centroRadiologicoPageQuery.getCentroRadiologicoPage();
export default CentroRadiologicoPage;