import React from 'react';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';
import ServiceFormCard from '../service/ServiceFormCard';
import SidebarMeetDoctors from '../sidebar/SidebarMeetDoctors';

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
                <h4 className="h4-md">Contáctenos ahora</h4>
                <p className="p-sm pb-4">¡Queremos ayudarle! Si tiene alguna consulta <strong> nosotros le podemos ayudar</strong>, déjenos su mensaje y le contactaremos para brindarle la información completa.</p>

                <ServiceFormCard serviceType="department" currentServiceId={this.props.currentDptId} services={this.props.departments} />

                <h5 className="h5-xs">¿Necesita una consulta?</h5>
                {/* Text */}
                <p className="p-sm">Siéntase libre de escribirnos y le responderemos lo más pronto posible
                </p>
            </div>	{/* END SIDEBAR TABLE */}
            <SidebarMeetDoctors/>
        </>
        )
    }
}