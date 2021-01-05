declare var $: any;
import React from 'react';
import { urlFor } from '../../lib/sanity/imageBuilder';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import BlockContent from '../ui/BlockContent';

export default class extends React.Component<{
    doctor: IDoctor,
    phone: string;
    email: string;
}> {

    componentDidMount() {
        var owl = $('.reviews-holder');
        owl.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            navBy: 1,
            autoplayTimeout: 4500,
            autoplayHoverPause: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    render() {
        return (<section id="doctor-1-details" className="doctor-details-section division">
            <div className="container">
                <div className="row">
                    {/* DOCTOR PHOTO */}
                    <div className="col-md-5">
                        <div className="doctor-photo mb-20">
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
                                                    this.props.doctor.titles.map((title, ix) => (
                                                        <span key={ix} style={{ paddingBottom: '12px' }}>
                                                            {title.title}
                                                            <span className="grey-color" style={{ marginRight: '20px', display: 'block' }}>
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
                            <h5 className="h5-md blue-color">Biografía</h5>
                            <BlockContent blocks={this.props.doctor.description} />
                            <div className="certificates pt-20">
                                <h5 className="h5-md blue-color">Aplicaciones</h5>
                                <p className="pb-2">Conozca algunas de las aplicaciones de mi servicio, aquí podrá ver el antes y el después de nuestros clientes.</p>
                                <div className="owl-carousel owl-theme reviews-holder">
                                    {
                                        Array.isArray(this.props.doctor.useCases) && !!this.props.doctor.useCases.length &&
                                        this.props.doctor.useCases.map((useCase, ucIx) => {
                                            const galleryCol = useCase.useCaseImages && useCase.useCaseImages.length > 1 ?
                                                'col-sm-12 col-lg-6' : 'col-sm-12 col-lg-12';
                                            return (
                                                <div key={ucIx} className="row">
                                                    <div className="col-12">
                                                        <h6 className="h6-md blue-color">{useCase.title}</h6>
                                                    </div>
                                                    {
                                                        useCase.useCaseImages.map((ucImage, imgiX) => {
                                                            return <div key={imgiX} className={galleryCol}>
                                                                <div className="certificate-image pb-20">
                                                                    <a className="image-link" title="">
                                                                        <img className="img-fluid" src={urlFor(ucImage.image).url()} alt={ucImage.title} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>	{/* END DOCTOR BIO */}
                </div>    {/* End row */}
            </div>	   {/* End container */}
        </section>
        )
    }
}