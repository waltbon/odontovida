import React from 'react';
import { generateDepartmentUrl, generateDoctorUrl } from '../../../utils/common/urls';
import { IDepartment } from '../../../utils/interfaces/pages/department.interface';
import { IDoctor } from '../../../utils/interfaces/pages/doctor.interface';

interface Props {
    departments: IDepartment[];
    doctors: IDoctor[];
}

interface State {
}

export default class extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }


    render() {
        return (<li aria-haspopup="true"><a href="#">Especialidades <span className="wsarrow" /></a>
        <div className="wsmegamenu clearfix">
            <div className="container">
                <div className="row">
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Especialidades:</li>
                        {
                            Array.isArray(this.props.departments) && this.props.departments.map(dpt =>
                                (<li key={dpt._id}><a href={generateDepartmentUrl(dpt)}>{dpt.title}</a></li>))
                        }
                    </ul>
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Nuestros especialistas:</li>
                            <li><a href="/especialistas">Ver todos los especialistas</a></li>
                        {
                            Array.isArray(this.props.doctors) && this.props.doctors?.sort(dr => dr.order).map(dr =>
                                (<li key={dr._id}><a href={generateDoctorUrl(dr)}>{dr.fullname}</a></li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </li>)
    }
}