import React from 'react';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import ServiceFormCard from './ServiceFormCard';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { urlFor } from '../../lib/sanity/imageBuilder';
import SidebarMeetDoctors from '../sidebar/SidebarMeetDoctors';

interface Props {
    doctor: IDoctor;
    services: IService[];
    currentServiceId: string;
}

export default class extends React.Component<Props> {
    render() {
        return (<>
            {
                this.props.doctor &&
                <div id="txt-widget" className="sidebar-div mb-50">
                    {/* Title */}
                    <h5 className="h5-sm steelblue-color">Especialista</h5>
                    {/* Head of Clinic */}
                    <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                        {/* Avatar */}
                        <div className="txt-widget-avatar">
                            <img src={urlFor(this.props.doctor.personalImage).fit('crop').crop('top').url()} alt="testimonial-avatar" />
                        </div>

                        <div className="txt-widget-data">
                            <h5 className="h5-md steelblue-color">{this.props.doctor.fullname}</h5>
                            <span>{this.props.doctor.title}</span>

                            <div className="lime-color pt-2">
                                <a>Ir a su biografía</a>
                            </div>
                        </div>
                    </div>
                    {/* Text */}

                    {/* Button */}
                </div>
            }

            {/* SIDEBAR TABLE */}
            <div className="sidebar-table sidebar-div mb-50">
                <h4 className="h4-md border-bottom-lime">¿Tiene alguna pregunta?</h4>
                <p className="p-sm pb-4">Si tiene alguna consulta <strong> nosotros con todo gusto le podemos ayudar</strong>, déjenos su mensaje y le contactaremos para brindarle la información completa.</p>
                <ServiceFormCard serviceType="service" currentServiceId={this.props.currentServiceId} services={this.props.services} />
            </div>
            
            <SidebarMeetDoctors/>
        </>
        )
    }
}