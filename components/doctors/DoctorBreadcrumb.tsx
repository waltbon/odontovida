import React from 'react';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';

interface Props {
    doctor: IDoctor;
}

export default class extends React.Component<Props> {
    render() {
        return (<section id="doctor-breadcrumbs" className="bg-fixed doctor-details-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 offset-md-5">
                        <div className="doctor-data dark-color">
                            <h2 className="h2-xs">{this.props.doctor.fullname}</h2>
                            <h4 className="h4-md blue-color">{this.props.doctor.title}</h4>
                        </div>
                    </div>
                </div>   {/* End row */}
            </div>	  {/* End container */}
        </section>
        )
    }
}