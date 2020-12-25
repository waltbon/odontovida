import React from 'react';
import ServicesMenu from './menu/ServicesMenu';
import DepartmentsMenu from './menu/DepartmentsMenu';
import { MainInfoContext } from '../../contexts/MainInfoContext';

export default class extends React.Component {

    componentDidMount() {
        require('../../public/js/sticky');
        require('../../public/js/menu');
    }

    render() {
        return (
            <>
                <MainInfoContext.Consumer>
                    {(value) => (
                        <header id="header-2" className="header ">
                            <div className="wsmobileheader clearfix">
                                <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
                                <span className="smllogo"><img src="/images/logo.jpg" width={140} height={50} alt="mobile-logo" /></span>
                                <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone" /></a>
                            </div>

                            {/* HEADER STRIP */}
                            <div className="headtoppart bg-blue clearfix">
                                <div className="headerwp clearfix">
                                    {/* Address */}
                                    <div className="headertopleft">
                                        <div className="address clearfix"><span><i className="fas fa-map-marker-alt" /> {value.generalInfo.shortAddress}
                                        </span> <a href={`tel:${value.generalInfo.mainPhone}`} className="callusbtn"><i className="fas fa-phone" />{value.generalInfo.mainPhone}</a>
                                        </div>
                                    </div>
                                    {/* Social Links */}
                                    <div className="headertopright">
                                        <a className="googleicon" title="WhatsApp" href={`https://wa.me/${value.generalInfo.mainPhone.trim().replace('+','').replace(' ','')}`}><i className="fab fa-whatsapp" /> <span className="mobiletext02">WhatsApp</span></a>
                                        <a className="facebookicon" title="Facebook" href="#"><i className="fab fa-facebook-f" /> <span className="mobiletext02">Facebook</span></a>
                                    </div>
                                </div>
                            </div>	{/* END HEADER STRIP */}


                            <div className="hero-widget clearfix">
                                <div className="container">
                                    <div className="row d-flex align-items-center">
                                        {/* LOGO IMAGE */}
                                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                                        <div className="col-md-5 col-xl-6">
                                            <div className="desktoplogo"><a href="/"><img src="/images/logo.jpg" width={180} height={65} alt="header-logo" /></a></div>
                                        </div>
                                        {/* WIDGETS */}
                                        <div className="col-md-7 col-xl-6">
                                            <div className="row">
                                                {/* Emergency Cases Widget 
						    		<div class="col-md-6">
						    			<div class="header-widget icon-xs">
						    				<span class="flaticon-039-emergency-call-1 blue-color"></span>
							    			<div class="header-widget-txt">
								    			<p>Emergency Cases</p> 
												<p class="header-widget-phone steelblue-color">1-800-123-4560</p>
											</div>
						    			</div>
						    		</div>*/}
                                                {/* Working Hours Widget */}
                                                <div className="col-md-6">
                                                    <div className="header-widget icon-xs">
                                                        <span className="flaticon-092-clock blue-color" />
                                                        <div className="header-widget-txt">
                                                            <p className="txt-400">{value.generalInfo.shortSchedule}</p>
                                                            <p className="lightgrey-color">Domingos cerrado</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Location Widget */}
                                                <div className="col-md-6">
                                                    <div className="header-widget icon-xs">
                                                        <span className="flaticon-021-hospital-9 blue-color" />
                                                        <div className="header-widget-txt">
                                                            <p className="txt-400">Desamparados, San José</p>
                                                            <p className="lightgrey-color">¿Cómo llegar?
                                                <a href=""> Ver en Waze</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>	{/* END WIDGETS */}
                                    </div>
                                </div>
                            </div>	{/* END HEADER WIDGETS */}

                            {/* NAVIGATION MENU */}
                            <div className="wsmainfull menu clearfix">
                                <div className="wsmainwp clearfix">
                                    {/* LOGO IMAGE */}
                                    {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                                    <div className="desktoplogo"><a href="#hero-9"><img src="/images/logo.jpg" width={120} height={50} alt="header-logo" /></a></div>
                                    {/* MAIN MENU */}
                                    <nav className="wsmenu clearfix">
                                        <ul className="wsmenu-list">
                                            {/* DROPDOWN MENU */}
                                            <ServicesMenu services={value.services} />
                                            <DepartmentsMenu doctors={value.doctors} departments={value.departments} />

                                            <li aria-haspopup="true"><a href="/centro-radiologico">Centro Radiológico</a></li>
                                            {/* <li className="nl-simple" aria-haspopup="true"><a href="/especialistas">Doctores</a></li> */}
                                            {/* <li className="nl-simple" aria-haspopup="true"><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li> */}
                                            <li className="nl-simple" aria-haspopup="true"><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li>
                                            {/* HIDDEN NAVIGATION MENU BUTTON */}
                                            <li className="nl-simple header-btn" aria-haspopup="true"><a className="blue-hover" href="/contacto">¡Escríbanos ahora!</a></li>
                                        </ul>
                                    </nav>	{/* END MAIN MENU */}
                                    {/* NAVIGATION MENU BUTTON */}
                                    <div className="header-button">
                                        <span className="nl-simple header-btn"><a href="/contacto">¡Contáctenos ahora!</a></span>
                                    </div>
                                </div>
                            </div>	{/* END NAVIGATION MENU */}
                        </header>)}
                </MainInfoContext.Consumer>
            </>)
    }
}