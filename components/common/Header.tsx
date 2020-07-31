import React from 'react';
import { IService } from '../../utils/interfaces/pages/service.interface';
import ServicesMenu from './menu/ServicesMenu';
import DepartmentsMenu from './menu/DepartmentsMenu';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';
import { IGeneralInfo } from '../../utils/interfaces/pages/general-info.interface';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';

interface Props {
    services: IService[],
    departments: IDepartment[];
    generalInfo: IGeneralInfo;
    allDoctors: IDoctor[]
}

export default class extends React.Component<Props> {
    render() {
        return (
            <header id="header-2" className="header ">
                <div className="wsmobileheader clearfix">
                    <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
                    <span className="smllogo"><img src="/images/logo.jpg" width={200} height={40} alt="mobile-logo" /></span>
                    <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone" /></a>
                </div>

                {/* HEADER STRIP */}
                <div className="headtoppart bg-blue clearfix">
                    <div className="headerwp clearfix">
                        {/* Address */}
                        <div className="headertopleft">
                            <div className="address clearfix"><span><i className="fas fa-map-marker-alt" /> {this.props.generalInfo.shortAddress}
                            </span> <a href={`tel:${this.props.generalInfo.mainPhone}`} className="callusbtn"><i className="fas fa-phone" />{this.props.generalInfo.mainPhone}</a>
                            </div>
                        </div>
                        {/* Social Links */}
                        <div className="headertopright">
                            <a className="googleicon" title="WhatsApp" href="#"><i className="fab fa-whatsapp" /> <span className="mobiletext02">WhatsApp</span></a>
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
                                                <p className="txt-400">{this.props.generalInfo.shortSchedule}</p>
                                                <p className="lightgrey-color">Domingos cerrado</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Location Widget */}
                                    <div className="col-md-6">
                                        <div className="header-widget icon-xs">
                                            <span className="flaticon-021-hospital-9 blue-color" />
                                            <div className="header-widget-txt">
                                                <p className="txt-400">Desamparados centro</p>
                                                <p className="lightgrey-color">San José, Costa Rica</p>
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
                        <div className="desktoplogo"><a href="#hero-9"><img src="/images/logo.png" width={180} height={40} alt="header-logo" /></a></div>
                        {/* MAIN MENU */}
                        <nav className="wsmenu clearfix">
                            <ul className="wsmenu-list">
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true"><a href="/">Inicio</a></li>

                                <ServicesMenu services={this.props.services} />
                                <DepartmentsMenu doctors={this.props.allDoctors} departments={this.props.departments} />

                                <li className="nl-simple" aria-haspopup="true"><a href="#">Contáctenos</a></li>
                                {/* HIDDEN NAVIGATION MENU BUTTON */}
                                <li className="nl-simple header-btn" aria-haspopup="true"><a className="blue-hover" href="timetable.html">Our Doctors Timetable</a></li>
                            </ul>
                        </nav>	{/* END MAIN MENU */}
                        {/* NAVIGATION MENU BUTTON */}
                        <div className="header-button">
                            <span className="nl-simple header-btn"><a href="timetable.html">
                                <i className="fa fa-calendar" style={{paddingRight: '6px'}}> </i>  
                                Agende una cita</a></span>
                        </div>
                    </div>
                </div>	{/* END NAVIGATION MENU */}
            </header>
        )
    }
}