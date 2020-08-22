import React from 'react';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';

export default class extends React.Component<{
    title: string;
    subtitle: string;
    description: string;
    doctorPrincipal: IDoctor;
}> {
    render() {
        return (
            <section id="info-4" className="pt-100 mt-20 mb-40 about-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-lg-6">
                            <div className="about-img text-center wow fadeInUp" data-wow-delay="0.6s">
                                <img className="img-fluid" src="/images/temp/stephanie-2.jpg" alt="about-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-lg-6">
                            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">

                                <span className="section-id blue-color">{this.props.subtitle}</span>
                                <h3 className="h3-md steelblue-color">{this.props.title}</h3>
                                <p>{this.props.description}</p>

                                {
                                    !!this.props.doctorPrincipal &&
                                    <div className="singnature mt-35">
                                        <p className="p-small mb-15">
                                            {this.props.doctorPrincipal.fullname} 
                                        <br/> {this.props.doctorPrincipal.title}</p>
                                        {/* <img className="img-fluid" src="/images/signature.png" width={200} height={34} alt="signature-image" /> */}
                                    </div>
                                }
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>

        )
    }
}