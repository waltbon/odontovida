import React from 'react';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import BlockContent from '../ui/BlockContent';
import ServiceFormCard from './ServiceFormCard';

interface Props {
    doctor: IDoctor;
}

export default class extends React.Component<Props> {
    render() {
        return (<>
            <div id="txt-widget" className="sidebar-div mb-50">
                {/* Title */}
                <h5 className="h5-sm steelblue-color">Nuestro especialista</h5>
                {/* Head of Clinic */}
                <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                    {/* Avatar */}
                    <div className="txt-widget-avatar">
                        <img src="https://pbs.twimg.com/profile_images/703321160889585664/v3XbO7MU_400x400.jpg" alt="testimonial-avatar" />
                    </div>
                    {/* Data */}
                    <div className="txt-widget-data">
                        <h5 className="h5-md steelblue-color">{this.props.doctor.fullname}</h5>
                        <span>{this.props.doctor.title}</span>
                        <p className="blue-color">1-800-1234-567</p>
                    </div>
                </div>	{/* End Head of Clinic */}
                {/* Text */}
                <p className="p-sm">
                    <BlockContent blocks={this.props.doctor.description} />
          </p>
                {/* Button */}
                <a href="about.html" className="btn btn-blue blue-hover">Learn More</a>
            </div>	{/* END TEXT WIDGET */}
            {/* SIDEBAR TABLE */}
            <div className="sidebar-table blue-table sidebar-div mb-50">
                {/* Title */}
                <h4 className="h4-md">Solicite su cita</h4>
                {/* Text */}
                <p className="p-sm pb-4">Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at
                tempus feugiat dolor lacinia cursus nulla vitae massa
          </p>
                <ServiceFormCard />
                <h5 className="h5-xs">Need a personal health plan?</h5>
                {/* Text */}
                <p className="p-sm">Porta semper lacus cursus, and feugiat primis ultrice ligula at risus auctor</p>
            </div>	{/* END SIDEBAR TABLE */}
            {/* SIDEBAR TIMETABLE */}
            <div className="sidebar-timetable sidebar-div mb-50">
                {/* Title */}
                <h5 className="h5-md mb-20">Doctors Timetable</h5>
                {/* Text */}
                <p className="p-sm">Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at
                tempus feugiat dolor lacinia cursus nulla vitae massa
          </p>
                {/* Button */}
                <a href="about.html" className="btn btn-blue blue-hover mt-10">View Timetable</a>
            </div>	{/* END SIDEBAR TABLE */}
        </>
        )
    }
}