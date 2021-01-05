import React from 'react';
import { MainInfoContext } from '../../contexts/MainInfoContext';
import { generateDepartmentUrl } from '../../utils/common/urls';

export default class extends React.Component {
    render() {
        return (<>
            <MainInfoContext.Consumer>
                {(value) => (
                    <footer id="footer-2" className="wide-40 footer division">
                        <div className="container">
                            {/* FOOTER CONTENT */}
                            <div className="row">
                                {/* FOOTER INFO */}
                                <div className="col-md-6 col-lg-4">
                                    <div className="footer-info mb-40">
                                        {/* Footer Logo */}
                                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80  pixels) */}
                                        <img src="/images/logo.jpg" width={220} height={80} alt="footer-logo" />
                                        {/* Email */}
                                        <p className="foo-email">E: <a href={`mailto:${value.generalInfo.contactEmail}`}>{value.generalInfo.contactEmail}</a></p>
                                        {/* Phone */}
                                        <p>P: {value.generalInfo.mainPhone}</p>
                                        {/* Social Icons */}
                                        <div className="footer-socials-links mt-20">
                                            <ul className="foo-socials text-center clearfix">
                                                <li><a href={value.generalInfo.socialMedia.facebook} target="__blank" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href={value.generalInfo.socialMedia.instagram} target="__blank" className="ico-instagram"><i className="fab fa-instagram" /></a></li>
                                                {/*
										<li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
										<li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>											
										<li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
										<li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
										<li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>									
										<li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>											
										<li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
										<li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
										<li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
									    */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>	{/* END FOOTER INFO */}
                                {/* FOOTER PRODUCTS LINKS */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="footer-links mb-40">
                                        {/* Title */}
                                        <h5 className="h5-xs">Servicios</h5>
                                        {/* Footer List */}
                                        <ul className="clearfix" style={{paddingInlineStart: "10px" }}>
                                            {
                                                Array.isArray(value.services) && value.services.map(service => (
                                                    <li key={service._id}><a href={`/servicios/${service.slug}`}>{service.title}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* FOOTER COMPANY LINKS */}
                                <div className="col-md-6 col-lg-2">
                                    <div className="footer-links mb-40">
                                        {/* Title */}
                                        <h5 className="h5-xs">Especialidades</h5>
                                        {/* Footer Links */}
                                        <ul className="clearfix" style={{paddingInlineStart: "0px" }}>
                                            {
                                                Array.isArray(value.departments) && value.departments.map(dpt => (
                                                    <li key={dpt._id}><a href={generateDepartmentUrl(dpt)}>{dpt.title}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="footer-links mb-20">
                                        <h5 className="h5-xs">¿Cómo podemos ayudarle?</h5>
                                        <ul className="clearfix" style={{paddingInlineStart: "0px" }}>
                                            <li><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li>
                                            <li><a href="/especialistas">Conozca nuestros doctores</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	  {/* END FOOTER CONTENT */}
                            {/* FOOTER COPYRIGHT */}
                            <div className="bottom-footer">
                                <div className="row">
                                    <div className="col-md-12 block">
                                        <p className="footer-copyright">Clínica Espcializada Odontovida, 2021.
                                            <span className="pull-right" style={{ color: 'rgb(185 185 185)' }}> Desarrollado por <a style={{ height: 100, textDecoration: 'underline', color: 'rgb(185 185 185)' }} target="__blank" href="https://cabanadata.com?ref=odontovida">Cabana Data</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>	   {/* End container */}
                    </footer>)}
            </MainInfoContext.Consumer>
        </>
        )
    }
}