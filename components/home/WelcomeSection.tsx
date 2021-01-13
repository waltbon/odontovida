import React from 'react';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import { urlFor } from '../../lib/sanity/imageBuilder';

export default class extends React.Component<{
    title: string;
    subtitle: string;
    description: string;
    doctorPrincipal: IDoctor;
    image: any;
    callToAction: {
        url: string;
        text: string;
    }
}> {
    render() {
        return (
            <section id="about-5" className="pt-100 about-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        {/* <div className="col-sm-12 col-lg-6 wow fadeInUp" data-wow-delay="0.6s"> */}
                        <div className="col-sm-12 col-lg-6">
                            <div className="about-img text-center" >
                                <img className="img-fluid" src={urlFor(this.props.image).url()} alt="about-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        {/* <div className="col-sm-12 col-lg-6 wow fadeInUp" data-wow-delay="0.4s"> */}
                        <div className="col-sm-12 col-lg-6">
                            <div className="txt-block pc-30">

                                <span className="section-id blue-color">{this.props.subtitle}</span>
                                <h1 className="h3-md steelblue-color">{this.props.title}</h1>
                                <p>{this.props.description}</p>

                                {
                                    !!this.props.doctorPrincipal &&
                                    <div className="singnature mt-35">
                                        <p className="p-small mb-15">
                                            {this.props.doctorPrincipal.fullname} 
                                        <br/> 
                                        <span className="blue-color">
                                            {this.props.doctorPrincipal.title}
                                        </span>
                                            </p>
                                        <a className="btn btn-lime" href={this.props.callToAction.url}>{this.props.callToAction.text}</a>
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