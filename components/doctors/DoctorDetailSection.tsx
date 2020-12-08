import React from 'react';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import BlockContent from '../ui/BlockContent';

export default class extends React.Component<{
    doctor: IDoctor,
    phone: string;
    email: string;
}> {
    render() {
        return (<section id="doctor-1-details" className="doctor-details-section division">
            <div className="container">
                <div className="row">
                    {/* DOCTOR PHOTO */}
                    <div className="col-md-5">
                        <div className="doctor-photo mb-40">
                            {/* Photo */}
                            <img className="img-fluid" src={this.props.doctor.pictureUrl} alt="doctor-foto" />
                            {/* Doctor Info */}
                            <div className="doctor-info">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Título</td>
                                            <td>{this.props.doctor.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Títulos</td>
                                            <td>
                                                {
                                                    Array.isArray(this.props.doctor.titles) && 
                                                    this.props.doctor.titles.map(title => (
                                                        <span style={{paddingBottom: '12px'}}>
                                                            {title.title}
                                                            <span className="grey-color" style={{marginRight: '20px', display:'block'}}>
                                                            <i className="fas fa-angle-double-right" /> 
                                                            {title.university}, {title.years}
                                                            </span>
                                                        </span>))
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>	{/* End Doctor Info */}
                            {/* Doctor Contacts */}
                            <div className="doctor-contacts text-center">
    <h4 className="h4-xs"><i className="fas fa-mobile-alt" /> {this.props.phone}</h4>
                                <h4 className="h4-xs blue-color"><i className="fas fa-envelope-open-text" />
                                    <a href={`mailto:${this.props.email}`} className="blue-color">{this.props.email}</a>
                                </h4>
                            </div>
                            {/* Buttons */}
                            <div className="doctor-photo-btn text-center">
                                <a href="/contacto" className="btn btn-md btn-blue blue-hover">¿Desea que lo contactemos?</a>
                            </div>
                        </div>
                    </div>	{/* END DOCTOR PHOTO */}
                    {/* DOCTOR'S BIO */}
                    <div className="col-md-7">
                        <div className="doctor-bio">
                            
                            <BlockContent blocks={this.props.doctor.description} />
                            
                        </div>
                    </div>	{/* END DOCTOR BIO */}
                </div>    {/* End row */}
            </div>	   {/* End container */}
        </section>
        )
    }
}