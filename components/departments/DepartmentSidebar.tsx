import React from 'react';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';
import ServiceFormCard from '../service/ServiceFormCard';

interface Props {
    department: IDepartment;
    departments: IDepartment[];
    currentDptId: string;
}

export default class extends React.Component<Props> {
    render() {
        return (<>
            {/* SIDEBAR TABLE */}
            <div className="sidebar-table sidebar-div mb-50">
                <h4 className="h4-md">Solicite su cita</h4>
                <p className="p-sm pb-4">Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at
                tempus feugiat dolor lacinia cursus nulla vitae massa
                    </p>

                <ServiceFormCard serviceType="department" currentServiceId={this.props.currentDptId} services={this.props.departments} />

                <h5 className="h5-xs">Need a personal health plan?</h5>
                {/* Text */}
                <p className="p-sm">Porta semper lacus cursus, and feugiat primis ultrice ligula at risus auctor</p>
            </div>	{/* END SIDEBAR TABLE */}
            {/* SIDEBAR TIMETABLE */}
            <div className="sidebar-timetable sidebar-div mb-50">
                <h5 className="h5-md mb-20">Doctors Timetable</h5>
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